import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jean Madiedo Rodríguez. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:jean.madiedo08@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-5" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jeancmr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/jeancmr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
