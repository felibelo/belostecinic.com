// Renders the content from data.js. You normally don't need to edit this file.
(function () {
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const link = (label, url) => {
    const a = el("a", null, label);
    a.href = url;
    if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  };

  // Header
  $("name").textContent = SITE.name;
  $("title").textContent = SITE.title;
  SITE.profiles.forEach((p) => { const li = el("li"); li.append(link(p.label, p.url)); $("profiles").append(li); });

  const img = new Image();
  img.alt = SITE.name;
  img.onload = () => { $("photo").replaceChildren(img); $("photo").classList.add("has-img"); };
  img.src = SITE.photo;

  // About
  SITE.bio.forEach((t) => $("bio").append(el("p", null, t)));
  SITE.interests.forEach((t) => $("interests").append(el("li", null, t)));

  // Work in progress
  const wip = typeof WORK_IN_PROGRESS !== "undefined" ? WORK_IN_PROGRESS : [];
  if (wip.length) {
    $("wip-list").append(el("h3", "year", "In progress"));
    const ol = el("ol", "pubs");
    wip.forEach((w) => {
      const li = el("li", "pub");
      li.append(el("span", "badge", "Work in Progress"), el("div", "pub-title", w.title));
      if (w.authors) li.append(el("div", "pub-authors", w.authors));
      if (w.description) li.append(el("div", "pub-note", w.description));
      ol.append(li);
    });
    $("wip-list").append(ol);
  }

  // Publications
  const pubs = [...PUBLICATIONS].sort((a, b) => b.year - a.year);
  const types = ["All", ...new Set(pubs.map((p) => p.type).filter(Boolean))];
  let active = "All";

  function highlightName(authors) {
    const frag = document.createDocumentFragment();
    const parts = authors.split(SITE.name);
    parts.forEach((part, i) => {
      frag.append(part);
      if (i < parts.length - 1) frag.append(el("strong", null, SITE.name));
    });
    return frag;
  }

  function renderPubs() {
    const list = $("pub-list");
    list.replaceChildren();
    const shown = pubs.filter((p) => active === "All" || p.type === active);
    if (!shown.length) { list.append(el("p", "muted", "Nothing here yet.")); return; }
    let lastYear = null;
    let ol;
    shown.forEach((p) => {
      if (p.year !== lastYear) {
        list.append(el("h3", "year", String(p.year)));
        ol = el("ol", "pubs");
        list.append(ol);
        lastYear = p.year;
      }
      const li = el("li", "pub");
      if (p.type) li.append(el("span", "badge", p.type));
      li.append(el("div", "pub-title", p.title));
      if (p.authors) { const a = el("div", "pub-authors"); a.append(highlightName(p.authors)); li.append(a); }
      if (p.venue) li.append(el("div", "pub-venue", p.venue));
      if (p.note) li.append(el("div", "pub-note", p.note));
      if (p.links && p.links.length) {
        const ls = el("div", "pub-links");
        p.links.forEach((l) => ls.append(link(l.label, l.url)));
        li.append(ls);
      }
      ol.append(li);
    });
  }

  if (types.length > 2) {
    types.forEach((t) => {
      const b = el("button", null, t);
      b.type = "button";
      b.setAttribute("aria-pressed", t === active);
      b.onclick = () => {
        active = t;
        [...$("filters").children].forEach((c) => c.setAttribute("aria-pressed", c.textContent === t));
        renderPubs();
      };
      $("filters").append(b);
    });
  }
  renderPubs();

  // Projects
  PROJECTS.forEach((p) => {
    const c = el("article", "card");
    const h = el("h3");
    h.append(p.url ? link(p.title, p.url) : p.title);
    c.append(h);
    c.append(el("div", "meta", [p.org, p.dates].filter(Boolean).join(" · ")));
    if (p.description) c.append(el("p", null, p.description));
    $("project-list").append(c);
  });

  // CV
  EXPERIENCE.forEach((x) => {
    const li = el("li");
    li.append(el("div", "t-main", x.role), el("div", "t-sub", x.org));
    if (x.dates) li.append(el("div", "t-date", x.dates));
    $("experience").append(li);
  });
  (typeof TEACHING !== "undefined" ? TEACHING : []).forEach((x) => {
    const li = el("li");
    li.append(el("div", "t-main", x.role), el("div", "t-sub", x.org));
    if (x.dates) li.append(el("div", "t-date", x.dates));
    $("teaching").append(li);
  });
  EDUCATION.forEach((x) => {
    const li = el("li");
    li.append(el("div", "t-main", x.degree), el("div", "t-sub", x.school));
    if (x.year) li.append(el("div", "t-date", x.year));
    $("education").append(li);
  });
  (typeof VOLUNTEERING !== "undefined" ? VOLUNTEERING : []).forEach((x) => {
    const li = el("li");
    li.append(el("div", "t-main", x.role), el("div", "t-sub", x.org));
    if (x.note) li.append(el("div", "t-sub", x.note));
    if (x.dates) li.append(el("div", "t-date", x.dates));
    $("volunteering").append(li);
  });

  (typeof LANGUAGES !== "undefined" ? LANGUAGES : []).forEach((l, i) => {
    if (i) $("languages").append(" · ");
    $("languages").append(el("span", "lang", l.name), " ", el("span", "lang-level", "(" + l.level + ")"));
  });

  // Footer
  $("year").textContent = new Date().getFullYear();
})();
