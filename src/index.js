#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const data = {
  name: chalk.bold.cyan("HUSSAIN GAGAN"),
  title: chalk.white("Fullstack Developer"),
  contact: {
    phone: chalk.white("9512711148"),
    email: chalk.white("hussain.gagan@gmail.com"),
    linkedin: chalk.blue("linkedin.com/in/hussaingagan"),
    github: chalk.blue("github.com/HussainGagan"),
  },
  experience: [
    {
      role: chalk.yellow.bold("Fullstack Developer"),
      company: "EnactOn Technologies",
      period: "June 2024 – Present",
      highlights: [
        "Designed and implemented a multi-tenant authentication layer for a B2B SaaS platform with granular role-based permissions, organization context switching, and billing-aware session management using Next.js, Redis, and JWTs.",
        "Developed a NestJS backend with modular architecture (15+ modules), implementing global guards for authentication, rate limiting, and subscription enforcement, with centralized error monitoring using Sentry.",
        "Integrated the Vercel AI SDK into a Next.js application to implement AI-driven document generation and content extraction with real-time SSE streaming.",
        "Built usage quota enforcement with plan-based limits and Stripe webhook integration for real-time subscription status updates.",
        "Developed a full-stack application to digitize patient intake and treatment tracking. Built with Next.js and MySQL, it replaces manual admin work by sending automated email reminders and keeping patient status updated through backend cron jobs.",
        "Developed APIs for handling external webhooks (Stripe, Healthie), enabling real-time synchronization of patient data, appointment bookings, and treatment updates.",
        "Integrated Stripe payment processing for secure checkout flows, handling subscriptions, one-time payments, and webhooks, and seamless transaction processing for patient billing.",
        "Built a config-driven form builder using Next.js, enabling new clinical assessments to be created from simple configuration objects and reducing development effort by 70%.",
      ],
    },
    {
      role: chalk.yellow.bold("Fullstack Developer Intern"),
      company: "EnactOn Technologies",
      period: "Dec 2023 – May 2024",
      highlights: [
        "Built a Next.js campaign management platform that automates the scheduling and publishing of promotions to external partner sites, reducing manual admin work by 40%.",
        "Developed automated email notifications and deadline reminders using scheduled cron jobs, improving workflow efficiency.",
        "Implemented i18next in Next.js, enabling multi-language support, dynamic switching, and server-side translations, improving usability and reducing translation overhead.",
        "Built API integrations and cron jobs for syncing promotion data with external WordPress sites and other platforms.",
      ],
    },
  ],
  projects: [
    {
      name: chalk.green.bold("Hotel Booking Backend"),
      tech: "Node, Express, Go, Redis, BullMQ, MySQL",
      highlights: [
        "Engineered distributed locking using Redlock to prevent double-booking during concurrent reservations requests.",
        "Built asynchronous job processing pipeline with BullMQ and Redis for booking expiration handling and email notifications.",
        "Designed API Gateway in Go with JWT auth, RBAC, and service proxying.",
        "Implemented integration test suite with Jest and Supertest, covering booking creation, idempotency-based confirmation, and end-to-end flows with mock isolation of external services.",
      ],
    },
    {
      name: chalk.green.bold("Code Playground"),
      tech: "Node.js, TypeScript, React, Docker, Socket.IO",
      highlights: [
        "Architected sandboxed code execution using Docker containers with volume binding and dynamic port mapping for secure isolation.",
        "Implemented real-time terminal output streaming from Docker containers to browser using WebSockets.",
      ],
    },
  ],
  skills: {
    languages: "JavaScript, Java, Go",
    frameworks: "Node.js, Express, NestJS, React, Next.js, Docker, Redis, SQL",
    tools: "Git/Github, TypeScript, Docker, Stripe",
  },
  education: {
    university: "Uka Tarsadia University, Bardoli, Gujarat",
    degree: "B.Tech in Computer Engineering",
    cgpa: "9.01",
    period: "2020 - 2024",
  },
};

// Header
const header = boxen(
  `${data.name}\n${data.title}\n\n` +
    `📞 ${data.contact.phone}  |  📧 ${data.contact.email}\n` +
    `🔗 ${data.contact.linkedin}  |  💻 ${data.contact.github}`,
  {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "cyan",
  }
);

console.log(header);

// Experience Section
console.log(
  chalk.bold.magenta(
    "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  )
);
console.log(
  chalk.bold.magenta("                                    EXPERIENCE")
);
console.log(
  chalk.bold.magenta(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
  )
);

for (const exp of data.experience) {
  console.log(`${exp.role} @ ${chalk.cyan(exp.company)}`);
  console.log(chalk.gray(`${exp.period}\n`));
  for (const highlight of exp.highlights) {
    console.log(chalk.white(`  • ${highlight}`));
  }
  console.log();
}

// Projects Section
console.log(
  chalk.bold.magenta(
    "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  )
);
console.log(
  chalk.bold.magenta("                                      PROJECTS")
);
console.log(
  chalk.bold.magenta(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
  )
);

for (const project of data.projects) {
  console.log(`${project.name}  |  ${chalk.gray(project.tech)}`);
  for (const highlight of project.highlights) {
    console.log(chalk.white(`  • ${highlight}`));
  }
  console.log();
}

// Skills Section
console.log(
  chalk.bold.magenta(
    "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  )
);
console.log(
  chalk.bold.magenta("                                  TECHNICAL SKILLS")
);
console.log(
  chalk.bold.magenta(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
  )
);

console.log(`${chalk.yellow("Languages:")} ${data.skills.languages}`);
console.log(
  `${chalk.yellow("Frameworks/Libraries:")} ${data.skills.frameworks}`
);
console.log(`${chalk.yellow("Tools & Platforms:")} ${data.skills.tools}`);

// Education Section
console.log(
  chalk.bold.magenta(
    "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  )
);
console.log(
  chalk.bold.magenta("                                     EDUCATION")
);
console.log(
  chalk.bold.magenta(
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
  )
);

console.log(`${chalk.green.bold(data.education.university)}`);
console.log(
  `${data.education.degree}, CGPA: ${chalk.cyan(data.education.cgpa)}`
);
console.log(chalk.gray(`${data.education.period}`));

// Footer
console.log(
  boxen(chalk.cyan("Thanks for checking out my resume!\n"), {
    padding: 1,
    margin: { top: 2, left: 1, right: 1 },
    borderStyle: "round",
    borderColor: "green",
  })
);
