import { Avatar } from "./UserAvatar"
import { Logo } from "./Logo"
import { Link } from "react-router-dom"
import { useRecoilValueLoadable } from "recoil"
import { userAtom } from "../../atoms/UserAtom"

export const Appbar = () => {
    const initName = useRecoilValueLoadable(userAtom)
    if (initName?.state === 'loading') {
        return <div>
            loading....
        </div>
    }
    const name = initName?.contents
    console.log(name)
    return <div className="border-b lg:px-4">
        <div className="w-full p-3 flex justify-between">
        <Link to={'/blogs'}>
            <div>
                <Logo />
            </div>
        </Link>
        <div className="flex justify-center">
            <div className="px-4">
            </div>
            <div>
                <Avatar name={name}/>
            </div>    
        </div>
        </div>
                   
    </div>
}