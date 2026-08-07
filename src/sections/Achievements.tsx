import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { achievementsData } from '../data/achievements';
import { Award, Smartphone, Download, ShieldCheck, Printer } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-blue-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-cyan-400" />;
      case 'Download': return <Download className="w-6 h-6 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Printer': return <Printer className="w-6 h-6 text-amber-400" />;
      default: return <Award className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <SectionWrapper
      id="achievements"
      badge="Career Impact & Metrics"
      title="Engineering Achievements"
      subtitle="Quantifiable results and production reliability achieved over 12+ years."
    >
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {achievementsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full p-6 text-center space-y-3 border border-slate-800 hover:border-blue-500/40">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto">
                {getIcon(item.icon)}
              </div>

              <div>
                <div className="text-3xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
                  <Counter targetValue={item.value} inView={inView} />
                  <span className="text-blue-400">{item.suffix}</span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                  {item.title}
                </h3>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// Animated Number Counter Sub-component
const Counter: React.FC<{ targetValue: number; inView: boolean }> = ({ targetValue, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = targetValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(targetValue % 1 !== 0 ? 1 : 0)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, targetValue]);

  return <span>{count}</span>;
};
