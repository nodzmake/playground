let target = { name: 'xoxo', balance: 70000 }
let source = { name: 'xoxo', balance: 80000 }

let ret = Object.assign(target, source)

console.log({ret})
console.log(target);