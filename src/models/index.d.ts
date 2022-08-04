import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type GenresMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Genres {
  readonly id: string;
  readonly image?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Genres, GenresMetaData>);
  static copyOf(source: Genres, mutator: (draft: MutableModel<Genres, GenresMetaData>) => MutableModel<Genres, GenresMetaData> | void): Genres;
}