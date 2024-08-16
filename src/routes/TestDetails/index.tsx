import { dummyMockTestDetail } from "@/mock/data";
import TestDetailSection from "@/sections/TestDetailSection/layout";

export default function TestDetailPage() {
    return <TestDetailSection testDetail={dummyMockTestDetail} />
}