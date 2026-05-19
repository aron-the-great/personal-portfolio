import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { gallery } from '@/data/gallery';

export default function Gallery() {
  return (
    <section className="pt-12 sm:pt-16">
      <Container>
        <SectionHeading
          eyebrow="// Gallery"
          title="In the field"
          description="A look behind the resume — the labs, test stands, and people that made the work possible."
        />

        <div className="mt-12 gap-5 columns-1 md:columns-2 [column-fill:_balance]">
          {gallery.map((item, idx) => (
            <figure
              key={item.id}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-md border border-navy-800 bg-navy-900/60 transition-colors hover:border-accent/50"
            >
              <div className="overflow-hidden">
                <img
                  src={encodeURI(item.src)}
                  alt={item.alt}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="p-5">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-warn">
                  // {item.caption}
                </div>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
