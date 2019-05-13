import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { getWorkspace, getProjectFromWorkspace, getProjectTargets } from 'schematics-utilities';
// import { getWorkspace, getProjectFromWorkspace, getProjectTargets, getWorkspacePath } from 'schematics-utilities';

export default function (): Rule {
  return chain([
    createDeployEnviroments(),
    // updateFileReplacements(),

  ]);
}
// function updateFileReplacements(): Rule {
//   return (host: Tree, _context: SchematicContext) => {
//     const workspace = getWorkspace(host);
//     // const recorder : UpdateRecorder = {insertLeft(),insertRight()}
//     // appendPropertyInAstObject({insertLeft(0,'deploy')},workspace,'architect')
//     const project = getProjectFromWorkspace(workspace, workspace['defaultProject']);
//     var targets = getProjectTargets(project);

//     targets.map(target => target.configurations).map(config => {
//       config.fileReplacements.push()
//     })
//     host.overwrite(getWorkspacePath(host), JSON.stringify(workspace, null, 2));

//     // addProjectToWorkspace(workspace,'deploy',project)
//     // console.log(targets);

//     return host;
//   };
// }

function createDeployEnviroments(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const project = getProjectFromWorkspace(workspace);
    const targets = getProjectTargets(project);

    const keys = Object.keys(targets.build.configurations);
    const arrayJson = {}
    keys.forEach(key => {
      arrayJson[key] = {
        source: targets.build.configurations[key].outputPath,
        host: '',
        user: '',
        password: '',// Optional if privateKey = true
        privateKey: false,
        path: ''
      }
    });

    if (!tree.exists('src/environments/deploy.json')) {
      tree.create('src/environments/deploy.json', JSON.stringify(arrayJson, null, '\t'));
    } else {
      context.logger.error('FILE EXIST ' + 'src/environments/deploy.json');
    }
    return tree;
  };
}
