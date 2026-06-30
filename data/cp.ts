export interface CPPlatform {
  name: string
  handle: string
  stat: string
  statLabel: string
  rank: string
  url: string
}

export const cpPlatforms: CPPlatform[] = [
  {
    name: 'LeetCode',
    handle: '@nikitaband',
    stat: '450+',
    statLabel: 'Problems solved',
    rank: 'Rating: 1650 (Knight zone)',
    url: 'https://leetcode.com/nikitaband',
  },
  {
    name: 'CodeChef',
    handle: '@nikitaband',
    stat: '3★',
    statLabel: 'CodeChef rating',
    rank: 'Max rating: 1680',
    url: 'https://codechef.com/users/nikitaband',
  },
]

export const cpTopics = [
  'Dynamic Programming',
  'Graphs',
  'Greedy',
  'Binary Search',
  'Trees',
  'Two Pointers',
  'Sliding Window',
  'Recursion & Backtracking',
]

export const cpLanguage = 'C++'
export const currentlyMastering = 'Advanced Graph Algorithms & Segment Trees'
