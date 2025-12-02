import { RoughHighlight } from './RoughHighlight';
import { 
  Server, Leaf, Database, Code2, GitBranch, TestTube, 
  Layers, Globe, FileCode, Paintbrush, Layout,
  Table, Terminal, Bug, RefreshCcw, FolderKanban,
  Github, Workflow, Wrench, Braces, FileJson, ClipboardList,
  Coffee, Cpu, HardDrive, Network, Boxes, Webhook,
  Flame, Binary, Hash, Settings, Container
} from 'lucide-react';
import { ReactNode } from 'react';

interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  highlightColor: 'pink' | 'yellow' | 'blue' | 'purple' | 'green'|'red';
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Technologies',
    highlightColor: 'purple',
    skills: [
      { name: 'Java', icon: <Coffee size={14} />, color: 'text-orange-500' },
      { name: 'Spring IOC', icon: <Leaf size={14} />, color: 'text-green-500' },
      { name: 'Spring MVC', icon: <Layers size={14} />, color: 'text-green-600' },
      { name: 'Spring Boot', icon: <Flame size={14} />, color: 'text-green-500' },
      { name: 'Hibernate/JPA', icon: <Database size={14} />, color: 'text-amber-600' },
      { name: 'Servlets', icon: <Server size={14} />, color: 'text-blue-500' },
      { name: 'JSP', icon: <FileCode size={14} />, color: 'text-purple-500' },
      { name: 'JDBC', icon: <Cpu size={14} />, color: 'text-red-500' },
      { name: 'Microservices', icon: <Boxes size={14} />, color: 'text-cyan-500' },
      { name: 'RESTful APIs', icon: <Webhook size={14} />, color: 'text-indigo-500' },
      { name: 'CI/CD Pipeline', icon: <Workflow size={14} />, color: 'text-sky-500' },
      { name: 'Version Control', icon: <GitBranch size={14} />, color: 'text-orange-600' },
      { name: 'Agile', icon: <RefreshCcw size={14} />, color: 'text-teal-500' },
      { name: 'JUnit', icon: <TestTube size={14} />, color: 'text-green-600' },
    ],
  },
  {
    title: 'Front-end Technologies',
    highlightColor: 'blue',
    skills: [
      { name: 'HTML5', icon: <Globe size={14} />, color: 'text-orange-500' },
      { name: 'CSS3', icon: <Paintbrush size={14} />, color: 'text-blue-500' },
      { name: 'JavaScript', icon: <Braces size={14} />, color: 'text-yellow-500' },
      { name: 'Bootstrap', icon: <Layout size={14} />, color: 'text-purple-500' },
      { name: 'ReactJS', icon: <Code2 size={14} />, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Database',
    highlightColor: 'green',
    skills: [
      { name: 'MySQL', icon: <Table size={14} />, color: 'text-blue-600' },
    ],
  },
  {
    title: 'Concepts',
    highlightColor: 'red',
    skills: [
      { name: 'OOP', icon: <Binary size={14} />, color: 'text-violet-500' },
      { name: 'SDLC', icon: <RefreshCcw size={14} />, color: 'text-blue-500' },
      { name: 'Debugging', icon: <Bug size={14} />, color: 'text-red-500' },
      { name: 'Agile practices', icon: <FolderKanban size={14} />, color: 'text-teal-500' },
      { name: 'MVC Architecture', icon: <Layers size={14} />, color: 'text-indigo-500' },
    ],
  },
  {
    title: 'Tools',
    highlightColor: 'pink',
    skills: [
      { name: 'Git', icon: <GitBranch size={14} />, color: 'text-orange-600' },
      { name: 'GitHub', icon: <Github size={14} />, color: 'text-gray-700' },
      { name: 'Jenkins', icon: <Settings size={14} />, color: 'text-red-500' },
      { name: 'IntelliJ', icon: <Terminal size={14} />, color: 'text-pink-500' },
      { name: 'VS Code', icon: <Code2 size={14} />, color: 'text-blue-500' },
      { name: 'Eclipse', icon: <Hash size={14} />, color: 'text-purple-600' },
      { name: 'Maven', icon: <Container size={14} />, color: 'text-red-600' },
      { name: 'JSON', icon: <FileJson size={14} />, color: 'text-yellow-600' },
      { name: 'Jira', icon: <ClipboardList size={14} />, color: 'text-blue-600' },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with:</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                <RoughHighlight color={category.highlightColor} type="rectangle" delay={300 + index * 100}>
                  {category.title}
                </RoughHighlight>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <span className={skill.color}>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
