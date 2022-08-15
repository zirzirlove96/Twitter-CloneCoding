import * as firebase from "firebase/app";


//react-app을 만든 사람들이 환경설정의 변수를 REACT_APP 으로 시작하게끔 설정하였기 때문에
//REACT_APP 으로 시작하지 않으면 설정이 적용되지 않을 수 있다.
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.ent.REACT_APP_AUTH_DOMAIN,
    projectId: process.ent.REACT_APP_PROJECT_ID,
    storageBucket: process.ent.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.ent.REACT_APP_MESSAGIN_ID,
    appId: process.ent.REACT_APP_APP_ID
  };

export default firebase.initializeApp(firebaseConfig);