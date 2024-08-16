import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { TestDetailType } from "@/types/test"

interface Props {
    open: boolean
    toggle: () => void
    answers: (string | undefined)[]
    testDetails: TestDetailType
    handleSubmit: () => void
}

function ConfirmationDialog({ open, toggle, answers, testDetails, handleSubmit }: Props) {
    return (
        <Dialog open={open} onOpenChange={toggle}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>End Test Confirmation</DialogTitle>
                    <DialogDescription>
                        You have answered {answers.filter((answer) => answer !== undefined).length} out of {testDetails.questions.length} questions.
                        Are you sure you want to submit the test?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-end space-x-4">
                    <Button variant="ghost" onClick={toggle}>
                        Cancel
                    </Button>
                    <Button className="bg-red-600" onClick={handleSubmit}>
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmationDialog