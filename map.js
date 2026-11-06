// Draws the "Where I've lived & worked" map from PLACES in data.js.
(function () {
  const groups = [
    { key: "both", label: "Lived & worked", test: (p) => p.lived && p.worked },
    { key: "lived", label: "Lived", test: (p) => p.lived && !p.worked },
    { key: "worked", label: "Worked with", test: (p) => !p.lived && p.worked },
  ];
  const catOf = (p) => groups.find((g) => g.test(p));

  // Text list (always shown; also the fallback if the map can't load)
  const list = document.getElementById("place-list");
  groups.forEach((g) => {
    const names = PLACES.filter(g.test).map((p) => p.name);
    if (!names.length) return;
    const dt = document.createElement("dt");
    dt.innerHTML = `<i class="sw sw-${g.key}"></i>${g.label}`;
    const dd = document.createElement("dd");
    dd.textContent = names.join(", ");
    list.append(dt, dd);
  });

  if (typeof d3 === "undefined" || typeof topojson === "undefined") return;

  const byId = new Map(PLACES.map((p) => [p.id, p]));
  const W = 960, H = 470;
  const mapEl = document.getElementById("map");
  const tip = document.getElementById("map-tip");

  d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json").then((world) => {
    const countries = topojson.feature(world, world.objects.countries).features
      .filter((f) => f.id !== "010"); // drop Antarctica
    const projection = d3.geoNaturalEarth1().fitExtent([[4, 4], [W - 4, H - 4]], { type: "FeatureCollection", features: countries });
    const path = d3.geoPath(projection);

    const svg = d3.select(mapEl).append("svg").attr("viewBox", `0 0 ${W} ${H}`);
    const pat = svg.append("defs").append("pattern")
      .attr("id", "hatch").attr("patternUnits", "userSpaceOnUse")
      .attr("width", 7).attr("height", 7).attr("patternTransform", "rotate(45)");
    pat.append("rect").attr("width", 7).attr("height", 7).attr("class", "hatch-a");
    pat.append("rect").attr("width", 3.5).attr("height", 7).attr("class", "hatch-b");

    const show = (event, p) => {
      const g = catOf(p);
      tip.innerHTML = `<strong>${p.name}</strong><br>${g.label}${p.note ? " · " + p.note : ""}`;
      tip.hidden = false;
      const r = mapEl.parentElement.getBoundingClientRect();
      tip.style.left = Math.min(event.clientX - r.left + 12, r.width - tip.offsetWidth - 4) + "px";
      tip.style.top = event.clientY - r.top + 12 + "px";
    };
    const hide = () => { tip.hidden = true; };

    svg.append("g").selectAll("path").data(countries).join("path")
      .attr("d", path)
      .attr("class", (d) => { const p = byId.get(d.id); return p ? "country hl c-" + catOf(p).key : "country"; })
      .on("mousemove", (e, d) => { const p = byId.get(d.id); p ? show(e, p) : hide(); })
      .on("mouseleave", hide);

    // Small countries (e.g. Moldova) get a dot so they're visible
    const small = countries.filter((d) => byId.has(d.id) && path.area(d) < 60);
    svg.append("g").selectAll("circle").data(small).join("circle")
      .attr("cx", (d) => path.centroid(d)[0]).attr("cy", (d) => path.centroid(d)[1]).attr("r", 5)
      .attr("class", (d) => "dot c-" + catOf(byId.get(d.id)).key)
      .on("mousemove", (e, d) => show(e, byId.get(d.id)))
      .on("mouseleave", hide);
  }).catch(() => { mapEl.remove(); });
})();
