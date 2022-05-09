import BookShapeImage from '../../library/assets/images/bookShape.png'
import { formatAuthors } from '../../utils'

const UserBook = ({ book }) => {
    return (
        <div className="user-book h-full shrink-0 overflow-hidden rounded-l-lg rounded-r-xl drop-shadow-xl relative select-none">
            {book.volumeInfo?.imageLinks?.thumbnail ?
                (
                    <>
                        <img className="h-full w-auto max-w-none"
                             src={book.volumeInfo.imageLinks.thumbnail}
                             alt='Thumbnail'/>
                        <img className="h-full w-full absolute top-0 left-0"
                             src={BookShapeImage}
                             alt='Thumbnail background'/>
                    </>
                ) : (
                    <div className="w-44 h-full bg-slate-100 flex items-end justify-end">
                        <div className="px-4 py-8">
                            <h3 className="text-sm font-serif text-primary line-clamp-2 shrink-0">
                                {book.volumeInfo?.title}
                            </h3>
                            <p className="text-[12px] text-secondary line-clamp-2 mt-2 shrink-0">
                                {formatAuthors(book.volumeInfo?.authors)}
                            </p>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default UserBook
