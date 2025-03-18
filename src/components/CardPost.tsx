import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BASE_URL } from "@/lib/utils";

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
                <div className="relative w-full h-48">

                    <Image src={url} alt={title} fill className="rounded-md" style={{ objectFit: 'cover' }} />
                </div>
                <div className="mt-2">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-sm text-gray-500">{category} - {date}</p>
                    <div className="flex items-center mt-2">
                        <Avatar>
                            <AvatarImage src={`${BASE_URL}${avatarUrl}`} alt={author} />
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