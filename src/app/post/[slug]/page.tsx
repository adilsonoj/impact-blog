"use client"; // Mark this component as a client component

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Image {
    url: string;
}

interface Content {
    text: string; // Adjust this based on the actual structure
}


interface Post {
    slug: string;
    title: string;
    content: Content[]; // Change this to an array of Content objects
    category: string;
    author: string;
    date: string;
    image: Image[];
    avatar: {
        formats: {
            thumbnail: {
                url: string;
            };
        };
    };
}

const PostDetail = () => {
    const { slug } = useParams(); // Get the slug from the URL parameters
    const [post, setPost] = useState<Post | null>(null); // State to hold post data
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState<string | null>(null); // State to manage errors

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`http://127.0.0.1:1337/api/posts?populate=*`); // Fetch all posts
                if (!res.ok) {
                    throw new Error('Falha ao buscar os posts');
                }
                const data = await res.json();
                console.log(data); // Check the structure of the data

                // Find the post that matches the slug
                const foundPost = data.data.find((item: Post) => item.slug === slug);
                if (foundPost) {
                    setPost(foundPost); // Set the found post
                } else {
                    setError('Post não encontrado'); // Handle case where post is not found
                }
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message); // Set error message if err is an instance of Error
                } else {
                    setError('Ocorreu um erro desconhecido'); // Fallback for unknown errors
                }
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        if (slug) {
            fetchPosts(); // Call the function to fetch posts
        }
    }, [slug]);

    if (loading) {
        return <div>Carregando...</div>; // Show loading state
    }

    if (error) {
        return <div>Erro: {error}</div>; // Show error message
    }

    if (!post) {
        return <div>Post não encontrado</div>; // Handle case where post is not found
    }

    return (
        <div className="max-w-4xl mx-auto p-4 col-span-12 w-full">
            <div className="relative">
                <div className='w-full h-64'>
                    <Image src={`http://127.0.0.1:1337${post.image[0].url}`} alt={post.title} fill className="object-cover rounded-md" />
                </div>

            </div>
            <div className=" bottom-4 left-4 bg-white bg-opacity-75 p-2 rounded">
                <div className="flex items-center">
                    {post.avatar && post.avatar.formats ? (
                        <Avatar>
                            <AvatarImage src={`http://127.0.0.1:1337${post.avatar.formats.thumbnail.url}`} />
                            <AvatarFallback>{post.author ? post.author.charAt(0) : ''}</AvatarFallback>
                        </Avatar>

                    ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-300" />
                    )}
                    <span className="ml-2 text-sm font-semibold">{post.author}</span>
                </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{post.category}</p>
            <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
            <div className="mt-4">
                <p>{post.content.length > 0 ? post.content[0].text : 'Conteúdo não disponível'}</p>
            </div>
        </div>
    );
};

export default PostDetail;
