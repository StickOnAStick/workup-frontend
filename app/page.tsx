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
      <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-3.5rem)] bg-neutral-900 scrollbar-hide">
        <div className="grid grid-cols-scroll-sidebars gap-3  h-[calc(100vh-6rem)] md:h-[calc(100vh-3.5rem)]">
          <div id="Friend List">This is the friends list zone</div>
          <div id="post list" className="flex flex-col gap-3 mx-24 my-3">
            <div className="flex justify-end">
              <button className="bg-white rounded-full p-1 font-medium">
              Create post
              </button>
            </div>
            { 
              data?.map( (post, key) => {
                {/* @ts-expect-error Server Component */} //remove if update fixed bug
                return <Post title={post.commentary} key={key} IMG_DATA={{COL_ID: post.collectionId, REC_ID: post.id, FILE_NAME: post.image}}/>
              })        
            }
          </div>
          <div id="chat list">Chat List </div>
        </div>
      </div>
  )
}
