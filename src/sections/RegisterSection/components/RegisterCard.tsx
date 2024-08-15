import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function RegisterCard() {
    return (
        <Card className="w-full max-w-md space-y-4 z-10">
            <CardHeader>
                <CardTitle className="text-center text-3xl font-bold tracking-tight text-foreground">Create a new account</CardTitle>
                <CardDescription className="mt-2 text-center text-sm text-muted-foreground">
                    Or{" "}
                    <Link to="/sign-in" className="font-medium text-primary underline-animation">
                        Sign in to your existing account
                    </Link>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" action="#" method="POST">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email-address">
                                Email address
                            </Label>
                            <Input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="Email address"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Sign up
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}