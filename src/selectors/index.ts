import {UserData} from "../types";

export const getTopUsersByPasta: Function = (state: any, pastaName: string, topCount: number = 5): Array<UserData> => {
    if (!state || !state.pastaData) throw new Error('There is no pasta data');
    if (pastaName === '') throw new Error('There was no pasta specified');
    const pastaData: UserData[] = state.pastaData;
    const filteredArray: Array<UserData> = pastaData.filter(data => data.favorites.hasOwnProperty(pastaName));
    if (!filteredArray) return [];
    return filteredArray.sort((a, b) => b.favorites[pastaName]! - a.favorites[pastaName]!).slice(0, 5);
};
