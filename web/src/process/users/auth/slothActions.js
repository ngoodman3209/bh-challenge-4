import { put, takeLatest } from 'redux-saga/effects'

// TODO Challenge 4 Complete the saga below, putting the right items instead of the strings
// Look at redux-saga docs to discover what to do
import TYPES from '../types'
export const name = 'userAuthActions'

export function fetchSloth(someSlothName) {
  return {
    type: TYPES.ADD_SlOTH,
    name: someSlothName
  }
}

export function* executeFetchSloth({ slothName }) {
  yield put(fetchSlothSuccess(slothName))

}
export function fetchSuccess(name) {
  return {
    type: TYPES.FETCH_SLOTH_SUCCESS,
    slothName
  }
}

const sagas = [
  takeLatest(Types.ADD_SlOTH, executeFetchSloth)
]

export default sagas
