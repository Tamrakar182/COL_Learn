import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Props {
    handleSelectChange: (value: string) => void;
    selected: string;
}

export default function SortByFilter({ handleSelectChange, selected }: Props) {
    return (
        <Select onValueChange={handleSelectChange} defaultValue={selected}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="earliest">Earliest</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}