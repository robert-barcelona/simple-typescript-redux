import {STORE_DATA, PastaActionTypes, UserData} from '../types'
import {getPastaData} from "../logic";


export const storeData = () => (dispatch:any)  => {
    const payload = getPastaData();
    dispatch({type:STORE_DATA, payload})
};
