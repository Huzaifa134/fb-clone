import React, { useEffect, useState } from "react";
import "./feed.style.css";
import Storyreel from "../storyreel/Storyreel.component";
import MessageSender from "../../MessageSender/MessageSender.component";
import Post from "../post/Post.component";
import { db } from "../state/firestore";
import { collection, orderBy, query,onSnapshot } from "firebase/firestore";
// import { formatTimestamp } from "../state/firestore";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const collection_ =collection(db,"posts");
  const query_ = query(collection_,orderBy("timestamp","desc"));
  // useEffect(()=>{
  //   getDocs(query_).then((snapshot)=>{
  //     setPosts(snapshot.docs.map(doc=>({
  //       id:doc.id,
  //       data:doc.data()
  //     })
  //     ))
  //   })
  // },[])
  useEffect(() => {
    const unsubscribe = onSnapshot(query_, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  
  console.log(posts)
  return (
    <div className="feed">
      <Storyreel />
      <MessageSender />
     {
        posts.map(post=>{
          
          return(

          <Post
          photoUrl={post.data.photoUrl}
          image={post.data.image}
          username={post.data.username}
          timestamp={post.data.timestamp}
        message={post.data.message}
      />
      )
        })
      }

    </div>
  );
};

export default Feed;
