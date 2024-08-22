import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { SignInForm } from "./SignInForm"

export default function SignInCard() {
    return (
        <Card className="mx-auto w-full max-w-sm z-10">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>Enter your email and password to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <SignInForm />
                <p className="text-center pt-4">Don't have an account? {" "}
                    <Link className="underline-animation" to="/register">
                        Register Here
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}