const path = require('path');
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join(__dirname), { extensions: ['.js'] });

export default mergeResolvers(resolversArray);