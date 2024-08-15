export interface ModuleType {
    id: string;
    name: string;
    time: string;
    description: string;
    units: UnitType[];
    completed: boolean;
}

export interface UnitType {
    id: string;
    title: string;
    time: string;
}