//import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


//react-app을 만든 사람들이 환경설정의 변수를 REACT_APP 으로 시작하게끔 설정하였기 때문에
//REACT_APP 으로 시작하지 않으면 설정이 적용되지 않을 수 있다.
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

//export default firebase.initializeApp(firebaseConfig);
//initializeApp는 firebase 프로젝트를 만들어주고, export를 통해 서비스를 제공해 준다. 순서 중요!
const firebase = initializeApp(firebaseConfig);
export const authService = getAuth(firebase);
