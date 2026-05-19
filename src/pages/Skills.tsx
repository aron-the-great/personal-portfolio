import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillCategory } from '@/components/SkillCategory';
import { Card } from '@/components/ui/Card';
import { skills } from '@/data/skills';
import { coursework } from '@/data/coursework';

export default function Skills() {
  return (
    <section className="pt-12 sm:pt-16">
      <Container>
        <SectionHeading
          eyebrow="// Skills & Coursework"
          title="What I work with"
          description="Tools and Coursework"
        />

        {/* Skills */}
        <div className="mt-12">
          <h3 className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            // Skills
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((cat) => (
              <SkillCategory key={cat.title} category={cat} />
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div className="mt-16">
          <h3 className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            // Relevant coursework
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {coursework.map((group) => (
              <Card key={group.title}>
                <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-warn">
                  {group.title}
                </h4>
                <ul className="mt-4 space-y-2">
                  {group.courses.map((c) => (
                    <li
                      key={c.code}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="text-slate-200">{c.name}</span>
                      <span className="shrink-0 font-mono text-[11px] tracking-wider text-accent/80">
                        {c.code}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
