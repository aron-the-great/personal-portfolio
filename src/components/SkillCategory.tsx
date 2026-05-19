import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import type { SkillCategory as SkillCategoryT } from '@/data/skills';

export function SkillCategory({ category }: { category: SkillCategoryT }) {
  return (
    <Card>
      <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-warn">
        {category.title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {category.skills.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </Card>
  );
}
