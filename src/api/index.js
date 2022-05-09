const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes'

export async function getBooks (searchValue) {
    let requestUrl = GOOGLE_BOOKS_API

    if (searchValue) {
        requestUrl += `?q=${searchValue}`
    }

    const response = await fetch(requestUrl)
    const data = await response.json()
    if (response.status >= 400) {
        throw new Error(data.errors)
    }
    return data
}
