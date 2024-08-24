import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { EditProfileForm } from "./EditForm"
import { useAuth } from "@/context"

export default function EditCard() {
    const { user } = useAuth();

    if (user === null) {
        return null;
    }

    return (
        <Card className="w-full max-w-md space-y-4 z-10">
            <CardHeader>
                <CardTitle className="text-center text-3xl font-bold tracking-tight text-foreground">Edit your Account Details</CardTitle>
                <CardDescription className="mt-2 text-center text-sm text-muted-foreground">
                    If you'd like to change your password, {" "}
                    <Link
                        to="/verify"
                        state={{
                            email: user.email
                        }}
                        className="font-medium text-primary underline-animation"
                    >
                        click here
                    </Link>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <EditProfileForm />
            </CardContent>
        </Card>
    )
}