import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestHistory } from "@/types/test";
import { Button } from "@/components/ui/button";

interface Props {
    test: TestHistory;
}

function TestCard({ test }: Props) {
    return (
        <Card key={test.id} className="h-full flex flex-col items-center justify-between">
            <CardHeader>
                <CardTitle className="text-lg">{test.title}</CardTitle>
                <p className="text-sm text-muted-foreground">Date: {test.date}</p>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
                <div>
                    <p className="font-medium">Score obtained: {test.score}%</p>
                    <p className="text-sm text-muted-foreground">Total Questions: {test.totalQuestions}</p>
                    <p className="text-sm text-muted-foreground">Test Duration: {test.duration}</p>
                </div>
                <Button className="mt-4 w-full" variant="outline">Retake Test</Button>
            </CardContent>
        </Card>
    )
}

export default TestCard