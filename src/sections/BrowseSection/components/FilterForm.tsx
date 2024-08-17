import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { filters } from "@/config-global";
import { isObjectEmpty } from "@/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

interface Props {
    selectedFilters: {
        [key: string]: string[];
    };
    handleFilterChange: (sectionId: string, optionValue: string) => void;
    duration: number;
    handleDurationChange: (value: number) => void;
    handleFilterClear: () => void;
}

const FilterForm = ({ duration, handleDurationChange, handleFilterChange, selectedFilters, handleFilterClear }: Props) => (
    <div className="col-span-1 flex-col gap-2 hidden md:flex py-8">
        <p className="font-bold text-2xl">Filter</p>
        {!isObjectEmpty(selectedFilters) &&
            <div
                onClick={() => handleFilterClear()}
                className="text-sm w-fit hidden md:block text-blue-500 cursor-pointer underline-animation"
            >
                Clear All
            </div>
        }
        <form className="space-y-6">
            {filters.map((section) => (
                <div key={section.id} className="space-y-2">
                    <h3 className="font-semibold text-lg">{section.name}</h3>
                    {section.id === 'type' ? (
                        <RadioGroup
                            onValueChange={(value) => handleFilterChange(section.id, value)}
                            value={selectedFilters[section.id]?.[0] || ''}
                        >
                            {section.options.map((option) => (
                                <div key={option.value} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option.value} id={`${section.id}-${option.value}`} />
                                    <Label htmlFor={`${section.id}-${option.value}`}>{option.label}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    ) : (
                        <div className="space-y-1">
                            {section.options.map((option) => (
                                <div key={option.value} className="flex items-center">
                                    <Checkbox
                                        id={`${section.id}-${option.value}`}
                                        checked={selectedFilters[section.id]?.includes(option.value)}
                                        onCheckedChange={() => handleFilterChange(section.id, option.value)}
                                        className="mr-2"
                                    />
                                    <Label
                                        htmlFor={`${section.id}-${option.value}`}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {option.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg">Duration</h3>
                <div className="flex flex-row gap-2 items-center">
                    <div className="flex-1 gap-2">
                        <Slider
                            max={100}
                            value={[duration]}
                            onValueChange={(value) => handleDurationChange(value[0])}
                            step={1}
                            className="flex-1"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>0 mins</span>
                            <span>100 mins</span>
                        </div>
                    </div>
                    <Input
                        type="number"
                        className="w-12"
                        value={duration}
                        onChange={(e) => handleDurationChange(Number(e.target.value))}
                    />
                </div>
            </div>
        </form>
    </div>
);

export default FilterForm;