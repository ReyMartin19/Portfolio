"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono mb-4 text-sm">05. What&apos;s Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-foreground-secondary max-w-xl mx-auto text-lg">
            I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <a
                href="mailto:reymartinagluya8@gmail.com"
                className="flex items-center gap-4 text-foreground-secondary hover:text-accent transition-colors group"
              >
                <div className="p-3 bg-surface border border-border rounded-lg group-hover:border-accent/50 transition-colors">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm">reymartinagluya8@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-foreground-secondary hover:text-accent transition-colors group cursor-default">
                <div className="p-3 bg-surface border border-border rounded-lg group-hover:border-accent/50 transition-colors">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-sm">09150326962</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground-secondary hover:text-accent transition-colors group cursor-default">
                <div className="p-3 bg-surface border border-border rounded-lg group-hover:border-accent/50 transition-colors">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm">Bauko, Mountain Province, PH</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-foreground font-medium mb-4">Connect on social</p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-surface border border-border rounded-lg text-foreground-secondary hover:text-accent hover:border-accent/50 transition-all hover:-translate-y-1">
                  GitHub
                </a>
                <a href="#" className="p-3 bg-surface border border-border rounded-lg text-foreground-secondary hover:text-accent hover:border-accent/50 transition-all hover:-translate-y-1">
                  LinkedIn
                </a>
                <a href="#" className="p-3 bg-surface border border-border rounded-lg text-foreground-secondary hover:text-accent hover:border-accent/50 transition-all hover:-translate-y-1">
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 bg-surface border border-border rounded-2xl p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground-secondary">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-surface-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground-secondary">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-surface-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground-secondary">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-surface-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground-secondary">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full bg-surface-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-foreground text-background font-medium rounded-lg px-4 py-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-background transition-colors group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
