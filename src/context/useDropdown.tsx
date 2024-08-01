import { useContext } from "react"
import { DropdownContext } from "./dropdown-context"

const useDropdown = () => {
    const context = useContext(DropdownContext)

    if (context === null) {
        throw new Error(
            "useDropdown must be used within a DropdownProvider"
        )
    }

    return context
}

export default useDropdown;