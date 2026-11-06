/*
  ============================================================
  SITE CONTENT: edit this file to update the website.
  ============================================================

  To add a publication, copy one { ... } block in `PUBLICATIONS`,
  paste it at the top of the list, and change the fields.
  Fields you don't need can be deleted or left as "".

    type:    "Working Paper" | "Journal Article" | "Background Paper" |
             "Policy Report" | "Teaching Note" | anything else
    links:   any number of { label, url } pairs, e.g. PDF, SSRN, Slides
             (a PDF saved in the /papers folder can be linked as "papers/file.pdf")

  The list is grouped by year automatically, newest first.
*/

const SITE = {
  name: "Felicia Belostecinic",
  title: "Research Fellow, Growth Lab, Harvard University",
  photo: "images/headshot.jpg", // drop a photo at this path; initials show until then

  // Shown in the header. Delete any you don't use, or add more.
  profiles: [
    { label: "Growth Lab", url: "https://growthlab.hks.harvard.edu/person/felicia-belostecinic/" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=Gy7xBFkAAAAJ&hl=en" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/feliciabelostecinic/" },
    // { label: "CV", url: "papers/Belostecinic_CV.pdf" },
  ],

  // Each string is one paragraph.
  bio: [
    "I am a Research Fellow at the Growth Lab at Harvard University's Center for International Development, where I lead technical analysis on macroeconomic modeling and growth diagnostics for country engagements including Kazakhstan, Saudi Arabia, Azerbaijan, and Morocco.",
    "Before the Growth Lab, I advised governments and NGOs on monitoring and evaluation with IDinsight in West Africa and Morocco, and worked as a Research Analyst in the Research Department of the International Monetary Fund, supporting analysis for the World Economic Outlook. I also co-founded dData, a data analytics startup focused on institutional decision making during crises.",
    "My research interests include economic complexity and diversification, global value chains, innovation and knowledge diffusion, and improving institutional decision making. I hold an MPA in International Development from Harvard Kennedy School and a B.S. in Foreign Service from Georgetown University.",
  ],

  interests: [
    "Economic growth & diversification",
    "Economic complexity",
    "Global value chains",
    "Growth diagnostics",
    "Innovation & knowledge diffusion",
    "Institutional decision making",
  ],
};

