import { dummyMockTestDetail } from "@/mock/data";
import TestDetailSection from "@/sections/TestSection/TestDetailSection/layout";

export default function TestDetailPage() {
    return <TestDetailSection testDetail={dummyMockTestDetail} />
}