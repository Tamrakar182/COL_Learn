import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { TestDetailType } from "@/types/test";

interface Props {
    testDetail: TestDetailType
}

const SomeNotes = ({ testDetail }: Props) => {
    const navigate = useNavigate();
    return (
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
    )
}

export default SomeNotes