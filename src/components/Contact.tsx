import { RoughHighlight } from './RoughHighlight';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-24 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <RoughHighlight color="pink" delay={200}>Get in Touch</RoughHighlight>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:info4ayush@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={18} />
              info4ayush@gmail.com
            </a>
            {/* <a
              href="tel:+916360672831"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={18} />
              +91 6360-672831
            </a> */}
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              Bangalore, Karnataka
            </span>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:info4ayush@gmail.com">
                <Mail size={18} />
                Say Hello
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2">
              <a href="https://www.linkedin.com/in/ayush-singh-8a5806229/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2">
              <a href="https://github.com/Ayush422000" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
