import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context";
import { Button } from "@/components/ui/button";

function UserInfoCard() {
    const { user, logout } = useAuth();

    if (user === null) {
        return null;
    }

    return (
        <Card className="col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>User Info</CardTitle>
                <Button variant="outline" className="!mt-0">Edit</Button>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-2">
                <div className="flex sm:flex-row w-full flex-col items-center space-x-4">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src={user.avatar} alt="User avatar" />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-lg font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                </div>
                <Button variant="destructive" className="w-full" onClick={() => logout()}>Log Out</Button>
            </CardContent>
        </Card>
    )
}

export default UserInfoCard