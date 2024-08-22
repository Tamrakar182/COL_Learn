import { useContext } from "react"
import { DropdownContext } from "./dropdown-context"
import { AuthContext } from "./auth-context"

export const useDropdown = () => {
    const context = useContext(DropdownContext)

    if (context === null) {
        throw new Error(
            "useDropdown must be used within a DropdownProvider"
        )
    }

    return context
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === null) {
        throw new Error(
            "useAuth must be used within a AuthProvider"
        )
    }

    return context
}