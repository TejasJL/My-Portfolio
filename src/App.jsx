import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Code, Database, Server, ExternalLink, MapPin, 
  Mail, GraduationCap, Briefcase, Layers, Cloud, Folder, 
  Award, Star, CheckCircle, Globe 
} from 'lucide-react';

export default function App() {
  const [terminalText, setTerminalText] = useState('');
  // const fullText = "> initializing full-stack environment... \n> loading cloud computing modules (AWS/GCP)... \n> compiling data science algorithms... \n> welcome to my digital resume.";

  const fullText = `> loading tech_arsenal... MERN Stack enabled.
> sync_cloud: AWS Academy Cloud Foundations and Google Cloud certified.
> philosophy: Code is poetry; architecture is infrastructure.
> ping: ftejas52@gmail.com // Let's build something epic.`;
  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingEffect);
    }, 35);
    return () => clearInterval(typingEffect);
  }, []);

  // Animation variants for smooth scroll reveals
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans antialiased selection:bg-emerald-500/30">
      
      {/* Sticky Navigation Bar */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            TL.
          </span>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-emerald-400 transition-colors">Certificationss</a>
          </div>
        </div>
      </nav>

      {/* Main Content Containers */}
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-20 space-y-32">
        
        {/* 1. HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex flex-col items-center justify-center text-center mt-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center w-full">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
              <MapPin size={16} /> Based in Pune • Available for Full-Time Roles
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 text-white">
              Tejas Lahurikar
            </h1>
            
            <h2 className="text-xl md:text-3xl text-slate-400 mb-10 max-w-3xl leading-relaxed font-light">
              Architecting Scalable <span className="font-semibold text-emerald-400">Web Solutions</span> & <span className="font-semibold text-cyan-400">Cloud Infrastructures</span>.
            </h2>
            
            {/* Interactive Terminal */}
            <div className="bg-[#0f172a] border border-slate-700/50 rounded-xl p-5 font-mono text-sm text-emerald-400 w-full max-w-2xl mb-12 h-36 shadow-2xl relative overflow-hidden text-left mx-auto">
              <div className="flex gap-2 mb-3 border-b border-slate-800 pb-3">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed">{terminalText}</pre>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <a href="https://github.com/TejasIL" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3.5 rounded-lg font-bold hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20">
                <Code size={20} /> View GitHub
              </a>
              <a href="https://leetcode.com/u/Teja8990/" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-slate-700 bg-slate-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-white">
                LeetCode Profile
              </a>
               <a href="https://www.geeksforgeeks.org/profile/ftejayrse" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-slate-700 bg-slate-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-white">
                GFG Profile
              </a>
              <a href="mailto:ftejas52@gmail.com" className="flex items-center gap-2 border border-slate-700 bg-slate-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-white">
                <Mail size={20} /> Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* 2. ACADEMICS & EDUCATION */}
        <section id="about">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-500/10 rounded-lg"><GraduationCap className="text-emerald-400" size={28}/></div>
              <h3 className="text-3xl font-bold text-white">Academic Foundation</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
                <h4 className="text-xl font-bold text-white mb-1">B.Tech, Computer Science Engineering</h4>
                <p className="text-emerald-400 font-mono text-sm mb-6">Walchand Institute of Technology • 2021 - 2025</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-slate-200 text-3xl font-black">8.78</p>
                  <span className="text-slate-500 text-sm font-medium">CGPA (82.53%)</span>
                </div>
              </div>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <h4 className="text-xl font-bold text-white mb-1">B.Tech (Hons), Data Science</h4>
                <p className="text-cyan-400 font-mono text-sm mb-6">Walchand Institute of Technology • 2022 - 2025</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-slate-200 text-3xl font-black">9.0</p>
                  <span className="text-slate-500 text-sm font-medium">CGPA</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 items-center">
               <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                  <Globe size={16} className="text-emerald-400" />
                  Languages: English, Hindi, Marathi
               </div>
            </div>
          </motion.div>
        </section>

        {/* 3. TECHNICAL ARSENAL */}
        <section id="skills">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-lg"><Layers className="text-cyan-400" size={28}/></div>
              <h3 className="text-3xl font-bold text-white">Technical Arsenal</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-slate-900/80 p-8 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-4"><Code className="text-emerald-400" size={24}/><h4 className="font-bold text-lg text-white">Languages & Frontend</h4></div>
                <p className="text-slate-400 leading-relaxed font-medium">JavaScript, Python, Java, React.js, HTML5, CSS3</p>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-slate-900/80 p-8 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-4"><Server className="text-blue-400" size={24}/><h4 className="font-bold text-lg text-white">Backend & Databases</h4></div>
                <p className="text-slate-400 leading-relaxed font-medium">Node.js, Express.js, MongoDB, SQL, Java</p>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-slate-900/80 p-8 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-4"><Cloud className="text-cyan-400" size={24}/><h4 className="font-bold text-lg text-white">Cloud & DevOps</h4></div>
                <p className="text-slate-400 leading-relaxed font-medium">AWS (EC2, S3, Lambda), Google Cloud Platform, Git, GitHub</p>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-slate-900/80 p-8 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-3 mb-4"><Database className="text-purple-400" size={24}/><h4 className="font-bold text-lg text-white">Platforms & Tools</h4></div>
                <p className="text-slate-400 leading-relaxed font-medium">Salesforce (Flow Builder, Apex), Agile SDLC, Microsoft Office Suite</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 4. PROFESSIONAL EXPERIENCE */}
        <section id="experience">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-rose-500/10 rounded-lg"><Briefcase className="text-rose-400" size={28}/></div>
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-12 border-l-2 border-slate-800 ml-4 pl-8 relative">
              
              {/* Capgemini */}
              <div className="relative">
                <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-slate-950 shadow-lg shadow-emerald-500/50"></div>
                <span className="text-sm text-emerald-400 font-mono font-bold tracking-wider uppercase">05/2026 - Present • Pune (Onsite)</span>
                <h4 className="text-2xl font-bold text-white mt-2">Cloud Computing Training (AWS)</h4>
                <p className="text-slate-400 font-medium mb-4 text-lg">Capgemini</p>
                <ul className="text-slate-300 space-y-3 list-disc list-inside leading-relaxed">
                  <li>Selected for an intensive cloud computing program focusing on architecting and deploying scalable infrastructure on AWS.</li>
                  <li>Gaining hands-on experience in provisioning Amazon EC2 instances, managing object storage via Amazon S3, and implementing serverless computing using AWS Lambda.</li>
                  <li>Learning cloud security best practices, Identity and Access Management (IAM), and core networking concepts.</li>
                </ul>
              </div>

              {/* Nullclass */}
              <div className="relative opacity-90 transition-opacity">
                <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-slate-700 ring-4 ring-slate-950"></div>
                <span className="text-sm text-slate-400 font-mono font-bold tracking-wider uppercase">10/2025 - 04/2026</span>
                <h4 className="text-2xl font-bold text-white mt-2">Full Stack Developer</h4>
                <p className="text-slate-400 font-medium mb-4 text-lg">Nullclass</p>
                <ul className="text-slate-300 space-y-3 list-disc list-inside leading-relaxed">
                  <li>Completed a Full Stack Web Development internship contributing to both frontend and backend development.</li>
                  <li>Gained hands-on experience in building and debugging web applications while strengthening problem-solving and technical skills.</li>
                </ul>
              </div>

              {/* Salesforce */}
              <div className="relative opacity-80 transition-opacity">
                <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-slate-700 ring-4 ring-slate-950"></div>
                <span className="text-sm text-slate-400 font-mono font-bold tracking-wider uppercase">07/2024 - 08/2024</span>
                <h4 className="text-2xl font-bold text-white mt-2">Salesforce Developer</h4>
                <p className="text-slate-400 font-medium mb-4 text-lg">Salesforce (Smartbridge)</p>
                <ul className="text-slate-300 space-y-3 list-disc list-inside leading-relaxed">
                  <li>Completed Salesforce Virtual Internship and was specifically selected for the PRT Program (Sep–Nov 2024) for outstanding performance and active contribution.</li>
                </ul>
              </div>

              {/* Forage Accenture */}
              <div className="relative opacity-70 transition-opacity">
                <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-slate-700 ring-4 ring-slate-950"></div>
                <span className="text-sm text-slate-400 font-mono font-bold tracking-wider uppercase">02/2024 - 05/2024</span>
                <h4 className="text-2xl font-bold text-white mt-2">Software Developer</h4>
                <p className="text-slate-400 font-medium mb-4 text-lg">Forage Accenture</p>
                <ul className="text-slate-300 space-y-3 list-disc list-inside leading-relaxed">
                  <li>Completed a project-based job simulation focused on Software Development Life Cycle (SDLC).</li>
                  <li>Gained exposure to key software engineering principles like requirement analysis, design thinking, implementation, and maintenance.</li>
                  <li>Developed a clear understanding of Agile methodology and real-world SDLC workflows used in enterprise-grade software projects.</li>
                </ul>
              </div>

            </div>
          </motion.div>
        </section>

        {/* 5. PROJECTS SELECTION */}
        <section id="projects">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-amber-500/10 rounded-lg"><Terminal className="text-amber-400" size={28}/></div>
              <h3 className="text-3xl font-bold text-white">Engineering Projects</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Healthcare Patient Mgmt", tech: "Salesforce, Apex, Flow Builder", link: "#",
                  desc: "Developed a comprehensive CRM solution streamlining appointment scheduling and overall patient care using custom objects, validation rules, reports, and dashboards."
                },
                {
                  title: "SchoolBus Simulator", tech: "React.js, Leaflet.js", link: "https://school-bus-beta.vercel.app/",
                  desc: "Built a frontend application simulating a vehicle moving along a predefined map route using dummy location data to animate real-time tracking."
                },
                {
                  title: "Zerodha Trading Clone", tech: "MERN Stack, Bootstrap", link: "https://zerodha-clone-amber.vercel.app/",
                  desc: "Built a responsive stock trading platform utilizing React Router DOM for navigation and Express.js REST APIs to manage dummy market data in MongoDB."
                },
                {
                  title: "Task Management System", tech: "React, Node.js, Supabase", link: "https://task-management-system-8va5.vercel.app/",
                  desc: "Architected a full-stack platform with secure JWT/bcryptjs authentication and complex Role-Based Access Control (RBAC) to distinguish Admin and Member permissions."
                },
                {
                  title: "TrackMaster Android", tech: "Kotlin, Jetpack Compose", link: "https://i.diawi.com/aYxJeF",
                  desc: "Developed a native Android Telematics Dashboard utilizing modern Material Design 3 guidelines for a clean, responsive mobile interface."
                },
                {
                  title: "Student Job Tracker", tech: "MongoDB, Express, React, Node", link: "https://job-tracker-nine-kappa.vercel.app/",
                  desc: "Built a complete MERN application to store job application data, mastering REST API creation and robust frontend-to-backend state management."
                }
              ].map((project, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                        <Folder className="text-emerald-400" size={24} />
                      </div>
                      {project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                  </div>
                  <p className="text-xs font-mono font-semibold text-cyan-400">{project.tech}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 6. CERTIFICATIONS & ACHIEVEMENTS */}
        <section id="certifications">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid lg:grid-cols-2 gap-12">
            
            {/* Certifications */}
            <div>
               <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 bg-purple-500/10 rounded-lg"><Award className="text-purple-400" size={28}/></div>
                 <h3 className="text-3xl font-bold text-white">Certifications</h3>
               </div>
               <div className="space-y-4">
                  <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 flex gap-4 items-start">
                     <CheckCircle className="text-emerald-400 mt-1 shrink-0" size={20} />
                     <div>
                        <h4 className="font-bold text-white">Google Cloud Certification</h4>
                        <p className="text-sm text-slate-400 mt-1">Google Career Launchpad • Proficiency in cloud infrastructure, compute services, IAM, and deployment.</p>
                     </div>
                  </div>
                  <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 flex gap-4 items-start">
                     <CheckCircle className="text-emerald-400 mt-1 shrink-0" size={20} />
                     <div>
                        <h4 className="font-bold text-white">AWS Academy Cloud Foundation</h4>
                        <p className="text-sm text-slate-400 mt-1">AWS Academy • 20-hour foundational course covering core AWS architecture, security, and scalable solutions.</p>
                     </div>
                  </div>
                  <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 flex gap-4 items-start">
                     <CheckCircle className="text-emerald-400 mt-1 shrink-0" size={20} />
                     <div>
                        <h4 className="font-bold text-white">Mastering SQL Joins</h4>
                        <p className="text-sm text-slate-400 mt-1">Coursera • Hands-on experience writing complex SQL queries using INNER, LEFT, RIGHT, FULL, and SELF joins.</p>
                     </div>
                  </div>
                  <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 flex gap-4 items-start">
                     <CheckCircle className="text-emerald-400 mt-1 shrink-0" size={20} />
                     <div>
                        <h4 className="font-bold text-white">DevOps Foundation</h4>
                        <p className="text-sm text-slate-400 mt-1">Infosys Springboard • Foundational knowledge in CI/CD pipelines, version control (Git), and automation.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Achievements */}
            <div>
               <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 bg-amber-500/10 rounded-lg"><Star className="text-amber-400" size={28}/></div>
                 <h3 className="text-3xl font-bold text-white">Achievements</h3>
               </div>
               <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 h-full">
                  <ul className="space-y-6">
                     <li className="flex gap-4">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 shrink-0"></div>
                        <p className="text-slate-300 font-medium">Selected for the <span className="text-white font-bold">Project Ready Talent Program</span> after outstanding performance in SVIP.</p>
                     </li>
                     <li className="flex gap-4">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 shrink-0"></div>
                        <p className="text-slate-300 font-medium">Scored <span className="text-white font-bold">91 percentile</span> in the Joint Entrance Examination (JEE Main) during 12th grade.</p>
                     </li>
                     <li className="flex gap-4">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 shrink-0"></div>
                        <p className="text-slate-300 font-medium">Scored <span className="text-white font-bold">90 percentile</span> in the MHTCET examination during 12th grade.</p>
                     </li>
                     <li className="flex gap-4">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 shrink-0"></div>
                        <p className="text-slate-300 font-medium">Scored <span className="text-white font-bold">90%</span> in class 10th board examination.</p>
                     </li>
                  </ul>
               </div>
            </div>

          </motion.div>
        </section>

      </main>

      {/* Persistent Footer */}
      <footer className="border-t border-slate-800/50 bg-[#020617] py-10 text-center text-slate-500 text-sm">
        <p className="font-medium">Built with React & Tailwind CSS. © 2026 Tejas Lahurikar.</p>
      </footer>
    </div>
  );
}