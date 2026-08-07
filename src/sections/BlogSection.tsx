import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { blogPostsData } from '../data/blog';
import { BlogPost } from '../types';
import { BlogModal } from '../components/BlogModal';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <SectionWrapper
      id="blog"
      badge="Technical Insights"
      title="Articles & Architecture Papers"
      subtitle="In-depth writings on Android performance, Agentic RAG systems, offline-first design, and hardware drivers."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPostsData.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between p-6 space-y-4 border border-slate-800 hover:border-blue-500/40">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={post.category === 'AI' ? 'purple' : post.category === 'Compose' ? 'cyan' : 'amber'}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 line-clamp-2 hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  {post.date}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedPost(post)}
                  icon={<ArrowRight className="w-3.5 h-3.5 text-blue-400" />}
                >
                  Read Article
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Article Detail Modal */}
      <BlogModal
        post={selectedPost}
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </SectionWrapper>
  );
};