const PUBLICATIONS = [
  {
    year: 2026,
    type: "Background Paper",
    title: "Asia's Integration and Upgrading in Global Value Chains",
    authors: "Felicia Belostecinic, Darshita Devnani, Angelo Jose Lumba, Neil Foster-McGregor, Mahinthan Joseph Mariasingham",
    venue: "Background paper for Global Value Chains and Inclusive Development: Asian Development Policy Report 2026, Asian Development Bank",
    links: [
      { label: "PDF", url: "https://www.adb.org/sites/default/files/institutional-document/1156756/adpr2026bp-1-asia-integration-upgrading-gvcs.pdf" },
      { label: "ADB", url: "https://www.adb.org/documents/asian-development-policy-report-2026-background-papers" },
    ],
  },
  {
    year: 2023,
    type: "Working Paper",
    title: "A Growth Diagnostic of Kazakhstan",
    authors:
      "Ricardo Hausmann, Nikita Taniparti, Clement Brenot, Douglas Barrios, Can Soylu, Roukaya El Houda, Ekaterina Vashkinskaya, Felicia Belostecinic, Sophia Henn",
    venue: "CID Faculty Working Paper No. 427; Growth Lab Working Paper No. 206, Harvard University",
    links: [
      { label: "PDF", url: "https://growthlab.hks.harvard.edu/wp-content/uploads/2023/03/2023-02-cid-wp-427-kazakhstan-growth-diagnostic.pdf" },
      { label: "RePEc", url: "https://ideas.repec.org/p/glh/wpfacu/206.html" },
    ],
  },
  {
    year: 2023,
    type: "Teaching Note",
    title: "Newlab: Scaling an Innovation Engine",
    authors: "Tarun Khanna, Felicia Belostecinic",
    venue: "Harvard Business School Teaching Note (for HBS Case No. 723-364), August 2023",
    links: [
      { label: "HBS", url: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64391" },
    ],
  },
  {
    year: 2019,
    type: "Policy Report",
    title: "New Incentives Evaluation Baseline Report",
    authors:
      "Mallika Sobti, Magdalena Anchondo, Martin Gould, Steven Brownstone, Deng-Tung Wang, Alison Connor, Niklas Heusch, Felicia Belostecinic, Zack Devlin-Foltz",
    venue: "IDinsight, prepared for GiveWell and New Incentives",
    note: "Impact evaluation of a conditional cash transfer program for childhood immunization in Nigeria.",
    links: [
      { label: "PDF", url: "https://files.givewell.org/files/DWDA%202009/NewIncentives/New_Incentives_Baseline_Report_Final_2019_06_03.pdf" },
    ],
  },
  {
    year: 2017,
    type: "Policy Report",
    title: "World Economic Outlook, October 2017: Seeking Sustainable Growth: Short-Term Recovery, Long-Term Challenges",
    authors: "International Monetary Fund, Research Department",
    venue: "International Monetary Fund",
    note: "Contributed econometric analysis as a Research Analyst in the IMF Research Department.",
    links: [
      { label: "IMF", url: "https://www.imf.org/en/Publications/WEO/Issues/2017/09/19/world-economic-outlook-october-2017" },
    ],
  },
  {
    year: 2017,
    type: "Journal Article",
    title: "Do Countries Export Their Corruption? A Micro Analysis of Russia's Trade Partners in Eastern Europe and Central Asia",
    authors: "Felicia Belostecinic",
    venue: "Journal of Eastern European and Central Asian Research, 4(1)",
    links: [
      { label: "Article", url: "https://ieeca.org/journal/index.php/JEECAR/article/view/150" },
      { label: "PDF", url: "https://ieeca.org/journal/index.php/JEECAR/article/download/150/pdf/893" },
    ],
  },
];

const PROJECTS = [
  {
    title: "Advancing Shared Prosperity and Promoting a More Diversified and Resilient Economy in Azerbaijan",
    org: "Growth Lab, Harvard University",
    dates: "2023–2026",
    description: "Applied research to generate new economic prosperity in Azerbaijan as the economy diversifies beyond oil.",
    url: "https://growthlab.hks.harvard.edu/project/azerbaijan-project/",
  },
  {
    title: "Sustainable and Inclusive Growth in Kazakhstan",
    org: "Growth Lab, Harvard University",
    dates: "2021–2022",
    description: "Research to boost economic growth and development in Kazakhstan, with particular emphasis on reducing socioeconomic inequalities.",
    url: "https://growthlab.hks.harvard.edu/project/kazakhstan/",
  },
];

/*
  Map of where I've lived, worked, and traveled.
  id = ISO 3166 numeric country code (3 digits, as text):
  https://en.wikipedia.org/wiki/ISO_3166-1_numeric
  Flags: lived / worked / visited. A country gets the strongest category it has
  (lived & worked > lived > worked with > visited). The "countries visited"
  count = every country that is lived or visited.
  Very small countries the map doesn't draw need coords: [longitude, latitude].
*/
const PLACES = [
  // Lived & worked
  { name: "Moldova", id: "498", lived: true, worked: true, note: "Home country" },
  { name: "United States", id: "840", lived: true, worked: true },
  { name: "Senegal", id: "686", lived: true, worked: true },
  { name: "Morocco", id: "504", lived: true, worked: true },
  // Lived
  { name: "Mexico", id: "484", lived: true },
  { name: "United Kingdom", id: "826", lived: true },
  { name: "Mauritius", id: "480", lived: true, coords: [57.55, -20.25] },
  // Worked with
  { name: "Nigeria", id: "566", worked: true, visited: true },
  { name: "Kazakhstan", id: "398", worked: true },
  { name: "Azerbaijan", id: "031", worked: true, visited: true },
  { name: "Saudi Arabia", id: "682", worked: true, visited: true },
  { name: "Cambodia", id: "116", worked: true, visited: true },
  { name: "India", id: "356", worked: true, visited: true },
  // Visited: Europe
  { name: "Romania", id: "642", visited: true },
  { name: "Ukraine", id: "804", visited: true },
  { name: "Russia", id: "643", visited: true },
  { name: "Denmark", id: "208", visited: true },
  { name: "Belgium", id: "056", visited: true },
  { name: "Netherlands", id: "528", visited: true },
  { name: "Germany", id: "276", visited: true },
  { name: "Czech Republic", id: "203", visited: true },
  { name: "Austria", id: "040", visited: true },
  { name: "Turkey", id: "792", visited: true },
  { name: "Georgia", id: "268", visited: true },
  { name: "Italy", id: "380", visited: true },
  { name: "Portugal", id: "620", visited: true },
  { name: "Hungary", id: "348", visited: true },
  { name: "Spain", id: "724", visited: true },
  { name: "France", id: "250", visited: true },
  { name: "Switzerland", id: "756", visited: true },
  { name: "Ireland", id: "372", visited: true },
  // Visited: Middle East & North Africa
  { name: "Israel", id: "376", visited: true },
  { name: "Qatar", id: "634", visited: true },
  { name: "Lebanon", id: "422", visited: true },
  { name: "Palestine", id: "275", visited: true },
  { name: "Tunisia", id: "788", visited: true },
  // Visited: Americas
  { name: "Canada", id: "124", visited: true },
  { name: "Brazil", id: "076", visited: true },
  { name: "Nicaragua", id: "558", visited: true },
  { name: "Dominican Republic", id: "214", visited: true },
  { name: "Peru", id: "604", visited: true },
  { name: "Venezuela", id: "862", visited: true },
  { name: "Bolivia", id: "068", visited: true },
  { name: "Colombia", id: "170", visited: true },
  // Visited: Asia
  { name: "Indonesia", id: "360", visited: true },
  { name: "Singapore", id: "702", visited: true, coords: [103.82, 1.35] },
  { name: "Thailand", id: "764", visited: true },
  { name: "Laos", id: "418", visited: true },
  { name: "Vietnam", id: "704", visited: true },
  { name: "Malaysia", id: "458", visited: true },
  // Visited: Sub-Saharan Africa
  { name: "South Africa", id: "710", visited: true },
  { name: "Zambia", id: "894", visited: true },
  { name: "Kenya", id: "404", visited: true },
];

const EXPERIENCE = [
  { role: "Research Fellow", org: "Growth Lab, Center for International Development, Harvard University", dates: "2022–present" },
  { role: "Co-Founder & Chief Economist", org: "dData", dates: "2021–2023" },
  { role: "Summer Graduate Intern", org: "Reserve Bank of India, Department of Economic and Policy Research", dates: "2021" },
  { role: "Associate", org: "IDinsight, Dakar", dates: "2018–2020" },
  { role: "Research Analyst", org: "International Monetary Fund, Research Department", dates: "2016–2018" },
];

const EDUCATION = [
  { degree: "Master in Public Administration in International Development (MPA/ID)", school: "Harvard Kennedy School", year: "2022" },
  { degree: "B.S. in Foreign Service, International Political Economy", school: "Georgetown University, School of Foreign Service", year: "2016" },
  { degree: "General Course, Department of Management", school: "London School of Economics and Political Science", year: "2014–2015" },
];

const VOLUNTEERING = [
  { role: "Winter School Trip Leader", org: "MIT Outing Club (MITOC)", dates: "", note: "Wilderness First Aid (WFA) certified" },
  { role: "Board of Directors", org: "Learning Enterprises", dates: "2021–2025" },
  { role: "Founder & Program Director, Moldova", org: "Learning Enterprises", dates: "2013–2015", note: "Founded an English-teaching program that reached 300+ students in two villages in rural Moldova" },
];
