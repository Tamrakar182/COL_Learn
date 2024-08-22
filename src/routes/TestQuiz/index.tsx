import { dummyMockTestDetail } from "@/mock/data";
import TestQuizSection from "@/sections/TestSection/TestQuizSection/layout";

export default function TestQuizPage() {
    return <TestQuizSection testDetails={dummyMockTestDetail} />
}