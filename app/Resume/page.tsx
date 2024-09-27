"use client";
import React from "react";

const Resume = () => {
  return (
    <div className=" text-white font-sans">
      <div className="mx-6 lg:max-w-4xl lg:mx-auto p-8 shadow-lg my-32 bg-neutral-800/20 rounded-2xl border border-neutral-800 border-4">
        <Header />
        <Education />
        <Skills />

        <WorkExperience />
        <Projects />
        <Certifications />
        <PrintButton />
      </div>
    </div>
  );
};

// Header Component
const Header = () => (
  <div className="flex justify-between items-center border-b pb-4 mb-6">
    <div>
      <h1 className="text-4xl font-bold">Mohammed Alshami</h1>
      <p className="text-lg text-white">+601164504470</p>
    </div>
    <div className="text-right">
      <p className="text-sm text-white">Selangor, Malaysia</p>
    </div>
  </div>
);

// Skills Component
const Skills = () => {
  const skills = [
    "Programming Languages: Python, Java, JavaScript, SQL",
    "Web Development: HTML, CSS, JavaScript, React.js, Node.js",
    "Databases: MySQL, PostgreSQL, MongoDB",
    "Version Control: Git, GitHub",
    "Agile Methodologies: Scrum, Kanban",
    "Testing: Unit Testing, Integration Testing, Test Automation (Selenium)",
    "Cloud Services: AWS, Azure",
    "DevOps: CI/CD, Docker, Jenkins",
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
      <ul className="list-disc pl-5 space-y-1">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

// Education Component
const Education = () => {
  const educationData = [
    {
      degree: "M.S. Technology Systems Management",
      university: "[University Name]",
      duration: "Aug 2022 - Dec 2023",
      relevantCourses:
        "Relevant Courses: Software Engineering, Database Systems, Cloud Computing",
      honors:
        "CAA Academic Honor Roll, Scholarship-Athlete, Leadership role in SBU Football Team",
    },
    {
      degree: "B.S. Multidisciplinary Studies with Focus in IT",
      university: "[University Name]",
      duration: "Jun 2018 - May 2022",
      relevantCourses:
        "Relevant Courses: Computer Science Fundamentals, Data Structures, Web Development",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="mb-6">
          <p className="text-lg font-bold">{edu.degree}</p>
          <p className="text-sm text-white">
            {edu.university}, {edu.duration}
          </p>
          <p className="text-sm text-white">{edu.relevantCourses}</p>
          {edu.honors && <p className="text-sm text-white">{edu.honors}</p>}
        </div>
      ))}
    </section>
  );
};

// Work Experience Component
const WorkExperience = () => {
  const experiences = [
    {
      title: "CEO",
      company: "Drangue",
      duration: "Jan 2024 - Present",
      duties: [
        "Developed and maintained web applications using React.js and Node.js, improving site performance by 30%.",
        "Collaborated with cross-functional teams to design and implement RESTful APIs.",
        "Utilized MySQL and MongoDB to manage and optimize database systems, reducing query times by 15%.",
        "Led the integration of third-party services and APIs, enhancing application functionality.",
        "Conducted code reviews and provided mentorship to junior developers, ensuring code quality and best practices.",
        "Automated deployment processes using Jenkins and Docker, reducing deployment time by 50%.",
      ],
    },
    {
      title: "AI Service Provider",
      company: "UNITEN R&D",
      duration: "Jun 2020 - Aug 2020",
      duties: [
        "Assisted in the development of a full-stack web application using Python and Flask, resulting in a 20% increase in user engagement.",
        "Wrote unit and integration tests, achieving 90% code coverage and reducing bugs in production.",
        "Implemented an agile project management system, contributing to the successful delivery of the project within the deadline.",
        "Participated in daily stand-ups, sprint planning, and retrospectives, gaining experience in agile methodologies.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Aonic",
      duration: "Aug 2021 - Mar 2022",
      duties: [
        "Provided technical support for white students and faculty, resolving 90% of issues on first contact.",
        "Maintained and upgraded software on university computers, ensuring systems were up-to-date and secure.",
        "Created and delivered training sessions on software tools, improving user proficiency and reducing support calls by 25%.",
        "Collaborated with the IT team to roll out new hardware and software solutions across the campus.",
      ],
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
        Work Experience
      </h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <p className="text-lg font-bold">
            {exp.title} | {exp.company}
          </p>
          <p className="text-sm text-white">{exp.duration}</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white">
            {exp.duties.map((duty, dutyIndex) => (
              <li key={dutyIndex}>{duty}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      name: "[Project Name]",
      description:
        "Developed a real-time chat application using Node.js, Express, and WebSocket. Implemented authentication with JWT and OAuth.",
    },
    {
      name: "[Project Name]",
      description:
        "Created an e-commerce platform using React.js and MongoDB. Integrated Stripe for payment processing.",
    },
    {
      name: "[Project Name]",
      description:
        "Automated the deployment of a microservices architecture on AWS using Docker and Kubernetes.",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm text-white">
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

// Certifications Component
const Certifications = () => {
  const certifications = [
    "AWS Certified Developer – Associate",
    "Certified Scrum Developer (CSD)",
    "Microsoft Certified: Azure Developer Associate",
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
        Certifications
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-sm text-white">
        {certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
    </section>
  );
};

// Print Button Component
const PrintButton = () => (
  <div className="flex justify-center mt-8 no-print">
    <button
      onClick={() => window.print()}
      className="bg-neutral-800/40 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded"
    >
      Print / Save as PDF
    </button>
  </div>
);

export default Resume;
