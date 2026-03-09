import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_7l6fh7c", // service id
        "template_p4y9x0a",  // template id (EmailJS eken ganna)
        e.target,
        "DXHhCgRL5ao3r4bou"       // public key (API Keys walin ganna)
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });

          e.target.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error);

          toast({
            title: "Error",
            description: "Failed to send message.",
          });

          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sahanransika07@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    sahanransika07@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+94773377494"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +94 77 337 7494
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Aluthgama, Kalutara, Sri Lanka
                  </p>
                </div>
              </div>

            </div>

            {/* SOCIAL */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>

              <div className="flex space-x-4">

                <a href="https://www.linkedin.com/in/sahan-ransika-66bbab310/" target="_blank">
                  <Linkedin />
                </a>

                <a href="#" target="_blank">
                  <Twitter />
                </a>

                <a href="#" target="_blank">
                  <Instagram />
                </a>

                <a href="https://www.facebook.com/share/1AnYQCvtUF/" target="_blank">
                  <Facebook />
                </a>

              </div>
            </div>

          </div>

          {/* FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="Username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="user@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};