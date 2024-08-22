import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { ForgotForm } from "./ForgotForm"

export default function ForgotCard() {
    return (
        <Card className="w-full max-w-md space-y-4 z-10">
            <CardHeader>
                <CardTitle className="text-center text-3xl font-bold tracking-tight text-foreground">Forgot Your Password?</CardTitle>
                <CardDescription className="mt-2 text-center text-sm text-muted-foreground">
                    Or{" "}
                    <Link to="/sign-in" className="font-medium text-primary underline-animation">
                        Sign in to your existing account
                    </Link>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ForgotForm />
            </CardContent>
        </Card>
    )
}