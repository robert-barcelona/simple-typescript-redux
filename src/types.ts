
export interface PastaData {
    [key: string]: number | undefined,
}

export interface UserData {
    name: string,
    favorites: PastaData
}

export const STORE_DATA = 'STORE_DATA';

export interface StoreDataAction {
    type: typeof STORE_DATA,
    payload: UserData[]
}

export type PastaActionTypes = StoreDataAction



