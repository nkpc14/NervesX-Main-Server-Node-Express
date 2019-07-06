import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join(__dirname, "../**/*.Resolvers.*"));
console.log("Resolver: ",path.join(__dirname, "../**/*.Resolvers.*"))
export default mergeResolvers(resolversArray);