// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Genres } = initSchema(schema);

export {
  Genres
};