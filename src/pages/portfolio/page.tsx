import Header from "../../components/header";
import Footer from "../../components/footer";
import { Mail, Github, Linkedin, MapPin, Briefcase, ExternalLink, Code2, Cpu, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { getProjects, Project } from "../../utils/content";

const SkillCategory = ({ title, skills, icon: Icon }: { title: string, skills: string[], icon: React.ElementType }) => (
  <div className="flex flex-col gap-4 p-6 rounded-2xl border border-neutral-200 bg-white transition-all hover:border-neutral-400">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-neutral-100 rounded-lg">
        <Icon className="w-5 h-5 text-neutral-700" />
      </div>
      <h3 className="font-semibold text-neutral-900">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 text-sm bg-neutral-50 text-neutral-600 rounded-full border border-neutral-100">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group flex flex-col gap-4 p-4 rounded-2xl border border-neutral-200 bg-white transition-all hover:border-neutral-400">
    <div className="relative aspect-video overflow-hidden rounded-xl border border-neutral-100">
      <img
        src={project.images[0]}
        alt={project.name}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-neutral-900">{project.name}</h3>
        <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
      </div>
      <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">{project.description}</p>
    </div>
  </div>
);

const ExperienceItem = ({ company, role, period, description }: { company: string, role: string, period: string, description: string }) => (
  <div className="relative pl-8 pb-12 last:pb-0 border-l border-neutral-200">
    <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-neutral-900 border-2 border-white" />
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-neutral-400">{period}</span>
      <h3 className="text-lg font-bold text-neutral-900">{role}</h3>
      <span className="text-neutral-600 font-medium">{company}</span>
      <p className="mt-2 text-neutral-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const experiences = [
    {
      company: "NewRedo",
      role: "Software Engineer",
      period: "Dec 2024 - Present",
      description: "Building the Watchful mobile application and contributing to the deployment of the RegData webapp. Writing technical blogs and collaborating with team leads to enhance app features."
    },
    {
      company: "Really Great Tech",
      role: "Flutter Developer",
      period: "Jan 2024 - Dec 2024",
      description: "Updated and improved the performance of the Mediboard mobile application, while communicating effectively with team members to implement new features."
    },
    {
      company: "Finance Mobile",
      role: "Flutter Developer",
      period: "Sep 2022 - Oct 2023",
      description: "Recreated the Metaschool mobile app, developed a KYC verification package for Billprompt, and collaborated on the TaxQr mobile application while improving overall app performance."
    },
    {
      company: "Insurerity Digital",
      role: "Mobile Application Developer",
      period: "Mar 2021 - Aug 2022",
      description: "Led the development and deployment of insurance registration platforms. Built the Twealth UI, designed backend schemas, and implemented custom Firebase cloud functions and Cron jobs."
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: Globe,
      skills: ["Dart", "JavaScript", "TypeScript", "Java", "C++", "PHP", "SQL"]
    },
    {
      title: "Mobile & Frontend",
      icon: Code2,
      skills: ["Flutter", "React", "Angular", "Android", "Tailwind CSS", "HTML", "CSS"]
    },
    {
      title: "Backend & Tools",
      icon: Cpu,
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST API", "Firebase", "Git"]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-20 max-w-5xl">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-24">
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight mb-6">
              Norbert Aberor
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 text-neutral-600 font-medium">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-sm">
                <Briefcase className="w-4 h-4" /> Software Engineer
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-sm">
                <MapPin className="w-4 h-4" /> Accra, Ghana
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-sm">
                <Code2 className="w-4 h-4" /> 4+ Years Exp.
              </span>
            </div>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto md:mx-0">
              I am a Software Engineer specializing in building high-performance mobile and web applications. With expertise in Flutter, React, and Node.js, I focus on creating seamless digital experiences that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
              <a href="mailto:norbertaberor@gmail.com" className="bg-neutral-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-neutral-800 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> Get in touch
              </a>

              <div className="flex gap-2">
                <a href="https://github.com/norbertkross" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full border border-neutral-200 hover:border-neutral-400 transition-colors" title="GitHub">
                  <Github className="w-5 h-5 text-neutral-700" />
                </a>
                <a href="https://gh.linkedin.com/in/norbert-aberor-a75996162" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full border border-neutral-200 hover:border-neutral-400 transition-colors" title="LinkedIn">
                  <Linkedin className="w-5 h-5 text-neutral-700" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Arsenal / Skills Section */}
        <section className="mb-24">
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">Technical Arsenal</h2>
            <p className="text-neutral-500">The tools and technologies I use to bring ideas to life.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <SkillCategory key={cat.title} {...cat} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Experience</h2>
              <p className="text-neutral-500 leading-relaxed">
                A track record of delivering high-quality mobile and web solutions across various industries, from innovative startups to established tech companies.
              </p>
            </div>
            <div className="md:col-span-2">
              {experiences.map((exp, i) => (
                <ExperienceItem key={i} {...exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Education</h2>
            </div>
            <div className="md:col-span-2">
              <div className="relative pl-8 border-l border-neutral-200">
                <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-neutral-900 border-2 border-white" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-neutral-400">2017 - 2021</span>
                  <h3 className="text-lg font-bold text-neutral-900">BSc. Computer Science</h3>
                  <span className="text-neutral-600 font-medium">Kwame Nkrumah University of Science and Technology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works Section */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-neutral-900">Selected Works</h2>
              <p className="text-neutral-500">Handpicked projects that showcase my engineering philosophy.</p>
            </div>
            <a href="/works" className="text-sm font-bold text-neutral-900 hover:underline flex items-center gap-2">
              View all works <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-neutral-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6 italic tracking-tight">Let's build something intelligent together.</h2>
          <p className="text-neutral-400 mb-10 max-w-lg mx-auto">
            Currently open to senior-level opportunities and high-impact collaborations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="mailto:norbertaberor@gmail.com" className="inline-block bg-white text-neutral-900 px-10 py-4 rounded-full font-bold hover:bg-neutral-100 transition-colors">
              Start a Conversation
            </a>
            <a href="tel:+233557340556" className="inline-block bg-white text-neutral-900 px-10 py-4 rounded-full font-bold hover:bg-neutral-100 transition-colors">
              +233 557 340 556
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
