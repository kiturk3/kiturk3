import React from 'react';
import { Modal } from './ui/Modal';
import { Badge } from './ui/Badge';
import { BlogPost } from '../types';
import { Calendar, Clock, User, BookOpen } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, isOpen, onClose }) => {
  if (!post) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="3xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="blue">{post.category}</Badge>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-blue-400" />
                {post.author}
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 leading-tight">
            {post.title}
          </h2>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none text-sm text-slate-300 space-y-4 font-sans leading-relaxed">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-lg font-bold text-slate-100 pt-3 border-t border-slate-800/60">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('```')) {
              const codeLines = paragraph.split('\n');
              const language = codeLines[0].replace('```', '');
              const codeContent = codeLines.slice(1, -1).join('\n');
              return (
                <div key={idx} className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 my-4">
                  <div className="px-4 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>{language || 'code'}</span>
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <pre className="p-4 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
                    <code>{codeContent}</code>
                  </pre>
                </div>
              );
            }
            return (
              <p key={idx} className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
