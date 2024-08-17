import { useState } from "react";
import { filterResults } from "@/utils/mockFilter";
import { isObjectEmpty } from "@/utils";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import Container from "@/components/common/container"
import FilterForm from "../components/FilterForm";
import FilteredResults from "../components/FilteredResults";
import SortByFilter from "../components/SortByFilter";
import BrowseBanner from "../components/BrowseBanner"
import SearchBar from "../components/SearchBar";
import FilterBadges from "../components/FilteredBadge";

import FilterMobileMenu from "../components/FilterMobileMenu";

const BrowseSection = () => {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("popular");
    const [duration, setDuration] = useState(50);
    const [searchParams] = useSearchParams();

    const [selectedFilters, setSelectedFilters] = useState<{
        [key: string]: string[]
    }>({});

    const filteredResults = filterResults(selectedFilters, search);

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setSelectedFilters(prevFilters => ({
                ...prevFilters,
                category: [categoryParam]
            }));
        }
    }, [searchParams]);

    const handleSearch = (value: string) => {
        setSearch(value);
    }

    const handleSortBy = (value: string) => {
        setSortBy(value);
    }

    const handleFilterChange = (sectionId: string, optionValue: string) => {
        setSelectedFilters((prevState) => {
            if (sectionId === "order" || sectionId === "type") {
                return { ...prevState, [sectionId]: [optionValue] }
            } else {
                const prevSelectedOptions = prevState[sectionId] || []
                const isSelected = prevSelectedOptions.includes(optionValue)
                const newSelectedOptions = isSelected
                    ? prevSelectedOptions.filter((value) => value !== optionValue)
                    : [...prevSelectedOptions, optionValue]
                return { ...prevState, [sectionId]: newSelectedOptions }
            }
        })
    }

    const handleDurationChange = (value: number) => {
        setDuration(value);
    }

    const handleFilterClear = () => {
        setSelectedFilters({});
    }

    const handleRemoveFilter = (sectionId: string, optionValue: string) => {
        setSelectedFilters((prevState) => {
            const newFilters = { ...prevState };
            newFilters[sectionId] = newFilters[sectionId].filter(value => value !== optionValue);
            if (newFilters[sectionId].length === 0) {
                delete newFilters[sectionId];
            }
            return newFilters;
        });
    }

    return (
        <>
            <BrowseBanner />
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 min-h-screen">
                    <FilterForm
                        duration={duration}
                        handleDurationChange={handleDurationChange}
                        handleFilterChange={handleFilterChange}
                        selectedFilters={selectedFilters}
                        handleFilterClear={handleFilterClear}
                    />
                    <div className="col-span-2 py-8">
                        <SearchBar
                            handleSearch={handleSearch}
                            search={search}
                        />
                        <FilterBadges
                            selectedFilters={selectedFilters}
                            handleRemoveFilter={handleRemoveFilter}
                        />
                        <div className="flex flex-row items-center justify-between">
                            <FilterMobileMenu
                                selectedFilters={selectedFilters}
                                handleFilterClear={handleFilterClear}
                                handleFilterChange={handleFilterChange}
                                filteredResultsCount={filteredResults.length}
                            />
                            {!isObjectEmpty(selectedFilters) &&
                                <p
                                    onClick={() => handleFilterClear()}
                                    className="text-sm w-fit md:hidden text-blue-500 cursor-pointer underline-animation"
                                >
                                    Clear All
                                </p>
                            }
                        </div>

                        <div className="flex flex-row justify-between my-4 items-center">
                            {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
                            <SortByFilter
                                handleSelectChange={handleSortBy}
                                selected={sortBy}
                            />
                        </div>

                        <FilteredResults
                            filteredResults={filteredResults}
                        />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BrowseSection;