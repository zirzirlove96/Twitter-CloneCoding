import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

function Router ({isLoggedIn}) {
    //Hooks
    //const [isLoggedIn, setIsLoggedIn] = useState(false);

    //react-router-dom이 6 이하일 경우 
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
        <>
        <BrowserRouter>
            <Routes>
                {isLoggedIn ? (
                    <Route path="/" element={<Home/>}/>
                ) : (
                    <Route path="/" element={<Auth/>}/>
                )}
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;