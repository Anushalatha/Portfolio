export interface WritingArticle {
  title: string;
  series: string;
  description: string;
  url?: string;
}

export const writingArticles: WritingArticle[] = [
  {
    title: 'Generating an Architecture Is One Thing. Critiquing It Is Another.',
    series: 'Building AI Systems: From Models to Production — Day 34',
    description:
      'Why generating a system architecture is only part of the task, and why the proposal needs to be examined too.',
    url: 'https://medium.com/@anushabodi/generating-an-architecture-is-one-thing-critiquing-it-is-another-5143b4118895?sharedUserId=anushabodi',
  },
  {
    title: 'From AI Models to Production AI Systems',
    series: 'Building AI Systems: From Models to Production — Day 1',
    description:
      'An introduction to the series on moving from AI models toward production AI systems.',
    url: 'https://medium.com/@anushalathaaa7/day-1-from-ai-models-to-production-ai-systems-006979c99b5c',
  },
];
