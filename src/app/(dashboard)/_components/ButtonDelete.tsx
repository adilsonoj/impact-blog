"use client"

import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { useRouter } from "next/navigation"
interface ButtonDeleteProps {
    title: string
    id: string
}


export default function ButtonDelete({ title, id }: ButtonDeleteProps) {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)
    
    const handleDelete = async () => {
        const response = await fetch(`http://localhost:1337/api/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (response.ok) {
            setIsOpen(false)
            router.refresh()
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="destructive" >
                    <Trash />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Deletar post</DialogTitle>
                    <DialogDescription>
                        Tem certeza que deseja deletar o post <strong>{title}</strong>?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOpen(false)}>Cancelar</Button>
                    <Button variant="destructive" onClick={() => handleDelete()}>Deletar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}