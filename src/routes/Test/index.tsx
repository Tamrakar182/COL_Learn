import TestSection from "@/sections/TestSection/layout"
import { dummyMockTestDetail } from "@/mock/data";

export default function TestPage() {
    return <TestSection testDetails={dummyMockTestDetail} />
}