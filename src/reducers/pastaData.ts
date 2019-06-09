import {storeDataAction, pastaActionTypes, UserData} from '../types'

const pastaData = (state = [], action) => {
  switch (action.type) {
    case actionTypes.UPDATE_EVENTS:
    case actionTypes.CLEAR_EVENTS:
      const {payload:{events}} = action
      if (!events) return state
      return events

    default:
      return state
  }
};

export default events;
