import Post from "../components/main/Post/Post";
import ChatList from "../components/main/chatList/ChatList";
import CreatePost from "../components/buttons/CreatePost";
import PocketBase from 'pocketbase';

async function getPostList() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const fetchPostRecords = await pb.collection('posts').getList(undefined, 10, {
    sort: '-created',
  });
 
  return fetchPostRecords.items;
}

export default async function Page() {
  const data = await getPostList();
  
  return (
      <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-3.5rem)] bg-neutral-900 scrollbar-hide">
        <div className="grid grid-cols-1 sm:grid-cols-scroll-sidebars gap-3  h-[calc(100vh-6rem)] md:h-[calc(100vh-3.5rem)]">
          <div id="Friend List" className="hidden sm:block text-white">This is the friends list zone</div>
          
          <div id="post list" className="flex flex-col gap-3 sm:mx-24 my-3">
            <div className="flex justify-end">
              <CreatePost/>
            </div>
            { 
              data?.map( (post, key) => {
                {/* @ts-expect-error Server Component */} //remove if NEXT13 BETA update fixed bug
                return <Post 
                      title={post.comentary} 
                      key={key} 
                      IMG_DATA={{COL_ID: post.collectionId, REC_ID: post.id, FILE_NAME: post.image}}
                />
              })        
            }
          </div>
          
          <ChatList/>
        </div>
      </div>
  )
}
