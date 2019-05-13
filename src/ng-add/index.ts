import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export default function(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const content = {host:'',user:'',path:''}
    const envs = tree.getDir('src/environments').subfiles
    .filter(item => !item.endsWith('.map') && !item.endsWith('d.ts') && !item.endsWith('.js'))
    .map(item => {
      item.replace('environment','deploy')
      tree.create(`src/environments/${item}`,JSON.stringify(content))
    });
    return tree;
  };
}
