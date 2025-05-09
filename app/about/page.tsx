import React from "react";
import Image from "next/image";
import Link from "next/link";

// You can replace these with your actual data
const skills = [
  {
    category: "Frontend",
    techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Express", "Python", "Django", "RESTful APIs"],
  },
  {
    category: "Database",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    category: "DevOps",
    techs: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel"],
  },
  {
    category: "Design",
    techs: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles"],
  },
];

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Lead development of web applications using React and TypeScript. Implemented responsive designs and optimized performance for various client projects.",
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Innovations",
    period: "2019 - 2022",
    description:
      "Developed both frontend and backend components for e-commerce applications. Worked with React, Node.js, and MongoDB to create scalable solutions.",
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    period: "2017 - 2019",
    description:
      "Built interactive websites for clients across various industries. Focused on responsive design and cross-browser compatibility.",
  },
];

const education = [
  {
    degree: "Master of Computer Science",
    institution: "University of Technology",
    year: "2016 - 2018",
    details: "Specialized in Web Technologies and Software Engineering",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    year: "2012 - 2016",
    details: "Dean's List, Computer Science Society Member",
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
            Get to know my background, skills, and what drives me as a
            developer.
          </p>
        </div>
      </div>

      {/* Personal Bio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="bg-blue-600 p-4 rounded-lg shadow-xl transform -rotate-2">
                <img
                  src="/api/placeholder/400/500"
                  alt="Professional Photo"
                  className="rounded w-full"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                Hi, I'm Your Name
              </h2>
              <p className="text-lg mb-4">
                I'm a passionate full-stack developer with over 5 years of
                experience creating robust web applications. My journey in
                software development began during my university years, and I've
                been hooked on building things for the web ever since.
              </p>
              <p className="text-lg mb-4">
                I specialize in JavaScript-based technologies, particularly
                React and Node.js, but I'm always eager to explore new tools and
                frameworks. I believe in writing clean, maintainable code and
                creating intuitive user experiences.
              </p>
              <p className="text-lg mb-6">
                When I'm not coding, you'll find me hiking in the mountains,
                playing chess, or experimenting with new recipes in the kitchen.
                I'm also an avid reader and enjoy learning about new
                technologies through books and online courses.
              </p>
              <div className="flex gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Download Resume
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-4 border-blue-600"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600"></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-xl font-bold text-blue-600">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-sm text-blue-600 font-medium">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                <p className="text-gray-600">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Beyond Coding
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Hobbies
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Photography</li>
                <li>Hiking & Camping</li>
                <li>Chess</li>
                <li>Cooking</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Learning
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Machine Learning</li>
                <li>Web3 Technologies</li>
                <li>UX Design Principles</li>
                <li>DevOps Practices</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Volunteering
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Code Mentor</li>
                <li>Tech Workshops for Kids</li>
                <li>Open Source Contributor</li>
                <li>Local Tech Meetup Organizer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-300"
          >
            Let's Connect
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
