import Container from "@/components/common/container"
import BrowseBanner from "../components/BrowseBanner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TiFilter } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import SortByFilter from "../components/SortByFilter";

const BrowseSection = () => {
    const [sortBy, setSortBy] = useState("popular");
    const [search, setSearch] = useState("");

    const handleSortByChange = (value: string) => {
        setSortBy(value);
    }

    const handleSearch = (value: string) => {
        setSearch(value);
    }

    return (
        <>
            <BrowseBanner />
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 min-h-screen">
                    <div className="col-span-1 hidden md:flex">
                        Filter
                    </div>
                    <div className="col-span-2 py-8">
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
                        <div className="p-2 border items-center rounded-md md:hidden text-sm text w-fit my-2 flex flex-row gap-2">
                            <TiFilter className="w-6 h-6" />
                            Filters
                        </div>

                        <div className="flex flex-row justify-between my-4 items-center">
                            100 result
                            <div className="flex flex-row items-center gap-2">
                                Sort By:
                                <SortByFilter
                                    handleSelectChange={handleSortByChange}
                                    selected={sortBy}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-col-2 grid-col-1">

                        </div>


                    </div>
                </div>
            </Container>
        </>
    )
}

export default BrowseSection