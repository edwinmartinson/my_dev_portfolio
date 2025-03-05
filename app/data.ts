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
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui",
      stack: ["AAAA", "BBB", "CCC", "DDD"],
      link: "https://github.com/edwinmartinson",
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
  resume: "https://",
};

export type SiteData = typeof siteData;
export type SocialsKeys = keyof typeof siteData.socials;
