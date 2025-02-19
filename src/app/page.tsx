import CardPost from "@/components/CardPost";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";


// const postsData = [
//     {
//         slug: "impacto-tecnologia",
//         title: "O Impacto da Tecnologia no Local de Trabalho",
//         content: "A tecnologia está mudando a forma como trabalhamos.",
//         category: "Tecnologia",
//         author: "Manoel Gomes",
//         date: "2022-08-20",
//         image: [
//             { url: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
//         ],
//         avatar: {
//             formats: {
//                 thumbnail: {
//                     url: "https://github.com/ManoelGomesDev.png"
//                 }
//             }
//         }
//     },
//     {
//         slug: "futuro-do-trabalho",
//         title: "O Futuro do Trabalho: Tendências e Desafios",
//         content: "O futuro do trabalho está se moldando com novas tendências.",
//         category: "Carreira",
//         author: "Maria Silva",
//         date: "2022-09-15",
//         image: [
//             { url: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
//         ],
//         avatar: {
//             formats: {
//                 thumbnail: {
//                     url: "https://github.com/MariaSilva.png"
//                 }
//             }
//         }
//     },
//     {
//         slug: "tecnologia-e-educacao",
//         title: "Como a Tecnologia Está Transformando a Educação",
//         content: "A tecnologia está revolucionando o setor educacional.",
//         category: "Educação",
//         author: "João Pereira",
//         date: "2022-10-05",
//         image: [
//             { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
//         ],
//         avatar: {
//             formats: {
//                 thumbnail: {
//                     url: "https://github.com/JoaoPereira.png"
//                 }
//             }
//         }
//     }
// ];

interface Post {
    slug: string;
    title: string;
    content: string;
    category: string;
    author: string;
    createdAt: string;
    featured: boolean;
    image: Image [];
    avatar: {
        url: string;
    };
}

async function fetchPosts(): Promise<Post[]> {
    const url = "http://127.0.0.1:1337/api/"
    const response = await fetch(`${url}posts?populate=*`)
    if(!response.ok) {
        throw new Error("Failed to fetch posts")
    }
    const data = await response.json()
    return data.data || [];
}



interface Image {
    url: string;
}





export default async function Home() {
    const posts = await fetchPosts()
    const featuredPost = posts.find(post => post.featured === true)
    if(!featuredPost) {
        return <div>No featured post found</div>
    }

    return (
        <div className="col-span-12 gap-8 flex flex-col">
            <div className={`bg-cover bg-center h-[450px] max-w-[1218px] w-full mx-auto rounded-xl flex flex-col justify-end gap-4 pl-10 pb-10`} 
            style={{backgroundImage: `url("http://127.0.0.1:1337${featuredPost?.image[0].url}")`}}>
            
                <span className="bg-[#4B6BFB] text-white px-2 py-1 rounded-lg max-w-fit">
                    Technology
                </span>
                <h1 className="text-white font-semibold text-4xl max-w-[720px]">
                    {featuredPost?.title}
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
                            avatarUrl={post.avatar ? post.avatar.url : ""} 
                            category={post.category} 
                            date={post.createdAt} 
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


