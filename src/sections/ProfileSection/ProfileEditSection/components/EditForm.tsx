import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useAuth } from "@/context"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const FILE_SIZE = 5 * 1024 * 1024
const FILE_EXTENSIONS = ["image/jpeg", "image/png", "image/webp", "image/jpg"]

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Please enter a valid Name.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    avatar: z
        .union([
            z.string().url().optional(),
            z.instanceof(File).optional()
        ])
        .refine((file) => typeof file === "string" || !file || file.size <= FILE_SIZE, {
            message: "File size should be less than 5MB",
        })
        .refine((file) => typeof file === "string" || !file || FILE_EXTENSIONS.includes(file?.type), {
            message: "Only JPEG/PNG/JPG/WEBP files are allowed",
        }),
})

export function EditProfileForm() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [avatarPreview, setAvatarPreview] = useState(user?.avatar || "");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user?.name || "",
            email: user?.email || "",
            avatar: user?.avatar || "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        navigate("/dashboard");
    }

    function handleAvatarChange(file: File) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatarPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src={avatarPreview || user?.avatar} alt="User avatar" />
                        <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <FormField
                        control={form.control}
                        name="avatar"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Avatar</FormLabel>
                                <FormControl>
                                    <Input
                                        id="avatar"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                handleAvatarChange(file);
                                                field.onChange(file);
                                            }
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    placeholder="Full Name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Email Address"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">Edit</Button>
            </form>
        </Form >
    )
}
