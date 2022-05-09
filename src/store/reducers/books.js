import { Types } from '../actions/books'

const initialState = {
    userBooks: [],
    books: []
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_USER_BOOK: {
            const userBooks = [
                ...state.userBooks
            ]

            if (!userBooks.includes(action.payload)) {
                userBooks.push(action.payload)
            }

            return {
                ...state,
                userBooks
            }
        }
        case Types.DELETE_USER_BOOK: {
            const userBooks = [
                ...state.userBooks
            ]

            userBooks.splice(action.payload, 1)

            return {
                ...state,
                userBooks
            }
        }
        case Types.SET_USER_BOOKS:
            return {
                ...state,
                userBooks: action.payload
            }
        case Types.SET_LOADED_BOOKS:
            const books = [
                ...action.payload.items
            ]

            return state = {
                ...state,
                books
            }
        default:
            return state
    }
}

export default reducers
