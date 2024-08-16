import IconCloud from "@/components/icon-cloud";
import BoxReveal from "@/components/box-reveal";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export default function IconCloudSection() {
    return (
        <div className="flex flex-col-reverse gap-4 md:flex-row justify-between items-center">
            <div className="md:max-w-[50%] space-y-4">
                <BoxReveal boxColor={"#3b82f6"} duration={1}>
                    <p className="text-3xl font-bold">Learn the skills useful everywhere</p>
                </BoxReveal>
                <BoxReveal boxColor={"#3b82f6"} duration={1}>
                    <p className="text-lg text-gray-600">
                        Equip yourself with the essential skills to thrive in the tech industry. From
                        mastering popular programming languages to understanding the latest tools,
                        our platform covers everything you need to succeed.
                    </p>
                </BoxReveal>
                <BoxReveal boxColor={"#3b82f6"} duration={1}>
                    <p className="hidden md:block text-base text-gray-500">
                        Whether you're a beginner or an experienced developer, our comprehensive
                        courses and resources are designed to help you stay ahead in a rapidly evolving
                        field. Join thousands of learners and become proficient in the technologies
                        that power modern software development.
                    </p>
                </BoxReveal>
            </div>
            <BoxReveal boxColor={"#3b82f6"} duration={1}>
                <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-4 pb-4 xl:px-20 xl:pb-20 pt-8 ">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </BoxReveal>
        </div>
    );
}
