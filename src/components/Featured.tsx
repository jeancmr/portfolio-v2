import { featuredProjects } from '@/data/featuredProjects';
import { ExternalLinkIcon, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export const Featured = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
      <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Card
            key={project.title}
            className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              <img
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-balance leading-tight">{project.title}</CardTitle>
              <CardDescription className="text-pretty leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                  <a href={project.repository} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 size-3.5" />
                    Code
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="mr-2 size-3.5" />
                    Live
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
