import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";


interface CardPostProps {
    slug: string;
    title: string;
    url: string;
    category: string;
    avatarUrl: string;
    author: string;
    date: string;
}

const CardPost = ({
    slug,
    author,
    avatarUrl,
    category,
    title,
    url,
    date
}: CardPostProps) => {
    return ( 
        <Link href={`/post/${slug}`} className="col-span-4">
        <Card className="p-4" >
            <CardHeader className="h-[234px] w-full relative overflow-hidden ">

                <Image src={url} alt="" fill={true} style={{objectFit:"cover"}} />
            </CardHeader>
            <CardContent className="mt-4 space-y-4">
                <span className="max-w-fit rounded-lg p-2 bg-[#4B6BFB40] text-[#4B6BFB]">{category}</span>
                <h1 className="text-2xl font-bold">{title}</h1>

            </CardContent>
            <CardFooter className="flex  items-center gap-4">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={avatarUrl}></AvatarImage>
                        <AvatarFallback>ML</AvatarFallback>
                    
                    </Avatar>
                    <span className="text-gray-400">{author}</span>
                </div>
                <span className="text-gray-400">{date}</span>
            </CardFooter>
        </Card>
        </Link>

     );
}
 
export default CardPost;