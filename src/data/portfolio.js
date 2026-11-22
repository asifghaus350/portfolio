/**
 * ============================================================
 *  SIRF YEH FILE EDIT KAREIN — poori website ka content yahin hai.
 *  Naam, links, projects, skills sab isi file se aate hain.
 * ============================================================
 */

export const profile = {
  name: 'Your Name',
  // Navbar/logo mein chhota naam
  shortName: 'YN',
  role: 'Full-Stack Developer',
  // Hero ke neeche type hone wali lines
  roles: [
    'Full-Stack Developer',
    'React & Node.js Engineer',
    'UI-focused Problem Solver',
  ],
  tagline:
    'I build fast, accessible web applications — from database schema to the last pixel of the interface.',
  location: 'Pakistan',
  availability: 'Open to freelance & full-time roles',
  email: 'you@example.com',
  resumeUrl: '/resume.pdf',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/your-username', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-username', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/your-username', icon: 'x' },
  { label: 'Email', href: 'mailto:you@example.com', icon: 'mail' },
]

export const stats = [
  { value: '3+', label: 'Years building for the web' },
  { value: '12+', label: 'Projects shipped' },
  { value: '5', label: 'Production apps live' },
]

export const about = {
  paragraphs: [
    'I am a full-stack developer who enjoys the messy middle of building products: designing the data model, wiring the API, then polishing the interface until it feels obvious to use.',
    'Most of my work is React on the front end and Node.js with a relational database behind it. I care about accessibility, sensible state management, and shipping small increments instead of big-bang rewrites.',
    'When I am not coding I am usually reading about systems design, breaking my own layouts at 320px width, or documenting what I learned in a short write-up.',
  ],
  highlights: [
    'React 19, Vite, Tailwind CSS',
    'Node.js, Express, REST APIs',
    'PostgreSQL, MongoDB, Firebase',
    'Git, Docker, CI/CD',
  ],
}

export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'JavaScript (ES2023)', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'Zod validation'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'SQL'],
  },
  {
    group: 'Tooling',
    items: ['Git & GitHub', 'Docker', 'Vitest', 'GitHub Actions', 'Vercel', 'Linux'],
  },
]

export const projects = [
  {
    title: 'HelpDesk Ticket Management System',
    blurb:
      'A role-based support desk where agents triage, assign and resolve tickets with SLA timers, audit trails and live dashboard analytics.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    year: '2026',
    href: '#',
    repo: '#',
    featured: true,
  },
  {
    title: 'Project Two',
    blurb:
      'Short, outcome-focused description. What problem did it solve, and what was the measurable result? Keep it to two lines.',
    tags: ['React', 'Firebase'],
    year: '2025',
    href: '#',
    repo: '#',
    featured: true,
  },
  {
    title: 'Project Three',
    blurb:
      'Another project. Mention the tricky part you solved — that is what interviewers ask about.',
    tags: ['Next.js', 'MongoDB'],
    year: '2025',
    href: '#',
    repo: '#',
    featured: false,
  },
]

export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Company Name',
    period: '2024 — Present',
    points: [
      'Built and shipped X feature that reduced Y by Z%.',
      'Owned the migration from A to B with zero downtime.',
      'Mentored two juniors and set up the team code review checklist.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Company Name',
    period: '2022 — 2024',
    points: [
      'Rebuilt the dashboard in React, cutting time-to-interactive in half.',
      'Introduced a design-token system adopted across four products.',
    ],
  },
]

export const education = {
  degree: 'BS Computer Science',
  school: 'University Name',
  period: '2018 — 2022',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
