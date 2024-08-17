import { TestDetailType } from "@/types/test"
import Container from "@/components/common/container"
import { NavigateBreadcrumbs } from "@/components/navigate-breadcrumbs";
import { Button } from '@/components/ui/button';
import TestBanner from "../components/TestBanner";
import { Badge } from "@/components/ui/badge";
import parse from 'html-react-parser';
import { useNavigate } from "react-router-dom";

interface Props {
    testDetail: TestDetailType
}

const TestDetailSection = ({ testDetail }: Props) => {
    const navigate = useNavigate();

    const links = [
        { href: "/", label: "Home" },
        { href: "/browse", label: "Browse" },
        { href: "/browse/tests", label: "Tests" },
        { label: testDetail.name },
    ]

    const handleCategoryClick = (categoryName: string) => {
        navigate(`/browse?category=${encodeURIComponent(categoryName)}`);
    };

    return (
        <>
            <Container>
                <NavigateBreadcrumbs items={links} />
                <div className="rounded-lg flex flex-col pt-4 gap-10">
                    <TestBanner test={testDetail} />

                    <div className='flex flex-wrap gap-2'>
                        <span className="text-xl font-bold whitespace-nowrap">Category:</span>
                        <div className="flex flex-wrap gap-2">
                            {testDetail.categories.map((item) => (
                                <Badge
                                    onClick={() => handleCategoryClick(item.name)}
                                    key={item.id} className='bg-[#3b82f6] text-sm cursor-pointer items-center justify-center'
                                >
                                    {item.name}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* description */}
                    <div className="flex md:flex-row flex-col justify-between gap-8">
                        <div className="renderedHTML md:max-w-[60%]">
                            {parse(testDetail.description)}
                        </div>

                        <div className="p-4 border rounded shadow-sm h-fit flex flex-col items-center">
                            <h2 className="font-bold mb-4">Some things to keep in mind:</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li className="font-lg">
                                    This is a <span className="font-bold">FREE</span> online test.
                                </li>
                                <li className="font-semibold">Total number of questions: <span className="text-xl">{testDetail.questions.length}</span>.</li>
                                <li className="font-semibold">Time allotted: <span className="text-xl">{testDetail.duration}</span></li>
                                <li>Each question carries 1 mark; there are no negative marks.</li>
                                <li>DO NOT refresh the page.</li>
                                <li>All the best!</li>
                            </ul>

                            <Button
                                onClick={() => navigate(`/browse/tests/${testDetail.id}/start`)}
                                className="md:flex bg-[#3b82f6] hover:bg-[#3b83f672] hidden text-xl rounded-none my-8"
                            >
                                Take the Test
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <Button
                onClick={() => navigate(`/browse/tests/${testDetail.id}/start`)}
                className="md:hidden bg-[#3b82f6] hover:bg-[#3b83f672] text-3xl rounded-none py-8 w-full fixed bottom-0"
            >
                Start Test
            </Button>
        </>
    )
}

export default TestDetailSection;