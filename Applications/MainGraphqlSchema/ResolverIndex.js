import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join(__dirname, "../**/*.Resolver.*"));
console.log("Resolver: ",path.join(__dirname, "../User/graphql/resolvers/userResolver.js"))
console.log(resolversArray);
export default mergeResolvers(resolversArray);