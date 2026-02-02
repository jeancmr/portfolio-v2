import { About } from './components/About';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Separator } from './components/ui/separator';

export const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Separator className="mx-auto max-w-4xl" />
      <About />
      <Separator className="mx-auto max-w-4xl" />
      <Skills />
      <Separator className="mx-auto max-w-4xl" />
    </div>
  );
};
