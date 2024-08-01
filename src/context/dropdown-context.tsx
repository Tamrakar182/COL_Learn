import useToggleState from "@/hooks/useToggleState"
import { createContext, useEffect, useState } from "react"

type DropdownContext = {
    state: boolean
    open: () => void
    timedOpen: () => void
    close: () => void

    coursesDropdown: boolean
    handleCourses: (value: boolean) => void

    tests: boolean
    handleTests: (value: boolean) => void
}

type Timer = ReturnType<typeof setTimeout>;

export const DropdownContext = createContext<DropdownContext | null>(
    null
)

export const DropdownProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const { state, close, open } = useToggleState()

    const [coursesDropdown, setCoursesDropdown] = useState(false)

    const [tests, setTests] = useState(false)

    const [activeTimer, setActiveTimer] = useState<Timer | undefined>(undefined)

    const timedOpen = () => {
        open()
        const timer = setTimeout(close, 5000)
        setActiveTimer(timer)
    }

    const openAndCancel = () => {
        if (activeTimer) {
            clearTimeout(activeTimer)
        }
        open()
    }

    const handleCourses = (value: boolean) => {
        setCoursesDropdown(value)
    }

    const handleTests = (value: boolean) => {
        setTests(value)
    }

    useEffect(() => {
        return () => {
            if (activeTimer) {
                clearTimeout(activeTimer)
            }
        }
    }, [activeTimer])

    return (
        <DropdownContext.Provider
            value={{
                state,
                close,
                open: openAndCancel,
                timedOpen,
                handleCourses,
                coursesDropdown,
                tests,
                handleTests
            }}
        >
            {children}
        </DropdownContext.Provider>
    )
}

