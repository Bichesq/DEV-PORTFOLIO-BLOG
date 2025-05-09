export default function Home() {
    return (
      <>
        {/* Hero Section */}
        <header className="bg-blue-600 text-white">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Hi, I'm <span className="text-blue-300">Your Name</span>
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                  Full-Stack Developer &amp; Technical Writer
                </p>
                <p className="text-gray-200 mb-8">
                  I build exceptional digital experiences with clean code and
                  thoughtful design.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-100 transition duration-300"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-800 transition duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div className="bg-blue-700 p-3 rounded-lg shadow-xl">
                  <img
                    src="/api/placeholder/400/400"
                    alt="Developer profile"
                    className="rounded w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 md:pr-12 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-blue-800 mb-6" />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg mb-4">
                  I'm a passionate developer with expertise in building
                  responsive web applications and solving complex problems with
                  elegant solutions.
                </p>
                <p className="text-lg mb-6">
                  With over X years of experience in software development, I've
                  worked on projects ranging from small business websites to
                  enterprise-level applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
                <a
                  href="/about"
                  className="text-blue-800 font-medium hover:underline"
                >
                  Learn more about my background →
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Projects Section */}
        <section id="projects" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-blue-800 mx-auto mb-6" />
              <p className="text-lg max-w-2xl mx-auto">
                A selection of my recent work and ongoing projects.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
                <img
                  src="/api/placeholder/400/250"
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    E-Commerce Platform
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A full-stack e-commerce solution with payment processing and
                    inventory management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      React
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      MongoDB
                    </span>
                  </div>
                  <a
                    href="/projects/ecommerce"
                    className="text-blue-800 font-medium hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
              {/* Project Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
                <img
                  src="/api/placeholder/400/250"
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    Task Management App
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A collaborative tool for teams to manage projects, tasks,
                    and deadlines effectively.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      Vue.js
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      Express
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      PostgreSQL
                    </span>
                  </div>
                  <a
                    href="/projects/task-app"
                    className="text-blue-800 font-medium hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
              {/* Project Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
                <img
                  src="/api/placeholder/400/250"
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    Weather Dashboard
                  </h3>
                  <p className="text-gray-600 mb-4">
                    An interactive weather application with data visualization
                    and forecasting.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      JavaScript
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      Chart.js
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      API
                    </span>
                  </div>
                  <a
                    href="/projects/weather"
                    className="text-blue-800 font-medium hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="/projects"
                className="px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>
        {/* Latest Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Latest from the Blog
              </h2>
              <div className="w-20 h-1 bg-blue-800 mx-auto mb-6" />
              <p className="text-lg max-w-2xl mx-auto">
                Thoughts, insights, and tutorials on web development and
                technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Blog Post 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">
                    April 2, 2025
                  </span>
                  <h3 className="text-xl font-bold text-blue-800 my-2">
                    Building Responsive Layouts with Tailwind CSS
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to create beautiful, responsive layouts using
                    Tailwind's utility-first approach.
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-200 mr-4" />
                    <span className="text-sm font-medium">Your Name</span>
                  </div>
                  <a
                    href="/blog/tailwind-layouts"
                    className="text-blue-800 font-medium hover:underline"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
              {/* Blog Post 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">
                    March 25, 2025
                  </span>
                  <h3 className="text-xl font-bold text-blue-800 my-2">
                    Optimizing React Applications for Performance
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tips and techniques to improve the performance of your React
                    applications.
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-200 mr-4" />
                    <span className="text-sm font-medium">Your Name</span>
                  </div>
                  <a
                    href="/blog/react-performance"
                    className="text-blue-800 font-medium hover:underline"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="/blog"
                className="px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View All Articles
              </a>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <div className="w-20 h-1 bg-white mx-auto mb-6" />
              <p className="text-lg max-w-2xl mx-auto text-blue-100">
                Have a project in mind? Let's discuss how I can help bring your
                ideas to life.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-blue-100 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-blue-700 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-blue-100 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-blue-700 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-blue-100 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-blue-700 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-blue-100 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-blue-700 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Tell me about your project..."
                    defaultValue={""}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-100 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-16 text-center">
              <p className="text-blue-100 mb-4">Or reach out directly:</p>
              <a
                href="mailto:your.email@example.com"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                your.email@example.com
              </a>
              <div className="flex justify-center mt-6 space-x-6">
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
       
      </>
    );
}