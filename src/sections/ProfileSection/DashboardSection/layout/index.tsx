import Container from "@/components/common/container";
import { useAuth } from "@/context";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses, tests } from "@/mock/data";
import CourseCard from "../components/CourseCard";
import TestCard from "../components/TestCard";
import UserInfoCard from "../components/UserInfoCard";
import { Book, List, ClipboardList, Edit, LogOut } from "lucide-react";

export default function DashboardSection() {
    const { user, logout } = useAuth();
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

                    <Card className="col-span-2 lg:col-span-3 flex flex-col overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                            <CardTitle className="text-center">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-6 flex flex-col items-center justify-center rounded-b-lg">
                            <div className="w-full space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Course Actions</h3>
                                    <div className="flex flex-col flex-wrap sm:flex-row gap-2">
                                        <Button
                                            variant="outline"
                                            className="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-600 border-blue-200 transition-all duration-200 transform hover:scale-105"
                                        >
                                            <Book className="mr-2 h-4 w-4" /> Resume Last Course
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-600 border-blue-200 transition-all duration-200 transform hover:scale-105"
                                            onClick={() => navigate("/browse/courses")}
                                        >
                                            <List className="mr-2 h-4 w-4" /> View All Courses
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-600 border-blue-200 transition-all duration-200 transform hover:scale-105"
                                            onClick={() => navigate("/browse/tests")}
                                        >
                                            <ClipboardList className="mr-2 h-4 w-4" /> View All Tests
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">User Actions</h3>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <Button
                                            variant="outline"
                                            className="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-600 border-blue-200 transition-all duration-200 transform hover:scale-105"
                                            onClick={() => navigate("/dashboard/profile/edit")}
                                        >
                                            <Edit className="w-4 h-4 mr-2" /> Edit Profile
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
                                            onClick={() => logout()}
                                        >
                                            <LogOut className="w-4 h-4 mr-2" /> Log Out
                                        </Button>
                                    </div>
                                </div>
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
