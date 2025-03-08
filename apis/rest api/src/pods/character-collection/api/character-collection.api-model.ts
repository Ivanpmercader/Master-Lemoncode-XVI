export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentence?: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface CharacterEntityApiListResponse {
  info: {
    count: number;
    pages?: number,
    next?: string | null,
    prev?: string | null
  },
  results: CharacterEntityApi[];
}