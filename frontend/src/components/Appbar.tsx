import { Avatar } from "./UserAvatar"
import { Logo } from "./Logo"

interface type {
    username: string
}
export const Appbar = ({username}: type) => {
    return <div className="border-b">
        <div className="w-full p-3 flex justify-between">
            <div>
                <Logo />
            </div>
        <div className="flex flex-col justify-center">
            <Avatar username={username} />
        </div>
        </div>           
    </div>
}