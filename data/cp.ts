export interface CPPlatform {
  name: string
  handle: string
  stat: string
  statLabel: string
  rating: string
  url: string
}

export const cpPlatforms: CPPlatform[] = [
  {
    name: 'LeetCode',
    handle: '',
    stat: '300+',
    statLabel: 'Problems solved',
    rating: '1671',
    url: '',
  },
  {
    name: 'CodeChef',
    handle: '',
    stat: '2★',
    statLabel: 'CodeChef rating',
    rating: '1510',
    url: '',
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
export const currentlyMastering = 'Advanced Dynamic Programming'
