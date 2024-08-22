import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ResetForm } from "./ResetForm"

export default function ResetCard() {
    return (
        <Card className="w-full max-w-md space-y-4 z-10">
            <CardHeader>
                <CardTitle className="text-center text-3xl font-bold tracking-tight text-foreground">Choose a new Password</CardTitle>
                <CardDescription className="mt-2 text-center text-sm text-muted-foreground">
                    Enter your new password below.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ResetForm />
            </CardContent>
        </Card>
    )
}