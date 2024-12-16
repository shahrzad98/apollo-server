import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import * as path from 'path';

const loadedFiles = loadFilesSync(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypeDefs(loadedFiles);

export default typeDefs;
