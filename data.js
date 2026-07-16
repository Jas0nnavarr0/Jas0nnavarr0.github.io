// ============================================
// EDIT THIS FILE to update your site content.
// Projects, experience, and education all live here.
// Adding a new project: copy one object in PROJECTS,
// give it a unique "slug", fill in the fields, and it
// automatically gets its own case-study page.
// ============================================

const PROJECTS = [
  {
    slug: "movie-rental-database",
    title: "Movie Rental Database",
    meta: "Oct \u2013 Dec 2025 \u2014 React + Vite, Spring Boot, MySQL",
    problem: "Built a full-stack rental platform so users have one place to browse, rent, and review movies.",
    detail: "React + Vite frontend, Spring Boot backend, MySQL database. Users create accounts, browse a catalog, rent titles, and leave reviews.",
    stack: ["React", "Vite", "Spring Boot", "MySQL", "Redux", "Axios", "Tailwind CSS"],
    link: { label: "View on GitHub", url: "#" },
    role: "Full-stack developer (team project)",
    timeline: "Oct \u2013 Dec 2025",
    overview: "A full-stack web application that lets users create accounts, browse a movie catalog, rent titles, and leave reviews \u2014 built to practice a complete client-to-database pipeline rather than a single layer in isolation.",
    challenge: "The team needed a frontend that felt responsive and modern while staying decoupled from a Java backend, plus a data model that could handle accounts, rental status, and reviews without getting tangled.",
    approach: [
      "Built the frontend in React + Vite for fast local iteration, using Redux for shared auth/rental state and Tailwind for consistent styling.",
      "Used Axios to handle all REST calls to the Spring Boot backend, with React Router managing client-side navigation between catalog, account, and review views.",
      "Designed the MySQL schema around three core entities \u2014 users, movies, and rentals \u2014 with reviews tied to a completed rental to keep data honest."
    ],
    outcome: "A working end-to-end app covering account creation, browsing, renting, and reviewing \u2014 the full loop a real rental platform needs, scoped for one semester.",
    learned: "Agreeing on API contracts early let frontend and backend work run in parallel instead of blocking each other \u2014 a lesson in team coordination I didn\u2019t expect from a code project."
  },
  {
    slug: "lost-and-found-tracker",
    title: "Lost & Found Tracker",
    meta: "Aug \u2013 Dec 2025 \u2014 Java, Spring Boot, MySQL",
    problem: "Addressed a real campus pain point: no centralized way for students to recover lost items.",
    detail: "Translated functional requirements into REST APIs, authentication flows, and database models. Presented the technical architecture to non-technical stakeholders.",
    stack: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    link: { label: "View on GitHub", url: "#" },
    role: "Backend developer & technical liaison",
    timeline: "Aug \u2013 Dec 2025",
    overview: "A full-stack campus tool for reporting and recovering lost items, built after noticing how scattered the existing process was \u2014 mostly group chats and bins nobody checked.",
    challenge: "Different stakeholders described \u2018lost and found\u2019 differently, and the team needed auth and data models that matched how people would actually report and search for items.",
    approach: [
      "Turned loosely defined functional requirements into concrete REST API contracts before writing implementation code.",
      "Built auth flows so reports could be tied to a real user without making the system feel burdensome for a quick submission.",
      "Modeled item state as lost \u2192 found \u2192 claimed rather than simple storage, so the data could support search and matching later.",
      "Presented the architecture and workflows to non-technical stakeholders, translating schema and API decisions into plain language."
    ],
    outcome: "A working system with a clear item-status lifecycle and documentation that non-technical stakeholders could follow and sign off on.",
    learned: "Presenting technical decisions to a non-technical audience forced clarity in my own thinking that writing code alone never would \u2014 a skill that maps directly to explaining software to customers."
  },
  {
    slug: "movie-recommendation-generator",
    title: "Movie Recommendation Generator",
    meta: "JavaScript, HTML, CSS",
    problem: "A lightweight tool that recommends movies based on user-selected genres.",
    detail: "Built with DOM manipulation and event-driven programming to keep the interaction responsive and simple.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: null,
    role: "Solo project",
    timeline: "Personal project",
    overview: "A small interactive tool where a user picks genres and gets movie suggestions back instantly \u2014 no backend, no build step, just vanilla JavaScript.",
    challenge: "Keeping the interaction snappy and the code readable without reaching for a framework, since the point was to practice core DOM and event fundamentals.",
    approach: [
      "Used event-driven programming to respond to genre selections immediately, updating the DOM without a page reload.",
      "Kept state management explicit \u2014 no external libraries \u2014 to stay close to the underlying browser APIs."
    ],
    outcome: "A functional instant-feedback recommendation tool that demonstrates comfort with vanilla JS fundamentals before layering frameworks on top.",
    learned: "Working without a framework made clear how much React abstracts away \u2014 useful context when debugging issues in larger projects."
  },
  {
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    meta: "JavaScript, HTML, CSS",
    problem: "Designed to be easy to navigate and update as projects and experience grow.",
    detail: "Built with a focus on accessibility, visual consistency, and clean structure across devices.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: { label: "You\u2019re looking at it", url: "#" },
    role: "Solo project",
    timeline: "Ongoing",
    overview: "The site you\u2019re on right now \u2014 rebuilt to separate content from structure so it stays easy to update between job applications.",
    challenge: "Avoiding a generic template feel while keeping the codebase simple enough to maintain solo.",
    approach: [
      "Split content (data.js) from structure (HTML) from styling (CSS) so updates rarely touch more than one file.",
      "Built a consistent \u2018pitch sheet\u2019 visual system that ties projects, experience, and education together.",
      "Added scroll-triggered reveals and a page-load sequence to make the site feel considered without overdoing the motion."
    ],
    outcome: "A maintainable, distinctive personal site that doubles as a working example of frontend craft in interviews.",
    learned: "Treating my own portfolio like a real client project \u2014 with a design system and content/structure separation \u2014 was a good forcing function."
  },
  {
    slug: "autonomous-small-robot",
    title: "Autonomous Small Robot",
    meta: "Aug 2023 \u2013 Dec 2024 \u2014 C, VEX Cortex Microcontroller",
    problem: "Programmed an autonomous robot to navigate and avoid collisions using onboard sensors.",
    detail: "Tested, debugged, and iterated on motion algorithms to improve speed and accuracy over multiple build cycles.",
    stack: ["C", "VEX Cortex", "Sensor Integration", "Motor Control"],
    link: null,
    role: "Programmer (team project)",
    timeline: "Aug 2023 \u2013 Dec 2024",
    overview: "An autonomous robot on the VEX Cortex platform, programmed to navigate a course and avoid collisions using onboard sensors rather than remote control.",
    challenge: "Sensor noise and inconsistent motor response meant the same code could behave differently run-to-run, making \u2018working\u2019 code a moving target.",
    approach: [
      "Wrote motion and navigation logic in C, integrating sensor input directly into movement decisions rather than a fixed path.",
      "Ran repeated test cycles to isolate whether issues came from sensor calibration, motor control, or logic \u2014 adjusting one variable at a time.",
      "Iterated on collision-detection thresholds across multiple build cycles to balance reaction speed against false positives."
    ],
    outcome: "A robot that navigated and avoided obstacles autonomously with meaningfully improved accuracy after iterative testing.",
    learned: "First real exposure to the gap between code that\u2019s logically correct and a system that behaves reliably in the physical world \u2014 a lesson in testing discipline that has stuck."
  }
];

