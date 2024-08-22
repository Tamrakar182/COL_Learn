import { DropdownProvider } from "@/context/dropdown-context"
import { ReactNode } from "react"
import { Toaster } from "../ui/toaster"
import { AuthProvider } from "@/context/auth-context"

interface Props {
    children: ReactNode
}

export default function Providers({ children }: Props) {
    return (
        <>
            <AuthProvider>
                <DropdownProvider>
                    {children}
                </DropdownProvider>
            </AuthProvider>
            <Toaster />
        </>
    )
}
