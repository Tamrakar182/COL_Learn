import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context";
import { User, Mail } from "lucide-react";

function UserInfoCard() {
    const { user } = useAuth();

    if (user === null) {
        return null;
    }

    return (
        <Card className="col-span-2 lg:col-span-1 flex flex-col h-full">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="text-center">User Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between items-center bg-gradient-to-r rounded-b-lg from-purple-100 to-pink-100 p-4">
                <div className="flex flex-col items-center gap-4">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2 w-full">
                        <div className="flex items-center">
                            <User className="mr-2 h-4 w-4 text-gray-500 flex-shrink-0" />
                            <span className="font-semibold truncate">{user.name}</span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="mr-2 h-4 w-4 text-gray-500 flex-shrink-0" />
                            <span className="truncate">{user.email}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default UserInfoCard;