const EXPERIENCE = [
  {
    title: "Customer Service Associate",
    org: "Home Depot \u2014 Gilroy, CA",
    dates: "May 2025 \u2013 Present",
    points: [
      "Conduct consultative conversations with 50+ customers per shift to identify needs and recommend solutions \u2014 the same motion as a sales discovery call.",
      "Communicate in English and Spanish to serve a broader customer base and resolve issues faster.",
      "Resolve POS and checkout issues under time pressure, keeping operations smooth during peak traffic.",
      "Coordinate with inventory and floor teams to track down high-demand items for customers."
    ]
  },
  {
    title: "Starter, Cart Barn & Grounds",
    org: "Eagle Ridge Golf Course \u2014 Gilroy, CA",
    dates: "June 2023 \u2013 Jan 2025",
    points: [
      "Managed cart operations and logistics for 50+ daily players.",
      "Coordinated tee time scheduling and supported Pro Shop staff with customer requests.",
      "Maintained equipment and facility standards during peak hours."
    ]
  }
];

const EDUCATION = [
  {
    title: "B.S. Software Engineering",
    org: "San Jos\u00e9 State University, San Jos\u00e9, CA",
    dates: "Expected May 2027",
    points: [
      "Relevant coursework: Data Structures & Algorithms, Programming Methodology, Discrete Mathematics, Linear Algebra, Calculus I\u2013III, Physics I\u2013II."
    ]
  },
  {
    title: "Amazon Junior Software Developer Professional Certificate",
    org: "Issued via Coursera",
    dates: "Fall 2025",
    points: [
      "Full-stack Java development with Spring Boot and SQL, SDLC, OOP, responsive web design, and generative AI tools."
    ]
  },
  {
    title: "High School Diploma",
    org: "Christopher High School, Gilroy, CA",
    dates: "June 2023",
    points: [
      "Honors: Principal\u2019s List (2021), Honor Roll (2019\u20132020, 2022)."
    ]
  }
];
