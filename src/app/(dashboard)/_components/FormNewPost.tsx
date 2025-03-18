"use client"
import { Button } from "@/components/ui/button";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/lib/utils";
import { useForm } from "react-hook-form";


interface Text {
    type: string;
    text: string;
}

interface Content {
    type: string;
    children: Text[];
}
interface PostData {
    title: string;
    author: string;
    url: string;
    slug: string;
    category: string;
    content: Content[];
}


export default function FormNewPost() {


    const form = useForm<PostData>()

    const onSubmit = async (data: PostData) => {
        const formattedData = {
            data: {
                title: data.title,
                content: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: data.content[0]?.children[0]?.text || ""
                            }
                        ]
                    }
                ],
                author: data.author,
                slug: data.slug,
                category: data.category,
                url: data.url,
                date: new Date().toISOString()
            }
        }

        try {
            const response = await fetch(`${BASE_URL}posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formattedData)
            })
            if (!response.ok) {
                throw new Error("Failed to create post")
            }
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-full max-w-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormItem>
                        <FormLabel>Titulo</FormLabel>
                        <FormControl>
                            <Input {...form.register("title")} />
                        </FormControl>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Autor</FormLabel>
                        <FormControl>
                            <Input {...form.register("author")} />
                        </FormControl>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Url Capa</FormLabel>
                        <FormControl>
                            <Input {...form.register("url")} />
                        </FormControl>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                            <Input {...form.register("slug")} />
                        </FormControl>

                    </FormItem>
                    <FormItem>
                        <FormLabel>Categoria</FormLabel>
                        <FormControl>
                            <Input {...form.register("category")} />
                        </FormControl>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Conteúdo</FormLabel>
                        <FormControl>
                            <Input {...form.register("content.0.children.0.text")} />
                        </FormControl>
                    </FormItem>
                    <Button type="submit">Criar</Button>
                </form>
            </Form>
        </div>
    )
}