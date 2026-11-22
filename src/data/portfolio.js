/**
 * ============================================================
 *  SIRF YEH FILE EDIT KAREIN — poori website ka content yahin hai.
 *  Source: ASIF GHAUS-RESUME.pdf
 * ============================================================
 */

export const profile = {
  name: 'Mohammad Asif',
  // Navbar/logo mein chhota naam
  shortName: 'MA',
  role: 'Backend / Full Stack Developer',
  // Hero ke neeche type hone wali lines
  roles: [
    'Backend Developer',
    'Full Stack Developer',
    'Node.js & NestJS Engineer',
    'React Developer',
  ],
  tagline:
    'I build reliable REST APIs and full-stack products — NestJS, TypeScript and PostgreSQL on the server, React and Tailwind on the screen.',
  location: 'Hyderabad, India',
  availability: 'Open to Backend & Full Stack roles',
  email: 'asifghaus350@gmail.com',
  phone: '+91 84394 51992',
  resumeUrl: '/resume.pdf',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/asifghaus350', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/asif-ghaus-75aa11298/',
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:asifghaus350@gmail.com', icon: 'mail' },
]

export const stats = [
  { value: '1+', label: 'Year of professional experience' },
  { value: '900+', label: 'Automated tests written' },
  { value: '3', label: 'Shipped full-stack projects' },
]

export const about = {
  paragraphs: [
    'I am a software developer with around a year of experience building backend and full-stack applications in JavaScript, TypeScript and Java. Right now I am an Associate Software Developer at Alt-Switch Software Services, where I develop and fix REST APIs for an ERP and wholesale distribution platform using NestJS, TypeORM and PostgreSQL.',
    'Most of my day is spent on the parts that users never see but always feel: price-list lifecycles that must keep the correct status, search endpoints that break when no sort column is passed, and shipping notices that should show a readable payment term instead of an internal ID.',
    'I like tests that catch real regressions, so I write them — 600+ API tests with Jest and Supertest, 330+ frontend tests with Vitest, and Playwright runs for the browser flows. Outside of work I build full-stack side projects to practise the same discipline end to end.',
  ],
  highlights: [
    'Node.js, NestJS, Express, TypeScript',
    'React, Vite, Tailwind CSS',
    'PostgreSQL, MySQL, MongoDB, Redis',
    'Spring Boot, Java, JWT auth',
  ],
}

export const skills = [
  {
    group: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java (Core, OOP)', 'SQL', 'Python', 'C'],
  },
  {
    group: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'Express.js',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'REST APIs',
      'JWT Auth',
      'Microservices',
    ],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    group: 'Databases & ORM',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'TypeORM', 'Mongoose', 'Hibernate / JPA'],
  },
  {
    group: 'Testing & Tools',
    items: [
      'Jest',
      'Vitest',
      'Playwright',
      'Supertest',
      'Postman',
      'Git',
      'GitHub',
      'Maven',
      'Agile / Scrum',
      'Linux',
    ],
  },
]

export const projects = [
  {
    title: 'Watch Strap Platform',
    blurb:
      'Full-stack e-commerce store with "Find My Strap": shoppers pick their watch — brand, series, model, size — and see only straps that fit, using lug-width matching and explicit smartwatch compatibility rules. Checkout cannot oversell: atomic stock decrement, all-or-nothing order transactions and idempotency keys.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    year: '2025',
    href: '',
    repo: 'https://github.com/asifghaus350/Watch-strap-Platform',
    featured: true,
  },
  {
    title: 'HelpDesk Ticket Management System',
    blurb:
      'Role-based support desk where agents triage, assign and resolve tickets, with SLA timers, audit trails and live dashboard analytics for support teams.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    year: '2026',
    href: '',
    repo: '',
    featured: true,
  },
  {
    title: 'Student Library Management System',
    blurb:
      'Secure backend service for authentication, book management and transactions, with JWT-based REST APIs, request validation and centralized exception handling. Optimized the relational schema and Hibernate queries, cutting query execution time by 30%.',
    tags: ['Spring Boot', 'Spring Security', 'MySQL', 'Hibernate'],
    year: '2024',
    href: '',
    repo: '',
    featured: false,
  },
]

export const experience = [
  {
    role: 'Associate Software Developer',
    company: 'Alt-Switch Software Services',
    period: 'Aug 2026 — Present',
    points: [
      'Develop and maintain backend modules for an ERP / wholesale distribution platform using NestJS, TypeScript, TypeORM, PostgreSQL and Redis.',
      'Fixed price-list lifecycle bugs so draft, archived and reactivated price lists keep the correct status.',
      'Resolved an HTTP 500 in the customer price item search that occurred when no sort column was applied.',
      'Improved Advance Shipping Notice (ASN) details to show readable payment term names instead of internal IDs.',
      'Test and support the admin dashboard, a warehouse management Android app and a POS system across releases, using Git feature branches, pull requests and staging deployments.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Wipro',
    period: 'Dec 2025 — Jul 2026',
    points: [
      'Developed and maintained web application features using JavaScript, HTML and CSS within the development team.',
      'Integrated REST APIs, fixed bugs and supported testing across releases, following Agile sprints and Git workflows.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Meta-Cyrus Technology (Remote)',
    period: 'Dec 2024 — Feb 2025',
    points: [
      'Built backend components and RESTful APIs with Node.js and Express for 3+ full-stack applications, improving server response time by 25%.',
      'Integrated real-time database features and turned requirements into working solutions in a cross-functional remote team.',
    ],
  },
]

export const education = {
  degree: 'B.Tech in Computer Science',
  school: 'Maulana Azad National Urdu University (MANUU), Hyderabad',
  period: '2021 — 2025',
  detail: 'CGPA 6.9 / 10',
}

export const certifications = [
  { label: 'Java — HackerRank' },
  { label: 'SQL — HackerRank' },
]

export const languages = ['English', 'Hindi', 'Urdu']

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
