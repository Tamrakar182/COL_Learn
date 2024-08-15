import BoxReveal from "@/components/box-reveal";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <div className="w-full h-full flex flex-col-reverse md:flex-row gap-4 justify-center items-center">
            <div className="h-full w-full flex flex-col max-w-[32rem] items-start justify-center overflow-hidden pt-8">
                <BoxReveal boxColor={"#5046e6"} duration={1}>
                    <p className="text-4xl md:text-7xl font-semibold">
                        COL <span className="text-[#5046e6]">Learn</span>
                    </p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={1}>
                    <h2 className="mt-[.5rem] text-xl">
                        Make your learning Journey{" "}
                        <span className="text-[#5046e6]">a reality</span>
                    </h2>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={1}>
                    <div className="mt-[1.5rem]">
                        <p className="text-xl">
                            &#9733; Learn Skills that can be used anywhere in the world
                            . <br />
                            &#9733; 100% free<br />
                        </p>
                    </div>
                </BoxReveal>

                <BoxReveal className="w-full self-center" width="100%" boxColor={"#5046e6"} duration={1}>
                    <Button className="mt-[1.6rem] w-full text-center p-4 text-white  bg-[#5046e6]">
                        Get Started
                    </Button>
                </BoxReveal>
            </div>

            <div>
                <BoxReveal boxColor={"#5046e6"} duration={1}>
                    <img src="/mock/hero_illus.svg" className="max-w-md md:max-w-xl" />
                </BoxReveal>
            </div>
        </div>
    );
}
