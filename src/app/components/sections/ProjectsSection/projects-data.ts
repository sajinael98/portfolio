export type Project = {
  title: string;
  image?: string;
  tags: string[];
  description: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Rehan Menu",
    description:
      "A digital restaurant menu system with a clean user interface, real-time item updates, and QR-based instant access. Designed for simplicity and fast customer interaction.",
    tags: ["React", "Next.js", "Mantine UI", "Firebase"],
    demo: "https://food-order-app-b4181.web.app/",
    github: "https://github.com/sajinael98/rehan-menu",
    image: "/projects/rehan-menu.png",
  },
  {
    title: "UI/UX Designer Portfolio",
    description:
      "A branded portfolio experience crafted for a UI/UX designer — focuses on visual tone consistency, polished layout composition, project storytelling, and interactive micro-animations. Built with Mantine UI and optimized for responsiveness.",
    tags: ["React", "Mantine UI", "Brand Design", "UI/UX"],
    demo: "https://jihan-portfolio.web.app/",
    github: "https://github.com/sajinael98/jihan-portfolio",
    image: "/projects/jihan-portfolio.png",
  },
  {
    title: "Panto Furniture",
    description:
      "A modern furniture landing page focused on clean minimalistic UI, elegant typography, and product highlights. Designed to showcase interior products with a smooth browsing experience and strong visual identity.",
    tags: ["React", "Next.js", "CSS", "UI Design"],
    demo: "https://sajinael98.github.io/Panto-Furniture/",
    github: "https://github.com/sajinael98/Panto-Furniture",
    image: "/projects/panto-furniture.png",
  },
  {
    title: "Raabit Inventory",
    description:
      "A SaaS multi-tenant inventory system featuring stock rooms, UoM conversions, real-time stock transactions, posting logic, and full reporting dashboards.",
    tags: ["Next.js", "React", "Spring Boot", "MySQL", "SaaS"],
  },
  {
    title: "AutoForma",
    description:
      "A dynamic form builder for React that generates full forms from JSON schemas — supports custom components, validation, dynamic layouts, nested objects, and resource-based fields.",
    tags: ["React", "TypeScript", "Mantine UI", "Form Builder"],
    demo: "https://autoforma-demo-link.com",
    github: "https://github.com/sajinael/autoforma",
  },
  {
    title: "Base Pulse",
    description:
      "A reusable core architecture layer for Spring Boot apps — includes generic repository, service patterns, domain validation hooks, and dynamic filter specifications.",
    tags: ["Java", "Spring Boot", "JPA", "Hexagonal Design"],
    github: "https://github.com/sajinael/base-pulse",
  },
] as const;
