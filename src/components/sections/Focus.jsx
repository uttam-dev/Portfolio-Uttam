import React from 'react';
import { SectionReveal } from '../ui/SectionReveal';

const focusItems = [
  "Service boundaries, contracts, and systems that scale horizontally",
  "Cloud-native apps with Docker & microservices",
  "System design - caches, databases, distributed systems",
  "Building production-grade .NET systems with explicit domain boundaries and no inherited mess"
];

export function Focus() {
  return (
    <SectionReveal className="py-16 border-t border-(--color-border)">
      <h3 className="font-mono text-xs text-(--color-text-subtle) uppercase tracking-widest mb-8">Focus Areas</h3>

      <ul className="flex flex-col">
        {focusItems.map((item, idx) => (
          <li key={idx} className="group flex items-start gap-4 py-3 border-b border-(--color-border) last:border-0 relative">
            <div className="w-px h-0 group-hover:h-full bg-(--color-text-primary) transition-all duration-300 mt-1 self-stretch absolute left-0" />
            <span className="text-(--color-text-muted) text-sm leading-relaxed group-hover:text-(--color-text-primary) transition-colors duration-200 pl-4">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
