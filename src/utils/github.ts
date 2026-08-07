export interface GitHubStatsData {
  publicRepos: number;
  followers: number;
  following: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  totalStars: number;
  recentRepos: {
    name: string;
    description: string;
    url: string;
    stars: number;
    language: string;
  }[];
}

const FALLBACK_GITHUB_DATA: GitHubStatsData = {
  publicRepos: 18,
  followers: 42,
  following: 15,
  totalStars: 85,
  topLanguages: [
    { name: 'Kotlin', percentage: 48, color: '#A97BFF' },
    { name: 'Python', percentage: 22, color: '#3572A5' },
    { name: 'TypeScript', percentage: 16, color: '#3178C6' },
    { name: 'Java', percentage: 14, color: '#B07219' },
  ],
  recentRepos: [
    {
      name: 'RAG-Learning',
      description: 'Modular RAG architecture and Agentic AI workflow for intelligent document processing.',
      url: 'https://github.com/kiturk3/RAG-Learning',
      stars: 34,
      language: 'Python',
    },
    {
      name: 'kiturk3.github.io',
      description: 'Modern Senior Android & AI Engineer Portfolio Website built with React, Vite & Tailwind CSS.',
      url: 'https://github.com/kiturk3/kiturk3.github.io',
      stars: 18,
      language: 'TypeScript',
    },
    {
      name: 'Android-Ble-Scanner',
      description: 'High-performance Android BLE device discovery & raw packet decoder library.',
      url: 'https://github.com/kiturk3',
      stars: 15,
      language: 'Kotlin',
    },
    {
      name: 'Tauri-Kiosk-Bridge',
      description: 'Cross-platform hardware bridge binding Tauri with USB POS receipt printers.',
      url: 'https://github.com/kiturk3',
      stars: 12,
      language: 'TypeScript',
    },
  ],
};

export async function fetchGitHubStats(username: string = 'kiturk3'): Promise<GitHubStatsData> {
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) throw new Error('GitHub API rate limit or error');
    const userData = await userRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    if (!reposRes.ok) throw new Error('GitHub repos API rate limit or error');
    const reposData = await reposRes.json();

    let totalStars = 0;
    const langCount: Record<string, number> = {};

    const recentRepos = reposData
      .filter((repo: any) => !repo.fork)
      .slice(0, 4)
      .map((repo: any) => {
        totalStars += repo.stargazers_count || 0;
        if (repo.language) {
          langCount[repo.language] = (langCount[repo.language] || 0) + 1;
        }
        return {
          name: repo.name,
          description: repo.description || 'No description provided.',
          url: repo.html_url,
          stars: repo.stargazers_count || 0,
          language: repo.language || 'Code',
        };
      });

    // Calculate top languages
    const totalLangs = Object.values(langCount).reduce((a, b) => a + b, 0) || 1;
    const colorMap: Record<string, string> = {
      Kotlin: '#A97BFF',
      Python: '#3572A5',
      TypeScript: '#3178C6',
      Java: '#B07219',
      JavaScript: '#F1E05A',
      HTML: '#E34C26',
    };

    const topLanguages = Object.entries(langCount).map(([name, count]) => ({
      name,
      percentage: Math.round((count / totalLangs) * 100),
      color: colorMap[name] || '#3B82F6',
    }));

    return {
      publicRepos: userData.public_repos || FALLBACK_GITHUB_DATA.publicRepos,
      followers: userData.followers || FALLBACK_GITHUB_DATA.followers,
      following: userData.following || FALLBACK_GITHUB_DATA.following,
      totalStars: totalStars || FALLBACK_GITHUB_DATA.totalStars,
      topLanguages: topLanguages.length ? topLanguages : FALLBACK_GITHUB_DATA.topLanguages,
      recentRepos: recentRepos.length ? recentRepos : FALLBACK_GITHUB_DATA.recentRepos,
    };
  } catch (error) {
    console.warn('Using fallback GitHub stats due to API limit/network:', error);
    return FALLBACK_GITHUB_DATA;
  }
}
