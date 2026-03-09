import { Briefcase, Code, User } from "lucide-react";
import aboutImg from "../assets/images/about.png";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8 flex flex-col items-center text-center md:text-left">
            {/* PROFILE IMAGE */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-spin-slow"></div>
              
              <img
                src={aboutImg}
                alt="Sahan"
                className="w-56 h-56 object-cover rounded-full border-4 border-green-500 shadow-lg"
              />
            </div>

            {/* TEXT UNDER IMAGE */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Full-Stack Developer
              </h3>
              <p className="text-muted-foreground">
                Software Engineering undergraduate at IJSE with strong analytical skills and
                programming experience. Seeking internship opportunities to apply technical knowledge
                and prove development capabilities in real-world projects.
              </p>
            </div>
          </div>
            
          {/* RIGHT SIDE */}
          <div className="space-y-6 relative">
          {/* CONTENT BOXES (unchanged) */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};