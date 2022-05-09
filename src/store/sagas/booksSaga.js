import { put, call, takeEvery } from 'redux-saga/effects'
import { getBooks } from '../../api'
import { setBooks } from '../actions/books'
import { Types } from '../actions/books'

export function* handleBooksLoad(action) {
    try {
        const books = yield call(getBooks, action.payload)
        yield put(setBooks(books))
    } catch (error) {
        yield put(setBooks({
            items: []
        }))
    }
}

export default function* watchBooksLoad() {
    yield takeEvery(Types.GET_LOADED_BOOKS, handleBooksLoad)
}

