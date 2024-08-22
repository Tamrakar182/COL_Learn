import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { VerifyForm } from "./VerifyForm"

export default function VerifyCard({ email }: { email: string }) {
    return (
        <Card className="w-full max-w-md space-y-4 z-10">
            <CardHeader>
                <CardTitle className="text-center text-3xl font-bold tracking-tight text-foreground">Verify your identity</CardTitle>
                <CardDescription className="mt-2 text-center text-sm text-muted-foreground">
                    An OTP has been sent to <strong>{email}</strong>. Please enter the OTP to reset your password.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <VerifyForm />
            </CardContent>
        </Card>
    )
}