import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface CardPostProps {
    author: string | undefined;
    avatarUrl: string;
    category: string;
    date: string;
    title: string;
    url: string;
    slug: string;
}

const CardPost: React.FC<CardPostProps> = ({ author, avatarUrl, category, date, title, url, slug }) => {
    return (
        <Link href={`/post/${slug}`} className="w-full col-span-4">
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 w-full col-span-4">
                <Image src={`http://127.0.0.1:1337${url}`} alt={title} width={400} height={250} className="rounded-md" />
                <div className="mt-2">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-sm text-gray-500">{category} - {date}</p>
                    <div className="flex items-center mt-2">
                        <Avatar>
                            <AvatarImage src={avatarUrl} alt={author} />
                            <AvatarFallback>
                                {author ? author.charAt(0) : "?"}
                            </AvatarFallback>
                        </Avatar>
                        <span className="ml-2 text-sm">{author || "Unknown Author"}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardPost; 