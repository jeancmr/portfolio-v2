import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-2">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Jean Madiedo Rodríguez
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">Software Engineer</p>
        </div>

        <p className="text-pretty text-lg leading-relaxed text-foreground/90">
          I'm a system engineer focused on web development. I build user interfaces and web
          applications with modern technologies.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="default"
            size="lg"
            asChild
            className="transition-transform hover:scale-105"
          >
            <a href="mailto:jean.madiedo08@gmail.com">
              <Mail className="mr-2 size-4" />
              Contact Me
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="transition-transform hover:scale-105 bg-transparent"
          >
            <a href="https://www.linkedin.com/in/jeancmr" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 size-4" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="transition-transform hover:scale-105 bg-transparent"
          >
            <a href="https://github.com/jeancmr" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 size-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
