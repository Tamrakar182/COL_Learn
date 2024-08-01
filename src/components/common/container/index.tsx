import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const Container = ({ children }: Props) => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 rounded-lg">
            {children}
        </div>
    );
}

export default Container;
