import easyTemplates from './easy';
import mediumTemplates from './medium';
import hardTemplates from './hard';

const templatesByLevel = { easy: easyTemplates, medium: mediumTemplates, hard: hardTemplates };

function createTemplateById() {
  const copyTemplates = JSON.parse(JSON.stringify(templatesByLevel));
  let start = 0;
  const result = [];
  for (let i = 0; i < Object.keys(copyTemplates).length; i += 1) {
    for (let j = 0; j < copyTemplates[Object.keys(copyTemplates)[i]].length; j += 1) {
      const obj = copyTemplates[Object.keys(copyTemplates)[i]][j];
      obj.id = start;
      obj.level = Object.keys(copyTemplates)[i];
      result.push(obj);
      start += 1;
    }
  }
  return result;
}

const templatesById = createTemplateById();

export { templatesById, templatesByLevel };
