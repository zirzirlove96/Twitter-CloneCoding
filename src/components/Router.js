import React, {useState} from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    //Hooks
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    /*return (
        <Router>
            <Switch>  Switch는 한번에 하나의 Route만 볼 수 있게 한다. 
                {isLoggedIn ? (
                    <> /**특정한 html 요소를 쓰기 싫을때 사용 
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    </>
                ) : (
                    <>
                    <Route exact path="/">
                        <Auth/>
                    </Route>
                    </>
                )
                }
            </Switch>
        </Router>
    );*/
    
    //react-router-dom 6이상일 경우 
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <Route path="/" element={<Home/>}/>
                ) : (
                    <Route path="/" element={<Auth/>}/>
                )}
            </Routes>
        </Router>
    )
}

export default AppRouter;