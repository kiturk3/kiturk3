import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { fetchGitHubStats, GitHubStatsData } from '../utils/github';
import { Github, Star, GitFork, BookOpen, Users, ExternalLink, Code } from 'lucide-react';

export const GitHubStats: React.FC = () => {
  const [stats, setStats] = useState<GitHubStatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubStats('kiturk3').then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  return (
    <SectionWrapper
      id="github"
      badge="Open Source & Community"
      title="GitHub Activity & Repositories"
      subtitle="Public repositories, open-source code contributions, and live activity from @kiturk3."
    >
      <div className="space-y-8">
        {/* Overview Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-5 text-center space-y-1">
            <BookOpen className="w-5 h-5 text-blue-400 mx-auto" />
            <div className="text-2xl font-black text-slate-100">{loading ? '...' : stats?.publicRepos}</div>
            <div className="text-xs text-slate-400 font-medium">Public Repos</div>
          </Card>
          <Card className="p-5 text-center space-y-1">
            <Star className="w-5 h-5 text-amber-400 mx-auto" />
            <div className="text-2xl font-black text-slate-100">{loading ? '...' : stats?.totalStars}</div>
            <div className="text-xs text-slate-400 font-medium">Total Stars</div>
          </Card>
          <Card className="p-5 text-center space-y-1">
            <Users className="w-5 h-5 text-cyan-400 mx-auto" />
            <div className="text-2xl font-black text-slate-100">{loading ? '...' : stats?.followers}</div>
            <div className="text-xs text-slate-400 font-medium">Followers</div>
          </Card>
          <Card className="p-5 text-center space-y-1">
            <Github className="w-5 h-5 text-purple-400 mx-auto" />
            <div className="text-2xl font-black text-slate-100">{loading ? '...' : 'kiturk3'}</div>
            <div className="text-xs text-slate-400 font-medium">GitHub Profile</div>
          </Card>
        </div>

        {/* Languages Breakdown Bar */}
        {stats && (
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                Primary Codebase Languages
              </h3>
              <span className="text-xs text-slate-400">Calculated across public repos</span>
            </div>

            {/* Stacked Bar */}
            <div className="h-3 w-full rounded-full bg-slate-900 overflow-hidden flex">
              {stats.topLanguages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                  className="h-full transition-all duration-500"
                />
              ))}
            </div>

            {/* Legend Grid */}
            <div className="flex flex-wrap gap-4 pt-1">
              {stats.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-slate-500">({lang.percentage}%)</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Recent Active Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats?.recentRepos.map((repo) => (
            <Card key={repo.name} className="p-5 space-y-3 flex flex-col justify-between border border-slate-800 hover:border-blue-500/40">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-100 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span>{repo.name}</span>
                  </a>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  {repo.language}
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                  {repo.stars}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
