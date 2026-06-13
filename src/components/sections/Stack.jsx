import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '../ui/SectionReveal';
import { Tag } from '../ui/Tag';
import { staggerContainer, tagVariant } from '../../lib/motion';

const stackData = [
  { category: 'Backend', items: ['C#', '.NET', 'Node.js', 'Express'] },
  {
    category: 'Frontend', items: ['React', 'Tailwind', 'Bootstrap', 'Redux Toolkit', 'Axios']
  },
  { category: 'Data', items: ['MongoDB', 'MySQL', 'SQL Server'] },
  { category: 'Tools', items: ['Docker', 'Git', 'REST APIs', 'Linux', 'Arduino'] }
];

export function Stack() {
  return (
    <SectionReveal className="py-16 border-t border-(--color-border)" >
      <h3 className="font-mono text-xs text-(--color-text-subtle) uppercase tracking-widest mb-8">Stack</h3>

      <div className="flex flex-col gap-6">
        {stackData.map((group, index) => (
          <div key={index} className="mb-6 flex flex-col sm:flex-row sm:items-start">
            <div className="font-mono text-xs text-(--color-text-subtle) mb-3 sm:mb-0 sm:w-32 sm:mt-1.5 sm:flex-shrink-0">
              {group.category}
            </div>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {group.items.map((item, itemIdx) => (
                <Tag key={itemIdx} animateIn variants={tagVariant}>
                  {item}
                </Tag>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionReveal >
  );
}
