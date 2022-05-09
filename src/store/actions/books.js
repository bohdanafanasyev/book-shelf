export const Types = {
    SET_LOADED_BOOKS: 'BOOKS/SET_LOADED_BOOKS',
    GET_LOADED_BOOKS: 'BOOKS/GET_LOADED_BOOKS',
    SET_USER_BOOKS: 'BOOKS/SET_USER_BOOKS',
    ADD_USER_BOOK: 'BOOKS/SET_USER_BOOK',
    DELETE_USER_BOOK: 'BOOKS/DELETE_USER_BOOK',
}

export const setUserBooks = (books) => ({
    type: Types.SET_USER_BOOKS,
    payload: books
})

export const addUserBook = (book) => ({
    type: Types.ADD_USER_BOOK,
    payload: book
})

export const deleteUserBook = (book) => ({
    type: Types.DELETE_USER_BOOK,
    payload: book
})

export const getBooks = (searchValue = ``) => ({
    type: Types.GET_LOADED_BOOKS,
    payload: searchValue
})

export const setBooks = (books) => ({
    type: Types.SET_LOADED_BOOKS,
    payload: books
})
