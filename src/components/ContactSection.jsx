import { Send } from "lucide-react";
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
        "service_7l6fh7c",
        "template_p4y9x0a",
        e.target,
        "DXHhCgRL5ao3r4bou"
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
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 font-sans">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-nunito">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-nunito">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE - Contact Information */}
          <div className="bg-white/10 p-8 rounded-lg shadow-md backdrop-blur-sm font-nunito">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-left">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <label className="w-32 font-medium ">Email</label>
                <a
                  href="mailto:sahanransika07@gmail.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  sahanransika07@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <label className="w-32 font-medium">Phone</label>
                <a
                  href="tel:+94773377494"
                  className="text-muted-foreground hover:text-primary"
                >
                  +94 77 337 7494
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <label className="w-32 font-medium pt-1">Location</label>
                <p className="text-muted-foreground">
                  Aluthgama, Kalutara, Sri Lanka
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Send a Message */}
          <div className="bg-white/10 p-8 rounded-lg shadow-md backdrop-blur-sm font-nunito">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="flex items-center space-x-4">
                <label className="w-32 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="flex-1 px-4 py-3 rounded-md border border-input bg-background/20"
                  placeholder="Username"
                />
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <label className="w-32 text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="flex-1 px-4 py-3 rounded-md border border-input bg-background/20"
                  placeholder="user@gmail.com"
                />
              </div>

              {/* Message */}
              <div className="flex items-start space-x-4">
                <label className="w-32 text-sm font-medium pt-3">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="flex-1 px-4 py-3 rounded-md border border-input bg-background/20 resize-none"
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