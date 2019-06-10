import pastaData from './data/users-pasta.json'

import {UserData} from "./types";

 const ParsedUserData  = pastaData.map(data => ({name: data.name, gender:data.gender,favorites: data.favorites}));

export const getPastaData = () => ParsedUserData;


