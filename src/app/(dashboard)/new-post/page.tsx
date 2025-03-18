import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import FormNewPost from "../_components/FormNewPost";
import ButtonDelete from "../_components/ButtonDelete";
import ButtonEdit from "../_components/ButtonEdit";
import { BASE_URL } from "@/lib/utils";

interface Post {
    id: string
    title: string
    author: string
    content: {
        type: string
        children: {
            type: string
            text: string
        }[]
    }[]
    documentId: string
    createdAt: string
}

async function fetchPosts(): Promise<Post[]> {
    try {
        const url = BASE_URL
        const response = await fetch(`${url}posts`, {
            cache: 'no-store'
        })
        if (!response.ok) {
            throw new Error("Failed to fetch posts")
        }
        const data = await response.json()
        return data.data || []
    } catch (error) {
        console.error("Error fetching posts:", error)
        return []
    }
}

export default async function NewPost() {

    const posts = await fetchPosts()

    console.log(posts)

    return (
        <div className="col-span-12 space-y-4">
            <div className="col-span-12 flex justify-end">
                <Dialog >
                    <DialogTrigger asChild>
                        <Button>
                            Novo Post
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Novo Post</DialogTitle>
                            <DialogContent>
                                <FormNewPost />
                            </DialogContent>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>


            <Card className="col-span-12 w-full">
                <CardContent>
                    <Table >
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    Titulo
                                </TableHead>
                                <TableHead>
                                    Autor
                                </TableHead>
                                <TableHead>
                                    Data de criação
                                </TableHead>
                                <TableHead>
                                    Ações
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                posts.map((post) => (
                                    <TableRow key={post.id}>
                                        <TableCell>
                                            {post.title}
                                        </TableCell>
                                        <TableCell>
                                            {post.author}
                                        </TableCell>
                                        <TableCell>
                                            {post.createdAt}
                                        </TableCell>
                                        <TableCell className="flex gap-2">
                                            <ButtonEdit id={post.documentId} title={post.title} content={post.content} />
                                            <ButtonDelete title={post.title} id={post.documentId} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
