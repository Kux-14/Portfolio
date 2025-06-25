"use client";                                                             
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-800 flex flex-col items-center py-10 px-4 sticky top-0 h-screen hidden md:flex">
        <div className="mb-6">
          <Image
            src="/my photo.jpg"
            alt="Kunal Shinde" 
            width={128}
            height={128}
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow-lg mb-2"
          />
        </div>
        <h1 className="text-2xl font-bold mb-1">Kunal Shinde</h1>
        <p className="text-blue-400 mb-4">Web Developer</p>
        <nav className="flex flex-col gap-4 w-full">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
        <div className="flex gap-4 mt-8">
          <a href="https://github.com/Kux-14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width={24} height={24} className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/kunal-shinde" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-6 h-6">
              <defs>
                <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f58529"/>
                  <stop offset="50%" stopColor="#dd2a7b"/>
                  <stop offset="100%" stopColor="#515bd4"/>
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-gradient)"/>
              <circle cx="12" cy="12" r="5" fill="none" stroke="#fff" strokeWidth="2"/>
              <circle cx="17" cy="7" r="1.3" fill="#fff"/>
              <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="#fff" strokeWidth="1.5"/>
            </svg>
          </a>
        </div>
        <div className="mt-8 text-sm text-gray-400 text-center">
          <div>Email: <a href="mailto:justkunal14@gmail.com" className="text-blue-400">justkunal14@gmail.com</a></div>
          <div>Phone: <a href="tel:+919757179428" className="text-blue-400">+91 9757179428</a></div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 px-4 md:px-16 py-10" id="home">
        {/* Hero Section */}
        <section className="mb-20 flex flex-col items-center justify-center min-h-screen" id="hero">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Kunal Shinde</h2>
          <p className="text-xl text-blue-300 mb-6">Web & App Developer | Data Science Enthusiast</p>
          <p className="text-base text-gray-300 max-w-xl text-center mb-8">
            I design and build high-performance, visually stunning web applications.<br/>
            Passionate about modern JavaScript, UI/UX, and delivering seamless digital experiences.<br/>
            <span className="block mt-4">I love to create, learn, and solve real-world problems with code.</span>
          </p>
          <div className="flex gap-4 mb-8">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold transition">Contact Me</a>
            <a href="/resume.pdf" download className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded text-white font-semibold transition">Download Resume</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm text-blue-300">Frontend Development</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm text-blue-300">UI Design</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm text-blue-300">Problem Solving</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm text-blue-300">Full Project Building</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm text-blue-300">Continuous Learning</span>
          </div>
        </section>
        {/* About Section - appears after scroll */}
        <section id="about" className="mb-18 scroll-mt-24">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">About Me</h3>
          <p className="text-lg text-gray-200 mb-2">
            Hi, I'm Kunal — a web developer and data science student from India. I specialize in building modern, responsive web applications using technologies like HTML, CSS, JavaScript, React, and Next.js. Alongside front-end development, I also work with Python, SQL, and core programming concepts. I’ve built complete functional projects like school portals and portfolios, focusing on clean UI and smooth user experiences. I’m always improving my skills and love building real-world applications that solve problems.
          </p>
        </section>
        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-blue-400">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width={48} height={48} className="w-12 h-12 mb-2" />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width={48} height={48} className="w-12 h-12 mb-2" />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={48} height={48} className="w-12 h-12 mb-2" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width={48} height={48} className="w-12 h-12 mb-2" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" width={48} height={48} className="w-12 h-12 mb-2" />
              <span>React.js</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" width={48} height={48} className="w-12 h-12 mb-2 bg-white rounded" />
              <span>Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width={48} height={48} className="w-12 h-12 mb-2" />
              <span>MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Core Java" width={48} height={48} className="w-12 h-12 mb-2" />
              <span>Core Java</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width={48} height={48} className="w-12 h-12 mb-2" />
              <span>Python</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" width={48} height={48} className="w-12 h-12 mb-2" />
              <span>SQL</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chart-original.svg" alt="Data Visualization" width={48} height={48} className="w-12 h-12 mb-2 bg-white rounded" />
              <span className="text-center">Data Visualization</span>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-blue-400">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Example Project Card */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-2">🏫 School Portal System</h4>
              <p className="text-gray-300 mb-4">A modern and dynamic web application built for schools to manage student data efficiently. Admins can register students, post notices, upload marks semester-wise, and manage attendance with a calendar view. Students can securely log in to view personalized marks, attendance, and notices.</p>
              <div className="text-xs text-gray-400 mb-2">HTML, Tailwind CSS, JavaScript, Python (Flask), MySQL</div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-2">📱 Phone Store Website</h4>
              <p className="text-gray-300 mb-4">A sleek and interactive phone store landing page allowing users to browse products and proceed to payment. Includes email invoice functionality via EmailJS, with customer details passed securely between pages.</p>
              <div className="text-xs text-gray-400 mb-2">HTML, CSS, JavaScript, EmailJS</div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-2">💼 Portfolio Website</h4>
              <p className="text-gray-300 mb-4">A stylish developer portfolio showcasing your projects, experience, and skills. Features Framer Motion animations, responsive design, dark mode, and smooth navigation. Built using the latest web technologies and deployed with Vercel for optimal performance.</p>
              <div className="text-xs text-gray-400 mb-2">React, Next.js (App Router), Tailwind CSS, Framer Motion, Vercel</div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-2">📚 Library Management System (Core Java)</h4>
              <p className="text-gray-300 mb-4">A desktop-based application built using Core Java to manage library operations like issuing books, returning, and tracking user history. Designed for efficient handling of book records and student borrowing data.</p>
              <div className="text-xs text-gray-400 mb-2">Core Java, MySQL (optional), Java Swing (if GUI used)</div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-2">☁️ Weather Forecast App</h4>
              <p className="text-gray-300 mb-4">A lightweight application that allows users to check real-time weather updates for any city worldwide. Uses OpenWeatherMap API to fetch live data like temperature, humidity, and conditions with a clean UI.</p>
              <div className="text-xs text-gray-400 mb-2">HTML, CSS, JavaScript, REST API</div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-2">📝 Notes Keeper App</h4>
              <p className="text-gray-300 mb-4">A minimal and efficient web application for creating, editing, and deleting personal notes. Built with a responsive layout and intuitive interface, it stores data locally in the browser using localStorage—no login or backend needed. Great for quick reminders or daily tasks.</p>
              <div className="text-xs text-gray-400 mb-2">HTML, CSS, JavaScript</div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Contact</h3>
          <div className="mb-4">
            <span className="font-semibold">Phone: </span>
            <a href="tel:+919757179428" className="text-blue-400 font-bold underline">+91 9757179428</a>
          </div>
          <p className="text-lg text-gray-200 mb-4">Want to work together or have questions? Reach out using the form below or email me directly.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 border-gray-700" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 border-gray-700" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 border-gray-700" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition font-semibold">Send Message</button>
          </form>
          <div className="mt-6 text-sm text-gray-400">
            Or email me at <a href="mailto:justkunal14@gmail.com" className="text-blue-400 underline">justkunal14@gmail.com</a>
          </div>
        </section>
      </main>
    </div>
  );
}
