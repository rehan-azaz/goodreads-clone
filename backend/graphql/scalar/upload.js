import { GraphQLScalarType, Kind } from 'graphql';

const UploadScalar = new GraphQLScalarType({
  name: 'Upload',
  description: 'The `Upload` scalar type represents a file upload.',

  // Serialize function takes a JavaScript value and converts it to a serialized value
  serialize(value) {
    throw new Error('Upload cannot be serialized');
  },

  // Parse Value function takes a serialized value and converts it to a JavaScript value
  parseValue(value) {
    if (!(value instanceof Promise)) {
      throw new Error('Upload value must be a Promise');
    }
    return value.then(file => {
      if (!file || !file.createReadStream) {
        throw new Error('Invalid file provided');
      }
      return file;
    });
  },

  // Parse Literal function takes an AST value and converts it to a JavaScript value
  parseLiteral(ast) {
    throw new Error('Upload literal unsupported');
  }
});

export default UploadScalar;
