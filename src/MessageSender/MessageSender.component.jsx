import { React, useState } from "react";
import "./MessageSender.style.css";
import { Avatar, IconButton, Modal } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useStateValue } from "../components/state/StateProvider";
import {  addDoc, collection ,serverTimestamp } from "firebase/firestore";
import { db } from "../components/state/firestore";
import { getStorage, ref,  getDownloadURL ,uploadBytesResumable} from "firebase/storage";

const MessageSender = () => {
  const collection_ =collection(db,"posts");
  // const query_ = query(collection_,orderBy("timestamp","desc"));
  const [open, setOpen] = useState(false);
  const [image , setImage] = useState("");
  const [message , setMessage] = useState("");
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [{user}] = useStateValue();
  const [progress , setprogress] = useState(0)
  const storage = getStorage(); // Get the storage instance


  const uploadFileWithClick=()=>{
    document.getElementById("imageFile").click();


  }
  const textMessageHandler=(e)=>{
    e.preventDefault();
    setMessage(e.target.value);

  }
  const handleChange =(e)=>{
    if(e.target.files[0]){
      setImage(e.target.files[0]);
    }

  }
  const handleUpload = (e)=>{
    const timestamp = serverTimestamp();

    e.preventDefault();
    if(image===""){
      addDoc(collection_,{
        timestamp:timestamp,
        message:message,
        username:user.displayName,
        photoUrl:user.photoURL,
      })
      handleClose();
      setMessage("");

    }
    // else{
    //   const uploadTask = storage.ref(`image/${image}`).put(image);
    //   uploadTask.on(
    //     "state_change",
    //     (snapshot)=>{

    //       const progress = Math.round((snapshot.bytesTransferred/ snapshot.totalBytes)*100);
    //       setprogress(progress);
    //     },
    //     (error)=>{
    //       console.log(error)
    //       alert(error.message)
    //     },
    //     ()=>{
    //       storage.ref("images").child(image.name).getDownloadURL().then(url=>{
    //         addDoc(collection_,{
    //           timestamp:timestamp,
    //           message:message,
    //           username:user.displayName,
    //           photoUrl:user.photoURL,
    //           image:url
    //         })
    //       })
    //     }
    //   )

    // }
    else {
      const storageRef = ref(storage, `image/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
    
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setprogress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        async () => {
          const url = await getDownloadURL(storageRef);
          addDoc(collection_, {
            timestamp: timestamp,
            message: message,
            username: user.displayName,
            photoUrl: user.photoURL,
            image: url,
          });
          handleClose();
          setMessage("");
          setImage("");
          setprogress(0);
        }
      );
    }
   
    
  }
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal__pop">
          <form>
            <div className="modalHeading">
              <h3>Create Post</h3>
              <IconButton onClick={handleClose}>
                <CloseIcon  />
              </IconButton>
            </div>
            <div className="modalHeader__top">
              <Avatar src={user.photoURL}/>
              <h5>{user.displayName}</h5>
            </div>
            <div className="modalBody">
              <textarea rows="5" placeholder="What's on your mind ?"  onChange={textMessageHandler}></textarea>
            </div>
            <div className="modalFooter">
              <div className="modalFooterLeft">
              <h4>Add to your post</h4>
              </div>
              <div className="modalFooterRight">
              <IconButton onClick={uploadFileWithClick}>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png?_nc_eui2=AeGJP8MDVy_22sl4phsTQW58fK5Z1qDG7FV8rlnWoMbsVTTnFNU_c8ip6ARv9J2a5HrbLx9cV8rzP4J5Mqm5NCrV" alt="gallary" height={30} width={30}/>
              
              </IconButton>
              <input type="file" id="imageFile"  onChange={handleChange} style={{display:"none"}}/>
              <IconButton>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/MqTJr_DM3Jg.png?_nc_eui2=AeFarrTfLT3uH3xZdLzbxYTjt8fz8ZW9Ebm3x_Pxlb0RuRFBsI3eYelW7sB3PASkblJ-0-ETDJs32-YOsi4M7h1V" alt="profile" />
              </IconButton>
              <IconButton>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png?_nc_eui2=AeHcuDZvSTy0bar4mtLYfEnmv2_PAiqLvPK_b88CKou88iZe9blGKjZv2tGHUo59wP9kmzCecSHauNJgQKHokkQX" alt="smile" />
              </IconButton>
              <IconButton>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png?_nc_eui2=AeH4vrKHwl_xbF6V6vTlEaZ2zQ4v13Ks4CbNDi_XcqzgJnGI7dQoK5-sKPrGn2NJrtEypBow45wmGRdlIY33D_ZG" alt="location" />
              </IconButton> 
              <IconButton>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/CenxFlWjtJO.png?_nc_eui2=AeE1WL_8ZcqdhHvuarbLMltHz4XXObU63WDPhdc5tTrdYGuzoHyFojeUC5jXiXlXFYQRjSwoplj6Gf7SD-uBXqmH" alt="flag" />
              </IconButton>
              <IconButton>
              <MoreHorizIcon/>
              </IconButton>

              
              </div>
            </div>
            {image!=="" && <h2 style={{"fontSize":"15px","marginBottom":"20px","color":"green"}}>Image is added and will be displayed after clicking on post button</h2>}
            {
              progress!== 0 &&  <progress value={progress} max={100} style={{"width":"100%","marginBottom":"20px"}}/>
              
            }
            <input type="submit" value="Post" onClick={handleUpload} className="post__submit" />
          </form>
        </div>
      </Modal>
      <div className="messagesender">
        <div className="messagesender__top">
          <Avatar src={user.photoURL} />
          <form>
            <input
              type="text"
              className="messagesender__input"
              placeholder={`What's on your mind?`}
              onClick={handleOpen}
            />
          </form>
        </div>
        <div className="messagesender__bottom">
          <div className="messangerOptions">
            <VideoCallIcon style={{ color: "red" }} fontSize="large" />
            <h3>Live Video</h3>
          </div>

          <div className="messangerOptions">
            <PhotoLibraryIcon style={{ color: "green" }} fontSize="large" />
            <h3>Photo/Video</h3>
          </div>

          <div className="messangerOptions">
            <EmojiEmotionsIcon style={{ color: "orange" }} fontSize="large" />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSender;
