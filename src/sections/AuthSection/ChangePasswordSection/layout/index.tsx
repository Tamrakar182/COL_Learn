import { Background } from "@/assets"
import ResetCard from "../components/ResetCard"

export default function ForgotSection() {
    return (
        <div className="flex relative min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <img
                src={Background.bgRegister}
                className="absolute z-0 inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <ResetCard />
        </div>
    )
}