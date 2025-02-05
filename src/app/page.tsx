import CardPost from "@/components/CardPost";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const posts = [
  {
    slug: "post-1",
    title: "The Impact of Technology on the Workplace",
    content: "Explore how technology is reshaping the workplace.",
    category: "Technology",
    author: "Manoel Lucio",
    date: "August 20, 2022",
    image: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://github.com/ManoelGomesDev.png",
  },
  {
    slug: "post-2",
    title: "The Future of AI in Medicine",
    content: "AI is revolutionizing medical diagnosis and treatment.",
    category: "Health",
    author: "Maria Silva",
    date: "August 21, 2022",
    image: "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?q=80&w=2858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "",
  },
  {
    slug: "post-3",
    title: "Top 10 Programming Languages in 2025",
    content: "A comprehensive guide to the most popular programming languages.",
    category: "Programming",
    author: "João Pedro",
    date: "August 22, 2022",
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "",
  },
];

export default function Home() {
  return (
    <div className="col-span-12 gap-8 flex flex-col">
      <div className="bg-[url('https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[450px] max-w-[1218px] w-full mx-auto rounded-xl flex flex-col justify-end gap-4 pl-10 pb-10">
        <span className="bg-[#4B6BFB] text-white px-2 py-1 rounded-lg max-w-fit">
          Technology
        </span>
        <h1 className="text-white font-semibold text-4xl max-w-[720px]">
          The Impact ohf Technology on the Workplace: How Technology is Changing
        </h1>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2"> 
          <Avatar>
            <AvatarImage src="https://github.com/ManoelGomesDev.png"  />
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
            <CardPost author={post.author} avatarUrl={post.avatar} category={post.category} date={post.date} title={post.title} url={post.image} key={index} slug={post.slug} />
          ))
        }
      

   
        
         
      </div>
    </div>
  );
}
