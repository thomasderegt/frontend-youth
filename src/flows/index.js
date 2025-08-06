// Export all available flows
export { default as guiltReturnFlow } from './guiltReturnFlow';
export { default as spiritualityFlow } from './spiritualityFlow';
export { default as beliefFlow } from './beliefFlow';
export { default as testFlow } from './testFlow';
export { default as testFlow3 } from './testFlow3';

// Flow registry for dynamic loading
export const flowRegistry = {
  'guilt-return': () => import('./guiltReturnFlow'),
  'spirituality': () => import('./spiritualityFlow'),
  'belief': () => import('./beliefFlow'),
  'test': () => import('./testFlow'),
  'test3': () => import('./testFlow3'),
}; 