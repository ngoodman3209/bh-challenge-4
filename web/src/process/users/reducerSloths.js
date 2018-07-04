import TYPES from './slothTypes'
import merge from 'lodash/merge'

export const initialState = {
  sloths: 'none yet'
}

const addSloth = () => {
  console.log('inside the reducer')
  return state
}

const handlers = {
  [TYPES.FETCH_SLOTH_SUCCESS]: addSloth
}

export default function(state = {}, action = {}) {
  return handlers[action.type]
    ? handlers [action.type] (state, action)
    : state
}

export const selector = {
  name: 'Sloths',
  select(state) {
    return state.sloths
  }
}
