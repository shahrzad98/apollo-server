import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import * as path from 'path';

const loadedFiles = loadFilesSync(path.join(__dirname, './**/resolver.ts'));
const resolvers = mergeResolvers(loadedFiles);

export default resolvers;
