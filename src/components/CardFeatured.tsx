"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { BASE_URL } from "@/lib/utils";

interface Image {
    url: string;
}

interface Post {
    slug: string;
    title: string;
    content: string;
    category: string;
    author: string;
    createdAt: string;
    featured: boolean;
    image: Image[];
    avatar: {
        url: string;
    };
}


interface CardFeaturedProps {
    featuredPost: Post[]
}


export default function CardFeatured({ featuredPost }: CardFeaturedProps) {


    console.log("featuredPost card featured", featuredPost)
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="max-w-[1218px] mx-auto w-full"
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation
        >
            {
                featuredPost && featuredPost.map((post, index) => (
                    <SwiperSlide key={index}>
                        <div className={`bg-cover bg-center h-[450px] max-w-[1218px] w-full mx-auto rounded-xl flex flex-col justify-end gap-4 pl-10 pb-10`}
                            style={{ backgroundImage: `url("${BASE_URL}${post?.image[0].url}")` }}>

                            <span className="bg-[#4B6BFB] text-white px-2 py-1 rounded-lg max-w-fit">
                                {post?.category}
                            </span>
                            <h1 className="text-white font-semibold text-4xl max-w-[720px]">
                                {post?.title}
                            </h1>

                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/ManoelGomesDev.png" />
                                        <AvatarFallback>ML</AvatarFallback>
                                    </Avatar>
                                    <span className="text-white">{post?.author}</span>
                                </div>
                                <span className="text-white">{post?.createdAt}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                )
                )
            }

        </Swiper>
    )
}