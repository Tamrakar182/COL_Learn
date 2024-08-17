import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Props {
    search: string
    handleSearch: (value: string) => void
}

const SearchBar = ({ search, handleSearch }: Props) => {
    return (
        <div className="flex flex-row gap-4">
            <Input
                className="w-full" containerStyle="flex-1"
                placeholder="Search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <Button className="flex flex-row gap-2">
                <FaSearch />
                <span className="hidden md:inline">
                    Search
                </span>
            </Button>
        </div>
    )
}

export default SearchBar