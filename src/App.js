import Navigation from './components/Navigation/Navigation'
import SearchBooks from './components/SearchBooks/SearchBooks'
import UserBooks from './components/UserBooks/UserBooks'

function App() {
    return (
        <div className="w-full min-h-full bg-shelfBg">
            <div className="w-full px-16 pt-8 pb-20 drop-shadow-2xl mx-auto">
                <Navigation />
                <UserBooks />
                <SearchBooks />
            </div>
        </div>
    )
}

export default App
