import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseHistory } from '@/types/course';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface Props {
    course: CourseHistory;
}

function CourseCard({ course }: Props) {
    return (
        <Card key={course.id} className="h-full flex flex-col items-center justify-between">
            <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
                <div>
                    <p className="font-medium">Next Module: {course.nextModule}</p>
                    <p className="text-sm text-muted-foreground">Last Module: {course.lastModule}</p>
                </div>
                <div className="flex flex-col mt-4 space-y-4">
                    <div className="flex items-center gap-2">
                        <Progress value={course.progress} className="flex-grow" />
                        <span className="text-sm">{course.progress}%</span>
                    </div>
                    <Button className="w-full" variant="outline">Continue</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CourseCard