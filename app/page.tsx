import Post from "../components/main/Post/Post";

async function getPostList() {
  const postListResponse = await fetch('http://127.0.0.1:8090/api/collections/posts/records');
  const postListData = await postListResponse.json();
  console.log(postListData)
  return postListData?.items as any[]
}

export default async function page() {
  const data = await getPostList();
  
  return (
      <div className="text-white gap-2 flex flex-col flex-grow justify-center align-center h-[calc(100vh-6rem)] md:h-[calc(100vh-3.5rem)] bg-neutral-900 scrollbar-hide">
        { 
          data?.map( (post, key) => {
            {/* @ts-expect-error Server Component */}
            return <Post title={post.commentary} key={key} IMG_DATA={{COL_ID: post.collectionId, REC_ID: post.id, FILE_NAME: post.field}}/>
          })        
        }
      </div>
  )
}
