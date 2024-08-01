import { DropdownProvider } from "@/context/dropdown-context"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function Providers({ children }: Props) {
    return (
        <DropdownProvider>
            {children}
        </DropdownProvider>
    )
}
