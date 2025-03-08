import { CharacterInfoListEntityApi } from "./api";

export interface CharacterEntityVm {
  id: string;
  picture: string;
  name: string;
  status: string;
  species: string;
  gender: string;
}

export interface CharacterEntityListVm {
  info: CharacterInfoListVm, 
  results: CharacterEntityVm[]
}

export interface CharacterInfoListVm{
  count: number;
  pages?: number,
  next?: string | null,
  prev?: string | null
}