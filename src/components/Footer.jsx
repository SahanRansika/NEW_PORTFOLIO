import { ArrowUp, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-12 pt-12 pb-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* COPYRIGHT */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Copyright by SRK. All rights reserved.
        </p>

        {/* SOCIAL LINKS */}
        <div className="text-center">
          <h4 className="font-medium mb-3">Connect With Me</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.linkedin.com/in/sahan-ransika-66bbab310/"
              target="_blank"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="#"
              target="_blank"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>

            <a
              href="#"
              target="_blank"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/share/1AnYQCvtUF/"
              target="_blank"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* BACK TO TOP */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={22} />
        </a>
      </div>
    </footer>
  );
};