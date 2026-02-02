import { skills } from '@/data/skills';
import { Badge } from './ui/badge';

export const Skills = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
      <h2 className="mb-8 text-3xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            variant="secondary"
            className={`px-4 py-2 text-sm transition-all duration-300 ${skill.color} hover:scale-110 cursor-pointer`}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
};
