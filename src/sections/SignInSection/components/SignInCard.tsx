import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function SignInCard() {
    return (
        <Card className="mx-auto w-full max-w-sm z-10">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>Enter your email and password to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="•••••••••" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <p className="text-center">Don't have an account? {" "}
                        <Link className="underline-animation" to="/register">
                            Register Here
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}