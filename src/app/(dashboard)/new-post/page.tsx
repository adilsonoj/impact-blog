
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import FormNewPost from "../_components/FormNewPost";


interface Post {
    id: string
    title: string
    author: string
    createdAt: string
}


async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("http://127.0.0.1:1337/api/posts")
    const data = await response.json()
    if (!response.ok) {
        throw new Error("Failed to fetch posts")
    }
    return data.data || []
}






export default async function NewPost() {

    const posts = await fetchPosts()

   

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
