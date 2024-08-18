import { TestDetailType } from "@/types/test"
import Container from "@/components/common/container"
import { NavigateBreadcrumbs } from "@/components/navigate-breadcrumbs";
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import parse from 'html-react-parser';
import { useNavigate } from "react-router-dom";

import SomeNotes from "../components/SomeNotes";
import TestBanner from "../components/TestBanner";
import RelatedTests from "../components/RelatedTests";

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

                        <SomeNotes testDetail={testDetail} />
                    </div>

                    <RelatedTests />
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