import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/context";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AccountPopover = () => {
    const { user, logout } = useAuth();

    if (user === null) {
        return null;
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" className="w-12 hidden md:flex h-12 rounded-full">
                    <Avatar>
                        <AvatarImage src={user.avatar} alt="User avatar" />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-0">
                <ul className="flex flex-col">
                    <Link to="/dashboard">
                        <li className="w-full cursor-pointer hover:bg-gray-300 p-3">
                            Dashboard
                        </li>
                    </Link>
                    <div onClick={() => logout()}>
                        <li className="w-full cursor-pointer hover:bg-gray-300 p-3">
                            Sign Out
                        </li>
                    </div>
                </ul>
            </PopoverContent>
        </Popover>
    )
}

export default AccountPopover;