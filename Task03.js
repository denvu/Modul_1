'use strict'

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = function (name, prefix) {
    
    return names.map((name) => prefix + ' '+ name);
};

console.log(addPrefix(names, 'Mr'));