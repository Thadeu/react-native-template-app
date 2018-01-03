import { PERSONS_NEW } from '@actions/actionTypes'

const INITIAL_STATE = {
  isFetching: false,
  data: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PERSONS_NEW.REQUESTED:
      return {
        ...state,
        isFetching: true
      }
    
    case PERSONS_NEW.SUCCESS:
      return {
        data: [...state.data, action.payload],
        isFetching: false
      }
    
    case PERSONS_NEW.ERROR:
      return {
        ...state,
        isFetching: false
      }

    default:
      return state
  }
}