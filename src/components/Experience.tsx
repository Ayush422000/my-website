import { RoughHighlight } from "./RoughHighlight";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-foreground" size={24} />
              <h2 className="text-2xl font-bold text-foreground">
                <RoughHighlight color="purple" type="underline" delay={200}>
                  Experience
                </RoughHighlight>
              </h2>
            </div>
            <div className="border-l-2 border-border pl-6 space-y-6">
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-foreground">
                    Java Learning Center - Intern
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Jan - July, 2025
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Developed and automated REST APIs for organizations</li>
                  <li>• Improved scalability by implementing API automation</li>
                  <li>
                    • Developed responsive UIs using HTML, CSS and Bootstrap
                  </li>
                  <li>• Applied MVC architecture and OOP principles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-foreground" size={24} />
              <h2 className="text-2xl font-bold text-foreground">
                <RoughHighlight color="blue" type="underline" delay={250}>
                  Education
                </RoughHighlight>
              </h2>
            </div>
            <div className="border-l-2 border-border pl-6 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground">
                  Master's in Computer Applications
                </h3>
                <p className="text-sm text-muted-foreground">
                  IGNOU, New Delhi
                </p>
                <p className="text-sm text-muted-foreground">
                  CGPA: 4.0/5.0 • Expected 2026
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Bachelor's in Computer Science
                </h3>
                <p className="text-sm text-muted-foreground">
                  SPPU, Pune, Maharashtra
                </p>
                <p className="text-sm text-muted-foreground">
                  CGPA: 7.8/10.0 • 2021 - 2024
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-foreground" size={24} />
              <h2 className="text-2xl font-bold text-foreground">
                <RoughHighlight color="pink" type="underline" delay={300}>
                  Achievements
                </RoughHighlight>
              </h2>
            </div>

            <div className="border-l-2 border-border pl-6 space-y-6">
              {/* 200+ Problems Solved */}
              <div>
                <h3 className="font-semibold text-foreground flex items-center gap-3">
                  <RoughHighlight color="yellow" delay={700}>
                    200+ Problems Solved
                  </RoughHighlight>

                  {/* CodeChef */}
                  <a
                    href="https://www.codechef.com/users/ayushk2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                  >
                    <img
                      src="https://cdn.codechef.com/images/cc-logo.svg"
                      alt="CodeChef Logo"
                      className="w-7 h-7"
                    />
                  </a>

                  {/* LeetCode */}
                  <a
                    href="https://leetcode.com/u/YrL4qHbeTI/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                  >
                    <img
                      src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
                      alt="LeetCode Logo"
                      className="w-7 h-7"
                    />
                  </a>
                </h3>

                <p className="text-sm text-muted-foreground">
                  Solved 200+ programming problems on CodeChef and LeetCode,
                  enhancing logical reasoning, debugging and algorithmic
                  thinking skills.
                </p>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="font-semibold text-foreground">
                  Certifications
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Oracle Java Foundations (LinkedIn Learning)</li>
                  <li>• Web Development (Udemy)</li>
                  <li>• Servlets (Simplilearn)</li>
                  <li>• JDBC (LinkedIn Learning)</li>
                  <li>• MySQL (Infosys Springboard)</li>
                  <li>• Hibernate/JPA (LinkedIn Learning)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
