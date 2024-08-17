import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
    SheetFooter,
} from "@/components/ui/sheet";
import { TiFilter } from "react-icons/ti";
import { Input } from "@/components/ui/input";
import { filters } from "@/config-global";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";

interface Props {
    selectedFilters: {
        [key: string]: string[];
    };
    handleFilterChange: (sectionId: string, optionValue: string) => void;
    handleFilterClear: () => void;
    filteredResultsCount: number;
}

const FilterMobileMenu = ({
    selectedFilters,
    handleFilterChange,
    handleFilterClear,
    filteredResultsCount,
}: Props) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const currentSection = filters.find((section) => section.id === activeSection);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="p-2 cursor-pointer border items-center rounded-md md:hidden text-sm text w-fit my-2 flex flex-row gap-2">
                    <TiFilter className="w-6 h-6" />
                    Filters
                </div>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-2" showCloseButton={false}>
                <SheetHeader className="space-y-0 p-2 flex flex-row items-center justify-between">
                    <SheetTitle className="text-lg font-semibold">
                        {activeSection ? (
                            <div className="flex flex-row items-center capitalize">
                                <ChevronLeft className="mr-2 cursor-pointer" onClick={() => setActiveSection(null)} />
                                {activeSection}
                            </div>
                        ) : (
                            "Search filters"
                        )}
                    </SheetTitle>
                    <SheetClose className="flex items-center m-0">
                        <X className="h-6 w-6" />
                    </SheetClose>
                </SheetHeader>
                <div className="flex-1 flex flex-col overflow-y-auto">
                    {!activeSection || !currentSection ? (
                        <div className="flex-1 overflow-auto">
                            {filters.map((section) => (
                                <div
                                    key={section.id}
                                    className="flex justify-between items-center px-4 py-3 border-b cursor-pointer"
                                    onClick={() => setActiveSection(section.id)}
                                >
                                    <span>{section.name}</span>
                                    <ChevronRight className="h-4 w-4" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="overflow-y-auto flex-1">
                            <Input
                                placeholder={`Find a ${activeSection.toLowerCase()}`}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="m-4 mt-0"
                            />
                            {currentSection.id === "type" ? (
                                <RadioGroup
                                    onValueChange={(value) => handleFilterChange("type", value)}
                                    value={selectedFilters[currentSection.id]?.[0] || ''}
                                >
                                    {currentSection.options
                                        .filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
                                        .map(option => (
                                            <div key={option.value} className="flex px-4 py-2 items-center space-x-2">
                                                <RadioGroupItem value={option.value} id={`${currentSection.id}-${option.value}`} />
                                                <Label htmlFor={`${currentSection.id}-${option.value}`}>{option.label}</Label>
                                            </div>
                                        ))}
                                </RadioGroup>
                            ) : (
                                currentSection.options
                                    .filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
                                    .map(option => (
                                        <div key={option.value} className="flex items-center px-4 py-2">
                                            <Checkbox
                                                id={`${activeSection}-${option.value}`}
                                                checked={selectedFilters[activeSection]?.includes(option.value)}
                                                onChange={() => handleFilterChange(activeSection, option.value)}
                                                className="mr-2"
                                            />
                                            <Label
                                                htmlFor={`${activeSection}-${option.value}`}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {option.label}
                                            </Label>
                                        </div>
                                    ))
                            )}
                        </div>
                    )}
                </div>
                <SheetFooter className="bg-white">
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" onClick={handleFilterClear}>Clear all</Button>
                        <SheetClose asChild>
                            <Button>View results ({filteredResultsCount})</Button>
                        </SheetClose>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default FilterMobileMenu;
