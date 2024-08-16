import Container from "@/components/common/container"
import { Background } from "@/assets"

const BrowseBanner = () => {
    return (
        <div className="w-full bg-[#3b82f6] p-4">
            <Container>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="my-4 md:my-0">
                        <h1 className="text-3xl font-bold text-white">Browse all courses, modules, and tests</h1>
                        <p className="text-lg text-white">Learn new skills with step-by-step guidance. Start your journey today by exploring our tests and courses.</p>
                    </div>
                    <img
                        src={Background.browseIllustration}
                        className="h-56 w-56 md:block hidden"
                    />
                </div>
            </Container>
        </div>
    )
}

export default BrowseBanner