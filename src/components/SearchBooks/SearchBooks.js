import {
    useEffect
} from 'react'
import {
    getBooks,
    addUserBook
} from '../../store/actions/books'
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    debounce,
    formatAuthors
} from '../../utils'
import ImageIcon from '../../library/assets/icons/image.svg'
import BookShapeImage from '../../library/assets/images/bookShape.png'

const SearchBooks = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.books)
    const handleGetBooks = () => {
        dispatch(getBooks(`socrates`))
    }
    const handleSearch = debounce(
        300,
        (event) => {
            if (event.target.value.length) {
                dispatch(getBooks(event.target.value))
            }
        }
    )
    const handelAddBook = (book) => {
        dispatch(addUserBook(book))
    }

    useEffect(() => {
        if (!books.length) {
            handleGetBooks()
        }
    })

    return (
        <div className="mt-20">
            <div className="flex flex-col gap-8
                            md:flex-row md:gap-12">
                <div className="shrink-0 flex flex-col">
                    <h3 className="text-3xl font-serif text-primary">
                        New & Trending
                    </h3>
                    <p className="text-sm text-primary mt-2">
                        Explore new worlds from authors
                    </p>
                </div>
                <input className="w-full h-12 rounded-3xl p-6 text-sm text-primary max-w-md
                                  bg-slate-50 placeholder:text-secondary
                                  md:self-end"
                       placeholder="Title, author or topics"
                       onInput={handleSearch} />
            </div>
            <div className="flex flex-wrap gap-12 mt-10
                            lg:gap-24">
                {books?.map((book, index) => (
                    <div className="flex h-36 gap-8 overflow-visible items-center select-none"
                         key={index}>
                        <div className="h-full shrink-0 overflow-hidden rounded-xl drop-shadow-xl relative pointer-events-none">
                            {book.volumeInfo?.imageLinks?.thumbnail ?
                                (
                                    <>
                                        <img className="h-full w-auto max-w-none"
                                             src={book.volumeInfo.imageLinks.thumbnail}
                                             alt='Thumbnail'/>
                                        <img className="h-full w-full absolute top-0 left-0"
                                             src={BookShapeImage}
                                             alt='Thumbnail background' />
                                    </>
                                ) : (
                                    <div className="w-28 h-full bg-slate-100 flex items-center justify-center">
                                        <img className="w-8"
                                             src={ImageIcon}
                                             alt='Thumbnail'/>
                                    </div>
                                )}
                        </div>
                        <div className="flex flex-col w-48">
                            <h3 className="text-sm font-serif text-primary line-clamp-2 shrink-0">
                                {book.volumeInfo?.title}
                            </h3>
                            <p className="text-[12px] text-secondary line-clamp-2 mt-2 shrink-0">
                                {formatAuthors(book.volumeInfo?.authors)}
                            </p>
                            <button className="text-accent text-sm p-2 -ml-2 -mb-2 self-end mt-4"
                                    onClick={() => handelAddBook(book)}>
                                Add
                            </button>
                        </div>
                    </div>
                ))}
                {books?.length === 0 && (
                    <p className="text-sm text-secondary">
                        No books were found for your request
                    </p>
                )}
            </div>
        </div>
    )
}

export default SearchBooks
