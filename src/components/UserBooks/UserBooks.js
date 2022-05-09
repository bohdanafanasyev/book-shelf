import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    deleteUserBook,
    setUserBooks
} from '../../store/actions/books'
import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd'
import ScrollContainer from 'react-indiana-drag-scroll'
import UserBook from './UserBook'

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)

    result.splice(endIndex, 0, removed)

    return result
}

const UserBooks = () => {
    const dispatch = useDispatch()
    const userBooks = useSelector(state => state.books.userBooks)

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            dispatch(deleteUserBook(result.source.index))
        } else {
            const newOrder = reorder(userBooks, result.source.index, result.destination.index)

            dispatch(setUserBooks(newOrder))
        }
    }

    return (
        <div className="flex flex-col">
            <div className="mt-20 z-10 px-10">
                {userBooks.length > 0 && (
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable"
                                   direction="horizontal">
                            {(provided, snapshot) => (
                                <ScrollContainer className="scroll-container cursor-all-scroll pb-20"
                                                 ignoreElements='.user-book'>
                                    <div className="flex"
                                         ref={provided.innerRef}
                                         {...provided.droppableProps}
                                    >
                                        {userBooks.map((book, index) => (
                                            <Draggable key={index}
                                                       draggableId={String(index)}
                                                       index={index}>
                                                {(provided, snapshot) => (
                                                    <div className="h-64 mr-20"
                                                         ref={provided.innerRef}
                                                         {...provided.draggableProps}
                                                         {...provided.dragHandleProps}>
                                                        <UserBook book={book} />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                </ScrollContainer>
                            )}
                        </Droppable>
                    </DragDropContext>
                )}
                {userBooks.length === 0 && (
                    <div className="w-40 h-56 bg-secondary rounded-2xl mb-28 opacity-30" />
                )}
            </div>
            <div className="shelf drop-shadow-2xl relative z-0 -mt-20 -translate-y-2">
                <div className="h-full absolute top-0 left-0 shelfBox">
                    <div className="shelfBox__face shelfBox__face--front bg-shelfBg"></div>
                    <div className="shelfBox__face shelfBox__face--top bg-shelfBg"></div>
                </div>
            </div>
        </div>
    )
}

export default UserBooks
