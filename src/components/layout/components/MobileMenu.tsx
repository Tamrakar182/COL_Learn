import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const navItems = {
    Home: "/",
    Browse: "/browse",
    Tests: "/browse/tests",
    Courses: "/browse/courses",
    Account: "/sign-in",
};

export function MobileMenu() {
    const navigate = useNavigate();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div>
                    <IoMenu className="md:hidden w-8 h-8 cursor-pointer" />
                </div>
            </SheetTrigger>
            <SheetContent className="w-screen md:w-screen sm:max-w-screen">
                <SheetHeader>
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                        This is mobile menu
                    </SheetDescription>
                </SheetHeader>
                <ul className="flex flex-col gap-8 w-full h-full items-center justify-center">
                    {Object.entries(navItems).map(([key, value]) => (
                        <SheetClose asChild key={key}>
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    navigate(value);
                                }}
                                className="w-full text-2xl font-bold"
                            >
                                {key}
                            </Button>
                        </SheetClose>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    )
}
