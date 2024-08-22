import { Button } from "@/components/ui/button";

interface Props {
    activeQuestion: number;
    handleQuestionSelect: (questionIndex: number) => void;
    questionsLength: number;
}

const NavigationButtons = ({ activeQuestion, handleQuestionSelect, questionsLength }: Props) => (
    <div className="flex flex-row justify-between mt-4">
        <Button
            disabled={activeQuestion === 0}
            onClick={() => handleQuestionSelect(Math.max(activeQuestion - 1, 0))}
        >
            Prev
        </Button>
        <Button
            disabled={activeQuestion === questionsLength - 1}
            onClick={() => handleQuestionSelect(Math.min(activeQuestion + 1, questionsLength - 1))}
        >
            Next
        </Button>
    </div>
);

export default NavigationButtons;