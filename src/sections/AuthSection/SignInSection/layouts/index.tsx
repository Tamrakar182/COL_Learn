import { Mock } from "@/assets";
import SignInCard from "../components/SignInCard";

const SignInSection = () => {
    return (
        <div className="min-h-screen relative flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <img
                src={Mock.mock1}
                className="absolute z-0 inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <SignInCard />
        </div>
    )
}


export default SignInSection;