const path = require('path');
const mergeGraphqlSchemas = require('merge-graphql-schemas');
const fileLoader = mergeGraphqlSchemas.fileLoader;
const mergeTypes = mergeGraphqlSchemas.mergeTypes;
import { writeFileSync } from 'fs'
const typesArray = fileLoader(path.join(__dirname, '../**/*.graphql'));

console.log("Types: ",path.join(__dirname, '../**/*.graphql'));
// writeFileSync('joined.graphql', typesArray)
console.log(typesArray);

module.exports = mergeTypes(typesArray, {all: true});