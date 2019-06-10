import {
  STORE_DATA,
    UserData,
    PastaActionTypes,
} from '../types'

const initialState:UserData[] = [];

export default (state:UserData[] = initialState, action:PastaActionTypes):UserData[] =>  {
    console.log('hihihi', action)


    switch (action.type) {

      case STORE_DATA:
          return action.payload;

      default:
        return state;
    }
};




