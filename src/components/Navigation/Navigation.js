import UserImg from '../../library/assets/images/user.jpg'

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center">
            <h2 className="text-xl font-semibold font-sans text-accent">
                BOOKS
            </h2>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img className="object-cover w-full h-full"
                         src={UserImg}
                         alt="User" />
                </div>
                <div className="flex flex-col gap-1">
                    {[...Array(3)].map((x, i) =>
                        <div className="w-[3px] h-[3px] bg-primary rounded-full"
                             key={i} />
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navigation
