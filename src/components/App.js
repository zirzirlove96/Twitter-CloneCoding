import Router from "components/Router";
import React , {useState} from "react";
import {authService} from "firebase_config";

function App() {
  //useState는 App.js에서 사용
  //props로 전달
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  //authService.currentUser => 유저가 로그인 했는지에 대한 확인하는 firebase 메서드
  return (
    <>
    <Router isLoggedIn={isLoggedIn}/>
    <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
