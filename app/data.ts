export const siteData = {
  isOpenForWork: true,
  intro: "Hi there. I am",
  name: "Edwin Martinson",
  title: "Web Developer",
  summary:
    "Web Developer with experience in full-stack development, specializing in TypeScript, React.js and Node.js. Proficient in working with relational and document databases like MySQL, PostgreSQL and MongoDB. Passionate about user experience and interface design, with hands-on expertise in design tools like Axure RP, Figma, and Adobe XD. Successfully contributed to fintech solutions, leveraging both frontend and backend technologies to build scalable and user-friendly applications. Eager to collaborate on innovative projects and continuously expand technical expertise.",
  education: [
    {
      school: "University of Greenwich",
      course: "BSc. H Computing",
      graduationDate: "December 2022",
    },
    {
      school: "Prempeh College",
      course: "Science",
      graduationDate: "April 2019",
    },
  ],
  stack: {
    languages: ["JavaScript", "Typescript", "Python"],
    frontend: ["React.js", "React Router", "Next.js"],
    backend: ["Node.js", "Deno"],
    database: ["MySQL", "PostgreSQL", "MongoDB"],
    versionControl: ["Git", "GitHub"],
    operatingSystem: ["Windows", "Linux"],
    shell: ["Bash", "PowerShell"],
    container: ["Docker", "Kubernetes"],
    codeEditor: ["VSCode", "WebStorm"],
    aiAssistant: ["Copilot", "Supermaven"],
  },
  experience: [
    {
      position: "Full Stack Developer",
      company: "Union Systems Global GH. Ltd",
      startDate: "October 2023",
      endDate: "September 2024",
      role: [
        "Developed and maintained design systems and reusable UI components for web applications using Figma",
        "Translated UI/UX designs into responsive and interactive web interfaces using React.js.",
        "Built and maintained backend services and application logic using Node.js",
        "Designed and implemented RESTful APIs using Express.js to support web applications.",
        "Managed version control, tracked code changes, and collaborated with teams using Git.",
      ],
    },
  ],
  projects: [
    {
      title: "Date Calculator (Multi-stack)",
      description:
        "This project is a simple yet effective Date Calculator built using React, Angular, Vue, Svelte, and Solid. The goal was to challenge myself by working with technologies I hadn't explored before. The application allows users to input a number of days, and it calculates the future or past date along with the corresponding weekday.",
      stack: ["React", "Angular", "Vue", "Svelte", "Solid"],
      link: "https://github.com/edwinmartinson/date_calculator",
    },
    {
      title: "Text Stream API (Multi-stack)",
      description:
        "This project is a Text Streaming API implemented across multiple JavaScript backend frameworks and runtimes. The API streams text data to the frontend in real-time, allowing for dynamic content updates without requiring polling. To broaden my experience with different backend environments, I implemented the API using: Oak (Deno), Express (Node.js), Elysia (Bun), Hono (Bun), Fastify (Node.js), Encore (Encore SDK + Node.js),",
      stack: [
        "Node.js",
        "Deno",
        "Bun",
        "Express",
        "Oak",
        "Elysia",
        "Hono",
        "Fastify",
        "Encore",
      ],
      link: "https://github.com/edwinmartinson/text_stream_api",
    },
    {
      title: "Interbank Reconciliation System",
      description:
        "This is a full-stack Interbank Reconciliation System built with: Frontend: React (TypeScript), Backend: Node.js (TypeScript) with Drizzle ORM, Database: PostgreSQL. The system automates the reconciliation of financial transactions from multiple sources, including: APIs (handling various authentication methods), Remote directories (FTP servers), Manual document uploads (supporting MT940, CSV, Excel, and more). By default, the system performs reconciliation at the end of the day, ensuring accuracy in transaction records. This project integrates various data formats and protocols, making it a robust solution for financial reconciliation workflows.",
      stack: ["React", "Node.js", "PostgreSQL", "Drizzle ORM"],
      link: "https://github.com/edwinmartinson/reconciler_backend",
    },
  ],
  socials: {
    linkedin: {
      text: "@edwin-martinson",
      link: "https://linkedin.com/in/edwin-martinson",
    },
    twitter: {
      text: "@winomartinson",
      link: "https://x.com/winomartinson",
    },
    instagram: {
      text: "@edwin_martinson",
      link: "https://instagram.com/edwin_martinson",
    },
    snapchat: {
      text: "@edwin_martinson",
      link: "https://snapchat.com/add/edwin_martinson",
    },
  },
  works: {
    github: {
      text: "@edwinmartinson",
      link: "https://github.com/edwinmartinson",
    },
    codepen: {
      text: "@edwinmartinson",
      link: "https://codepen.io/edwinmartinson",
    },
    dribbble: {
      text: "@winomartinson",
      link: "https://dribbble.com/winomartinson",
    },
    behance: {
      text: "@edwinmartinson",
      link: "https://behance.net/edwinmartinson",
    },
  },
  email: {
    text: "edwinotumartinson@outlook.com",
    link: "mailto:edwinotumartinson@outlook.com",
  },
  sectionTitle: {
    aboutMe: "Get to know me",
    projects: "Stuff i have done",
    contactMe: "Get in touch",
  },
};

export type SiteData = typeof siteData;
export type SocialsKeys = keyof typeof siteData.socials;
