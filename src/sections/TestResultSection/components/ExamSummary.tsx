import { Button } from '@/components/ui/button'
import { formatISOToCustomDate } from "@/utils/time";
import { formatDuration } from '@/utils/time';
import { QUESTION_WEIGHT, NEGATIVE_MARKS } from '@/config-global';
import { dummyMockTestDetail } from '@/mock/data';

type Props = {
    submitTimeStamp: string;
    score: number;
    handleRetakeExam: () => void;
    handleViewSolutions: () => void;
    examDuration: number;
}

function ExamSummary({
    submitTimeStamp,
    score,
    handleRetakeExam,
    handleViewSolutions,
    examDuration
}: Props) {
    const totalMarks = dummyMockTestDetail.questions.length * QUESTION_WEIGHT;
    const unattemptedMarks = totalMarks - score * QUESTION_WEIGHT;
    const negativeMarks = NEGATIVE_MARKS * (dummyMockTestDetail.questions.length - score);

    return (
        <div className="p-6 border rounded-lg">
            <h1 className="text-2xl font-bold">Exam Summary</h1>
            <p className="text-gray-500">Summary of the test submitted on {formatISOToCustomDate(submitTimeStamp)}</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="flex justify-center items-center mb-2">
                        <span className="text-4xl font-bold">{(score * 1.4).toFixed(1)}</span>
                        <span className="text-sm text-gray-500">/ {totalMarks.toFixed(1)}</span>
                    </div>
                    <p className="text-green-600 font-semibold">Marks obtained</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="flex justify-center items-center mb-2">
                        <span className="text-4xl font-bold">{unattemptedMarks.toFixed(1)}</span>
                        <span className="text-sm text-gray-500">/ {totalMarks.toFixed(1)}</span>
                    </div>
                    <p className="text-blue-600 font-semibold">Unattempted Marks</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg text-center">
                    <div className="flex justify-center items-center mb-2">
                        <span className="text-4xl font-bold">{negativeMarks.toFixed(1)}</span>
                        <span className="text-sm text-gray-500">/ {totalMarks.toFixed(1)}</span>
                    </div>
                    <p className="text-red-600 font-semibold">Negative Marks</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                    <div className="flex justify-center items-center mb-2">
                        <span className="text-4xl font-bold">{(score * 1.4).toFixed(1)}</span>
                        <span className="text-sm text-gray-500">/ {totalMarks.toFixed(1)}</span>
                    </div>
                    <p className="text-indigo-600 font-semibold">Total Marks Obtained</p>
                </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
                <Button
                    variant="outline" className="text-gray-700 py-2 px-4 rounded-md shadow"
                    onClick={handleRetakeExam}
                >
                    Retake Exam
                </Button>
                <Button
                    className="bg-blue-600 text-white py-2 px-4 rounded-md shadow"
                    onClick={handleViewSolutions}
                >
                    View Solutions
                </Button>
            </div>

            <p className="text-right text-sm text-gray-500 mt-4">Exam Duration: {formatDuration(examDuration)}</p>
        </div>
    )
}

export default ExamSummary