import { Download, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceItem } from '@/components/ExperienceItem';
import { experience, education } from '@/data/experience';
import { profile } from '@/data/profile';

export default function Resume() {
  return (
    <section className="pt-12 sm:pt-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="// Resume"
            title="Experience & education"
            description="Download my resume to look into my background"
          />
          <Button as="a" href={profile.resumeUrl} download size="md">
            <FileText size={14} />
            Download PDF
            <Download size={14} />
          </Button>
        </div>

        {/* Experience */}
        <div className="mt-12">
          <h3 className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-warn">
            // Professional experience
          </h3>
          <ul className="space-y-10">
            {experience.map((item) => (
              <ExperienceItem key={`${item.company}-${item.start}`} item={item} />
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-warn">
            // Education
          </h3>
          <ul className="space-y-6">
            {education.map((e) => (
              <li
                key={e.school}
                className="rounded-md border border-navy-800 bg-navy-900/60 p-6 transition-colors hover:border-accent/50"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-base font-semibold text-white">{e.school}</h4>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-warn/90">
                    {e.start} – {e.end}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-300">{e.degree}</p>
                {e.location && (
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">
                    {e.location}
                  </p>
                )}
                {e.detail && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{e.detail}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
