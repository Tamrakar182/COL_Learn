import { ReactNode, ButtonHTMLAttributes } from "react"
import clsx from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
}

function Button({ children, className, ...props }: Props) {
    return (
        <button className={clsx("p-4 hover:bg-black border rounded hover:text-white", className)} {...props}>
            {children}
        </button>
    )
}

export default Button