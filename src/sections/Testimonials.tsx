import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { testimonialsData } from '../data/testimonials';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <SectionWrapper
      id="testimonials"
      badge="Leadership & Endorsements"
      title="Recommendations & Testimonials"
      subtitle="What engineering executives, CTOs, and team leads say about working with Krutik."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between p-6 space-y-4 border border-slate-800 hover:border-blue-500/40">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-blue-500/30" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-blue-400 font-medium">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {item.company}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
