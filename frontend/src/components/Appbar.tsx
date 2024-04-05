import { Avatar } from "./UserAvatar";
import { Logo } from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { userAtom } from "../../atoms/UserAtom";
import { LogoutButton } from "./LogoutButton";
import { CreateButton } from "./CreateButton";
import { PublishButton } from "./PublishButton";
import { Searchbar } from "./Searchbar";

export const Appbar = () => {
    const initName = useRecoilValueLoadable(userAtom);
    const location = useLocation();

    if (initName?.state === "loading") {
        return (
            <div>
                loading....
            </div>
        );
    }

    const name = initName?.contents;

    return (
        <div className="border-b shadow lg:px-6">
            <div className="w-full p-3 flex justify-between">
                <div className="flex">
                    <div className="flex flex-col justify-center">
                    <Link to="/blogs">
                    <Logo />
                </Link>
                    </div>
                
                <div className="flex flex-col justify-center lg:pl-6 pl-1 pr-2">
                    {location.pathname === "/blogs" && <Searchbar />}   
                </div>
                </div>
                
                <div className="flex justify-center pt-2">
                    {location.pathname === "/blogs" && <CreateButton />}
                    {location.pathname === "/create" && <PublishButton />}
                    {location.pathname === "/blog" && <CreateButton />}
                    <div className="lg:px-4">
                        <LogoutButton />
                    </div>
                    <div>
                        <Avatar name={name} />
                    </div>
                </div>
            </div>
        </div>
    );
};