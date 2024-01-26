import easyTemplates from './easy';
import mediumTemplates from './medium';
import hardTemplates from './hard';

export const templatesByLevel = { easy: easyTemplates, medium: mediumTemplates, hard: hardTemplates };
export const templatesByNumber = [
  ...Object.values(easyTemplates),
  ...Object.values(mediumTemplates),
  ...Object.values(hardTemplates),
];
