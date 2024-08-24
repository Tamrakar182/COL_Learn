import {
    DropdownMenuItem,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ModuleType } from '@/types/module';

interface Props {
    courseId: string;
    moduleId: string;
    unitId: string;
    module: ModuleType;
}

function UnitDropDown({ courseId, moduleId, unitId, module }: Props) {
    const navigate = useNavigate();

    const getUnitOptions = () => {
        return module?.units.map((u) => (
            <DropdownMenuItem
                key={u.id}
                onClick={() => navigate(`/browse/courses/${courseId}/module/${moduleId}/unit/${u.id}`)}
            >
                {u.title}
            </DropdownMenuItem>
        )) || [];
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-xl rounded-none py-4">
                    Unit {module.units.findIndex((u) => u.id === unitId) + 1} out of {module.units.length}
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {getUnitOptions()}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UnitDropDown