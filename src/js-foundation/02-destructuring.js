

console.log(process.env);

const {SHELL, HOMEBREW_PREFIX, npm_lifecycle_script} = process.env;
//console.table({SHELL,HOMEBREW_PREFIX, npm_lifecycle_script});

const characters = ['Flash', 'Superman','Green Lanter', 'Batman'];
const [, , ,batman] = characters;

//console.log(batman);