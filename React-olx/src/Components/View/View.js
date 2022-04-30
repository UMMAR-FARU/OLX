import React,{useState,useContext,useEffect} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDitails} = useContext(PostContext)
  const {Firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    console.log(postDitails);
    const {userId} = postDitails
    Firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
      })
    })
  },[])
  return (
    <div className="viewParentDiv">
     {postDitails && <div className="imageShowDiv">
        <img
          src={postDitails.url}
          alt=""
        />
      </div>}
      <div className="rightSection">
      {postDitails &&<div className="productDetails">
          <p>&#x20B9; {postDitails.price} </p>
          <span>YAMAHA R15V3</span>
          <p>{postDitails.category}</p>
          <span>{postDitails.createdA}</span>
        </div>}
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.usernmae}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
