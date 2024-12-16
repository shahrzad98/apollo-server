import { GraphQLScalarType } from 'graphql';

const Void = new GraphQLScalarType({
    name: 'Void',
    serialize: () => null,
    parseValue: () => null,
    parseLiteral: () => null,
});

export default Void;
