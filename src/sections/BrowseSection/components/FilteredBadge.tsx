import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { isObjectEmpty } from "@/utils";

interface FilterBadgesProps {
    selectedFilters: {
        [key: string]: string[];
    };
    handleRemoveFilter: (sectionId: string, optionValue: string) => void;
}

const FilterBadges = ({ selectedFilters, handleRemoveFilter }: FilterBadgesProps) => {
    return (
        <div className={clsx("flex flex-wrap gap-2 mt-4", {
            "hidden": isObjectEmpty(selectedFilters)
        })}>
            {Object.entries(selectedFilters).map(([sectionId, values]) =>
                values.map((value) => (
                    <Badge key={`${sectionId}-${value}`} variant="secondary" className="px-2 capitalize py-1">
                        {`${sectionId}: ${value}`}
                        <X
                            className="ml-2 h-4 w-4 cursor-pointer"
                            onClick={() => handleRemoveFilter(sectionId, value)}
                        />
                    </Badge>
                ))
            )}
        </div>
    );
};

export default FilterBadges;