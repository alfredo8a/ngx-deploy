import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { getWorkspace, getProjectFromWorkspace } from 'schematics-utilities';

export default function (): Rule {
  return chain([
    createDeployEnviroments(),
  ]);
}

const sourcePath = (project, item): string => {
  return item === 'dev' ? project.options.outputPath : project.configurations[item].outputPath;
}
const destPath = (project, item) => {
  const sp = sourcePath(project, item).split('/');
  return sp.pop();
}

function createDeployEnviroments(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const architect: any = getProjectFromWorkspace(workspace).architect;
    const project = architect.build;
    const configs = Object.keys(project.configurations);
    configs.unshift('dev');
    let array = {};
    configs.map(item => {
      return array[item] = {
        source: sourcePath(project, item),
        dest: destPath(project, item),
        host: '',
        user: '',
        path: ''
      }
    });
    if (!tree.exists('src/environments/deploy.json')) {
      tree.create('src/environments/deploy.json', JSON.stringify(array, null, '\t'));
    } else {
      context.logger.error("FILE EXIST 'src/environments/deploy.json'");
    }
    return tree;
  };
}
