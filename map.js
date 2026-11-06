// Draws the "Where I've lived, worked & traveled" map from PLACES in data.js.
(function () {
  const groups = [
    { key: "both", label: "Lived & worked", test: (p) => p.lived && p.worked },
    { key: "lived", label: "Lived", test: (p) => p.lived && !p.worked },
    { key: "worked", label: "Worked with", test: (p) => !p.lived && p.worked },
    { key: "visited", label: "Visited", test: (p) => !p.lived && !p.worked && p.visited },
  ];
  const catOf = (p) => groups.find((g) => g.test(p));
  const byName = (a, b) => a.name.localeCompare(b.name);

  // Count of countries visited (lived counts as visited)
  const visitedCount = PLACES.filter((p) => p.lived || p.visited).length;
  const statEl = document.getElementById("place-stat");
  if (statEl) statEl.textContent = `${visitedCount} countries visited`;

  // Text list (always shown; also the fallback if the map can't load)
  const list = document.getElementById("place-list");
  groups.forEach((g) => {
    const names = PLACES.filter(g.test).sort(byName).map((p) => p.name);
    if (!names.length) return;
    const dt = document.createElement("dt");
    dt.innerHTML = `<i class="sw sw-${g.key}"></i>${g.label}`;
    const dd = document.createElement("dd");
    dd.textContent = names.join(", ");
    list.append(dt, dd);
  });

  const mapEl = document.getElementById("map");
  if (typeof d3 === "undefined" || typeof topojson === "undefined" || !window.WORLD_ATLAS) { mapEl.remove(); return; }

  const byId = new Map(PLACES.map((p) => [p.id, p]));
  const W = 960, H = 470;
  const tip = document.getElementById("map-tip");

  try {
    const world = window.WORLD_ATLAS;
    const countries = topojson.feature(world, world.objects.countries).features
      .filter((f) => f.id !== "010"); // drop Antarctica
    const projection = d3.geoNaturalEarth1().fitExtent([[4, 4], [W - 4, H - 4]], { type: "FeatureCollection", features: countries });
    const path = d3.geoPath(projection);
    const drawn = new Set(countries.map((c) => c.id));

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

    // Dots: countries too small to see (e.g. Moldova), or not drawn at all (e.g. Singapore)
    const dots = [];
    countries.forEach((d) => {
      const p = byId.get(d.id);
      if (p && path.area(d) < 60) dots.push({ p, xy: path.centroid(d) });
    });
    PLACES.forEach((p) => { if (!drawn.has(p.id) && p.coords) dots.push({ p, xy: projection(p.coords) }); });

    svg.append("g").selectAll("circle").data(dots).join("circle")
      .attr("cx", (d) => d.xy[0]).attr("cy", (d) => d.xy[1])
      .attr("r", (d) => (catOf(d.p).key === "visited" ? 3.5 : 5))
      .attr("class", (d) => "dot c-" + catOf(d.p).key)
      .on("mousemove", (e, d) => show(e, d.p))
      .on("mouseleave", hide);
  } catch (e) {
    mapEl.remove();
  }
})();
