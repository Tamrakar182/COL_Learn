import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

function Button({ children }: Props) {
    return (
        <button className="p-4">
            {children}
        </button>
    )
}

export default Button