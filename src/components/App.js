import Router from "components/Router";
import React , {useEffect, useState} from "react";
import {authService} from "firebase_config";
import {getAuth, onAuthStateChanged} from "firebase/auth";

function App() {
  //useState는 App.js에서 사용
  //props로 전달
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //authService.currentUser => 유저가 로그인 했는지에 대한 확인하는 firebase 메서드

  //초기화
  const [init, setInit] = useState(false);

  const [userObj, setUserObj] = useState(null);

  //상태의 변화를 알아내기 위해 사용!
  useEffect(()=> {
    const auth = getAuth();
    //firebase의 함수로 로그인 상태값을 알려준다.
    onAuthStateChanged(auth,(user)=>
    {
      if(user)
      {
        setIsLoggedIn(true);
        setUserObj(user);
      }else
      {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  
  return (
    <>
    {init ? <Router isLoggedIn={isLoggedIn} userObj = {userObj}/> : "Initializing..."}
    <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
