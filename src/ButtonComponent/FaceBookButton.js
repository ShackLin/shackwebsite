// import React, { useState } from 'react'
// import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
// import { auth, provider } from '../FirsbaseAuth/firebaseFbConfig';
// import { useNavigate } from 'react-router-dom'
// import style from '../ModuleCSS/SignPartStyle.module.css'


// export default function FaceBookButton() {
//   const navigate = useNavigate()
//   const [user, setUser] = useState(null);
//   const [profilePicture, setProfilePicture] = useState(null);
//   const handleFacebookLogin = () => {
//     signInWithPopup(auth, provider).then((result) => {
//       console.log('User', result.user)
//       setUser(result.user);

//       const credential = FacebookAuthProvider.credentialFromResult(result);
//       const accessToken = credential.accessToken;
//       // fetch facebook graph api to get user actual profile picture
//       fetch(`https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`)
//         .then((response) => response.blob())
//         .then((blob) => {
//           setProfilePicture(URL.createObjectURL(blob));
//         })
//     }).catch((err) => {
//       console.log(err);
//     })
//   }

//   const handleLogout = () => {
//     navigate('/')
//     setUser(null);
//     console.log('Logout Successed')
//   }
//   const handleStartPage = () => {
//     navigate('/home')
//   }
//   return (

//     <div>

//       {user ? (
//         <div className={style.LogoutContainer}>
//           <div className={style.BtnContainer}>
//             <button className={style.LogOutBtn}
//               onClick={handleLogout}>
//               Logout
//             </button>
//             <button className={style.StartBtn}
//               onClick={handleStartPage}>
//               Start
//             </button>
//           </div>
//           <h5>Welcome {user.displayName}</h5>
//           {/* <p>{user.email}</p> */}
//           <div >
//             <img src={profilePicture} alt="dp" referrerPolicy='no-referrer' className={style.photo} />
//           </div>
//         </div>
//       ) : (
//         <>
//           <button className={style.FaceBookContainer} onClick={handleFacebookLogin}>
//             <span className={style.FaceBookIcon}></span>
//             <span className={style.FacebookPara}>Signup & Login </span>
//           </button>
//         </>
//       )}

//     </div>
//   )
// }



import React from 'react';
import { FacebookUserAuth } from '../ContextComponent/FaceBookSignUp';
import { useNavigate } from 'react-router-dom';
import style from '../ModuleCSS/SignPartStyle.module.css';

export default function FaceBookButton() {
  const { handleFacebookLogin, logOut, user, profilePicture } = FacebookUserAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    logOut();
  };

  const handleStartPage = () => {
    navigate('/home');
  };

  return (
    <div>
      {user ? (
        <div className={style.LogoutContainer}>
          <div className={style.BtnContainer}>
            <button className={style.LogOutBtn} onClick={handleLogout}>
              Logout
            </button>
            <button className={style.StartBtn} onClick={handleStartPage}>
              Start
            </button>
          </div>
          <h5>Welcome {user.displayName}</h5>
          <p>{user.email}</p>
          {profilePicture && (
            <div>
              <img src={profilePicture} alt="dp" referrerPolicy='no-referrer' className={style.photo} />
            </div>
          )}
        </div>
      ) : (
        <button className={style.FaceBookContainer} onClick={handleFacebookLogin}>
          <span className={style.FaceBookIcon}></span>
          <span className={style.FacebookPara}>Signup & Login</span>
        </button>
      )}
    </div>
  );
}