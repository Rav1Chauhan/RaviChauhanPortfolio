export const experiences = [
  {
    role: "Junior Frontend Developer",
    company: "Stuvio Digital Pvt. Ltd.",
    location: "Navi Mumbai",
    period: "April 2025 – Present",
    startDate: new Date("2025-04-01"),
    endDate: new Date(), // Using current date for Present
    current: true,
    color: "#06b6d4",
    highlights: [
      "Developed RRP Drones, Electronic, Defense, and Vimananu; built a reusable TSX product template system for scalable page generation.",
      "Engineered SVG path animations and GSAP transitions for RRP Drones, leading to its submission for the Kyoorius Creative Awards.",
      'Built a custom Next.js EMI calculator and interactive, state-driven "Loan Journey" modules for Jayostute.',
      "Developed & integrated Custom CMS for RRP-Electronic and RRP Defense, enabling dynamic management of newsrooms & careers data.",
      "Implemented WCAG accessibility standards and resolved complex Marathi-to-English script-rendering issues for MITL and Jayostute.",
      'Owned full "Go-Live" cycles for JPS Technologies and Vimananu, including terminal-based SMTP mail configuration and form validation.',
      "Managed Vercel deployments and Git workflows, ensuring pixel-perfect design through rigorous cross-browser and multi-device testing.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Pixel6 Web Studio",
    location: "Pune",
    period: "Dec 2022 – Aug 2024",
    startDate: new Date("2022-12-01"),
    endDate: new Date("2024-08-31"),
    current: false,
    color: "#7c3aed",
    highlights: [
      "Developed dynamic and reusable components using React with JSX & TSX",
      "Managed global state efficiently using Redux Toolkit",
      "Built responsive, interactive UI components focusing on performance and reusability",
      "Created HTML, SCSS, and JavaScript templates for WordPress themes",
      "Used GSAP for smooth animations across React and WordPress projects",
      "Ensured SEO optimisation, W3C guidelines and performance optimisation",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "Galgotias College of Engineering and Technology",
    period: "2023 – 2027",
    detail: "Currently pursuing",
  },
  {
    degree: "12th Standard",
    institution: "Rani Laxmi Bai Memorial School",
    period: "Jul 2021 – Jul 2022",
    detail: "85.4%",
  },
  {
    degree: "10th Standard",
    institution: "Rani Laxmi Bai Memorial School",
    period: "Jul 2019 – Jul 2020",
    detail: "88.6%",
  },
];

export const projects = [
  {
    num: "01",
    title: "VotingOnChain",
    company: "GITHUB / RAV1CHAUHAN",
    category: "Solana Blockchain",
    tags: ["Solana", "Rust", "Anchor", "React", "TypeScript"],
    desc: "A Solana-based on-chain voting application built using Rust and the Anchor framework, with a React frontend.",
    url: "https://voting-on-chain.vercel.app/",
    color: "#f43f5e",
  },

  {
    num: "02",
    title: "RealTimeExcelidraw",
    company: "github/Rav1Chauhan",
    category: "Public Sector / welfare",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express",
      "WebSocket",
      "PostgreSQL",
      "Turborepo",
    ],
    desc: "Built a real-time collaborative whiteboard application inspired by Excalidraw, enabling multiple users to draw and collaborate seamlessly in shared rooms using WebSockets.",
    url: "https://real-time-excelidraw-excelidraw-fro-chi.vercel.app/",
    color: "#10b981",
  },
  {
    num: "03",
    title: "ETHindexer",
    company: "@ GITHUB/RAV1CHAUHAN",
    category: "Blockchain / Backend Infrastructure",
    tags: [
      "Ethereum",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Ethers.js",
      "PostgreSQL",
      "Prisma",
    ],
    desc: "Developing an Ethereum blockchain indexing system that connects to Ethereum RPC, processes blockchain data, and stores structured records in PostgreSQL using Prisma. Building a TypeScript and Express.js backend to expose indexed blockchain data through REST APIs.",
    url: "https://github.com/Rav1Chauhan/ETHindexer",
    color: "#06b6d4",
  },
  {
    num: "04",
    title: "Solana Token Escrow",
    company: "GITHUB/RAV1CHAUHAN",
    category: "Blockchain / DeFi",
    tags: ["Rust", "Solana", "Anchor", "React", "TypeScript", "LiteSVM"],
    desc: "Built a Solana-based token escrow and atomic swap application using Rust and Anchor. Implemented PDA-controlled token vaults, SPL token transfers, offer execution, cancellation, and refunds. Tested smart contract instructions using LiteSVM.",
    url: "https://escrow-sjf3.vercel.app/",
    color: "#7c3aed",
  },
  {
    num: "05",
    title: "BRAIN",
    company: "github/Rav1Chauhan",
    category: "Public Sector / welfare",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "bcrypt",
    ],
    desc: "A modern second-brain application that lets users save, organize, and manage useful content from different platforms in one place.",
    url: "https://brain-eta-blue.vercel.app/",
    color: "#3b82f6",
  },
  // {
  //   num: "06",
  //   title: "JPS Technologies",
  //   company: "Stuvio Digital",
  //   category: "Corporate / Consultancy",
  //   tags: ["WordPress", "SCSS", "SEO", "SMTP"],
  //   desc: "Managed the end-to-end deployment and configuration, ensuring pixel-perfect design and optimized performance.",
  //   url: "https://jpstechnologies.co.uk",
  //   color: "#8b5cf6",
  // },
  // {
  //   num: "07",
  //   title: "Pixel6",
  //   company: "Pixel6 Studio",
  //   category: "Studio Website",
  //   tags: ["React", "GSAP", "Tailwind", "Framer Motion"],
  //   desc: "Contributed to the development of the primary studio website, focusing on high-performance animations and responsive design.",
  //   url: "https://pixel6.co",
  //   color: "#e11d48",
  // },
  // {
  //   num: "08",
  //   title: "RMS Landing Page",
  //   company: "Pixel6 Studio",
  //   category: "Resource Management",
  //   tags: ["React", "SCSS", "Frontend Architecture"],
  //   desc: "Built a sleek, data-driven landing page for a Resource Management System focusing on clarity and user flow.",
  //   url: "https://lab.pixel6.co/rms",
  //   color: "#f59e0b",
  // },
  // {
  //   num: "09",
  //   title: "Fishler",
  //   company: "Pixel6 Studio",
  //   category: "E-Commerce / Branding",
  //   tags: ["Next.js", "UI/UX", "Mobile First"],
  //   desc: "Developed a modern, visual-heavy landing page for a premium brand, ensuring seamless across-device performance.",
  //   url: "https://fishler.co",
  //   color: "#14b8a6",
  // },
];

export function calculateTotalExperience() {
  let totalMonths = 0;
  experiences.forEach((exp) => {
    const end = exp.endDate || new Date();
    const start = exp.startDate;
    const diffMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    totalMonths += diffMonths;
  });
  return (totalMonths / 12).toFixed(1);
}
