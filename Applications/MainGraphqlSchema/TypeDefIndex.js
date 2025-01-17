const path = require('path');
const mergeGraphqlSchemas = require('merge-graphql-schemas');
const fileLoader = mergeGraphqlSchemas.fileLoader;
const mergeTypes = mergeGraphqlSchemas.mergeTypes;
import {writeFileSync} from 'fs'

const typesArray = fileLoader(path.join(__dirname, '../**/*.graphql'));
module.exports = mergeTypes(typesArray, {all: true});