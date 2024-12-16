import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import Void from './shared/scalars/scalarVoid';
import { GraphQLUpload } from 'graphql-upload';
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers: {
        Void,
        Upload: GraphQLUpload,
        JSON: GraphQLJSON,
        JSONObject: GraphQLJSONObject,
        ...resolvers,
    },
});

export default schema;
