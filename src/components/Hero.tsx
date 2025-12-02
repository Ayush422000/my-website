import { RoughHighlight } from "./RoughHighlight";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import cvFile from "@/assets/Ayush-Singh.pdf";
import { FileDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 lg:order-1 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Hello, I'm{" "}
              <RoughHighlight color="purple" delay={800}>
                Ayush!
              </RoughHighlight>{" "}
            </h1>

            <div className="text-lg text-muted-foreground leading-relaxed space-y-4 mb-8">
              <p>
                A Full Stack Developer who turns real world problems into{" "}
                <RoughHighlight color="blue" delay={1200}>
                  fast
                </RoughHighlight>
                ,{" "}
                <RoughHighlight color="blue" delay={1400}>
                  scalable{" "}
                </RoughHighlight>
                and{" "}
                <RoughHighlight color="yellow" delay={1600}>
                  production-ready applications.
                </RoughHighlight>
              </p>

              <p>
                My work blends strong engineering fundamentals with a deep focus
                on usability, performance, efficiency and reliability. I'm
                passionate about building{" "}
                <RoughHighlight color="orange" type="rectangle" delay={2600}>
                  user-centric solutions
                </RoughHighlight>
                ,writing clean and{" "}
                <RoughHighlight color="green" delay={3000}>
                  maintainable code.
                </RoughHighlight>
              </p>

              <p>
                I’m driven by
                <RoughHighlight color="pink" delay={1600}>
                  {" "}
                  problem-solving ,
                </RoughHighlight>
                optimizing existing systems and creating digital experiences
                that feel intuitive and meaningful. I value{" "}
                <RoughHighlight color="peach" type="rectangle" delay={1800}>
                  clarity
                </RoughHighlight>
                ,{" "}
                <RoughHighlight color="green" type="rectangle" delay={2000}>
                  teamwork
                </RoughHighlight>{" "}
                and building software that remains,
                <RoughHighlight color="steel" type="rectangle" delay={2400}>
                  reliable
                </RoughHighlight>{" "}
                over time.
              </p>

              <p>
                I'm currently looking for a new role as a developer.{" "}
                <RoughHighlight color="pink" type="circle" delay={3200}>
                  Hire me?
                </RoughHighlight>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="gap-2">
                <a
                  href="https://www.linkedin.com/in/ayush-singh-8a5806229/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                  View LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a
                  href="https://github.com/Ayush422000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  View Github
                </a>
              </Button>

              <Button variant="outline" asChild className="gap-2">
                <a href={cvFile} download="Ayush-Singh.pdf">
                  <FileDown size={18} />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-muted">
                <img
                  src={profileImg}
                  alt="Ayush Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-foreground/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
