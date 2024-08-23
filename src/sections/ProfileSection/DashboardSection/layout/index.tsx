import Container from "@/components/common/container";
import { useAuth } from "@/context";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses, tests } from "@/mock/data";
import CourseCard from "../components/CourseCard";
import TestCard from "../components/TestCard";
import UserInfoCard from "../components/UserInfoCard";

export default function DashboardSection() {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (user === null) {
        navigate("/login");
        return null;
    }

    return (
        <Container>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <UserInfoCard />

                    <Card className="col-span-2 lg:col-span-3">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Completed Module 3 in Course 1</li>
                                <li>Scored 85% on Practice Test 2</li>
                            </ul>
                            <CardTitle className="py-4">Quick Actions</CardTitle>
                            <div className="flex flex-wrap gap-4">
                                <Button>Resume Last Course</Button>
                                <Button onClick={() => navigate("/browse")}>View All Courses</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Courses Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {courses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Tests History</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full gap-4">
                        {tests.map(test => (
                            <TestCard key={test.id} test={test} />
                        ))}
                    </CardContent>
                </Card>

            </div>
        </Container>
    )
}
