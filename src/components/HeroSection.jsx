import { ArrowDown, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="hero-Hi text-primary opacity-0 animate-fade-in-delay-1">
              Hi, I&apos;m
            </span>
          </h1>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="hero-name text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Sahan Ransika Kumara
            </span>
          </h1>

          <p className="hero-intro text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am Software Engineering Student at IJSE | Focused on creating
            real-world software applications. Passionate Software Engineering
            Undergraduate building modern and scalable applications.
          </p>

          {/* Buttons */}
          <div className="pt-4 flex gap-4 justify-center opacity-0 animate-fade-in-delay-4">

            <a href="#projects" className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transitio">
              View My Work
            </a>

            <a
              href="/cv/Sahan_Ransika_Kumara_CV.pdf"
              download="Sahan_Ransika_Kumara_CV.pdf"
              className="cosmic-button flex items-center gap-2"
            >
            <Download size={18} />
            Download CV
          </a>
            

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};