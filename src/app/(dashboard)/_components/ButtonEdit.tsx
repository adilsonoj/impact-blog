"use client"
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ButtonEditProps {
    id: string
    title: string
    content: {
        type: string
        children: {     
            type: string
            text: string
        }[]
    }[]
}

interface FormData {
    data: {
        title: string
        content: {
            type: string
            children: {
                type: string
                text: string
            }[]
        }[]
    }
}

export default function ButtonEdit({ id, title, content }: ButtonEditProps) {

    const router = useRouter()  

    const [isOpen, setIsOpen] = useState(false)

    const initialText = content[0].children[0].text


    const form = useForm({
        defaultValues: {
            data: {
                title: title || "", // Alterado de "Name" para "title"
                content: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: initialText,
                            },
                        ],
                    },
                ],
            },
        }
    })

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch(`http://localhost:1337/api/posts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            if (!response.ok) {
                throw new Error("Failed to update post")
            }
            const updatedPost = await response.json()
            console.log(updatedPost)
            setIsOpen(false)
            router.refresh()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="default" >
                    <Pencil />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar post</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormItem>
                                <FormLabel>Título</FormLabel>
                                <FormControl>
                                    <Input {...form.register("data.title")} />
                                </FormControl>
                            </FormItem>
                            <FormItem>
                                <FormLabel>Conteúdo</FormLabel>
                                <FormControl>
                                    <Input {...form.register("data.content.0.children.0.text")} />
                                </FormControl>
                            </FormItem>
                            <div className="flex gap-2">
                                <Button type="button" variant="outline" onClick={() => form.reset()}>Cancelar</Button>
                                <Button type="submit">Salvar</Button>
                            </div>

        
                        </form>
                    
                    </Form>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}