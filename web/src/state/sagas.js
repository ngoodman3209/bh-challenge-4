import AuthSagas from 'Process/users/auth/actions'
import SlothSagas from 'Process/users/auth/slothActions'
import { all } from 'redux-saga/effects'

export default function* root() {
  let sagas = []
    .concat(AuthSagas)
    .concat(SlothSagas)
  yield all(sagas)
}
