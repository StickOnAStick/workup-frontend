import Post from "../components/main/Post/Post"

export default function Home() {
  return (
      <div className="text-white flex flex-grow h-[calc(100vh-6rem)] md:h-[calc(100vh-3.5rem)] bg-neutral-800 scrollbar-hide">
        <Post/>
      </div>
  )
}
