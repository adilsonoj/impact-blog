import CardPost from "@/components/CardPost";
import CardFeatured from "@/components/CardFeatured";
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
    data: {
        slug: string;
        title: string;
        content: string;
        category: string;
        author: string;
        createdAt: string;
        featured: boolean;
        image: Image[];
        url: string;
        date: string;
        avatar: {
            url: string;
        };
    }
}

async function fetchPosts(): Promise<Post[]> {
    try {
        console.log("fetchPosts", process.env.NEXT_PUBLIC_API_URL)
        const url = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(`${url}posts`, {
            cache: 'no-store'
        })
        if (!response.ok) {
            throw new Error("Failed to fetch posts")
        }
        const data = await response.json()
        return data || []
    } catch (error) {
        console.error("Error fetching posts:", error)
        return []
    }
}

interface Image {
    url: string;
}

export default async function Home() {
    const posts = await fetchPosts()
    // const featuredPost = posts.filter(post => post.data.featured === true)
    if (posts.length == 0) {
        return <div>No featured post found</div>
    }

    console.log("posts", posts)


    return (
        <div className="col-span-12 gap-8 flex flex-col">

            {/* <CardFeatured featuredPost={posts.data} /> */}

            <div className="col-span-12 grid grid-cols-12 gap-4 ">
                {
                    posts.map((post, index) => (
                        <CardPost
                            key={index}
                            author={post.data.author}
                            avatarUrl={post.data.avatar ? post.data.avatar.url : ""}
                            category={post.data.category}
                            date={post.data.date?.split("T")[0].split("-").reverse().join("/")}
                            title={post.data.title}
                            url={post.data.url ?? ""}
                            slug={post.data.slug}
                        />
                    ))
                }
            </div>
        </div>
    );
}


