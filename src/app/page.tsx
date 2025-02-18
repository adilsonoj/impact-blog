import CardPost from "@/components/CardPost";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Image {
    url: string;
}

interface Post {
    slug: string;
    title: string;
    content: string;
    category: string;
    author: string;
    date: string;
    image: Image [];
    avatar: string;
}

async function fetchPosts(): Promise<Post[]> {
    const res = await fetch('http://127.0.0.1:1337/api/posts?populate=*');
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    const data = await res.json();
    console.log(data);
    
    // Assuming the posts are in data.posts, adjust this line based on your API response structure
    return data.data || []; // Return an empty array if posts are not found
}

export default async function Home() {
    const posts = await fetchPosts(); // Fetch posts data

    return (
        <div className="col-span-12 gap-8 flex flex-col">
            <div className="bg-[url('https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[450px] max-w-[1218px] w-full mx-auto rounded-xl flex flex-col justify-end gap-4 pl-10 pb-10">
                <span className="bg-[#4B6BFB] text-white px-2 py-1 rounded-lg max-w-fit">
                    Technology
                </span>
                <h1 className="text-white font-semibold text-4xl max-w-[720px]">
                    The Impact of Technology on the Workplace: How Technology is Changing
                </h1>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2"> 
                        <Avatar>
                            <AvatarImage src="https://github.com/ManoelGomesDev.png" />
                            <AvatarFallback>ML</AvatarFallback>
                        </Avatar>
                        <span className="text-white">Manoel Gomes</span>
                    </div>
                    <span className="text-white">August 20, 2022</span>
                </div>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-4 ">
                {
                    posts.map((post, index) => (
                        <CardPost 
                            key={index} 
                            author={post.author} 
                            avatarUrl={post.avatar} 
                            category={post.category} 
                            date={post.date} 
                            title={post.title} 
                            url={post.image[0].url} 
                            slug={post.slug} 
                        />
                    ))
                }
            </div>
        </div>
    );
}


