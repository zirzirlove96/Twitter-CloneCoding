import { async } from "@firebase/util";
import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; //최신버전

const Auth = () => {
    // useState의 email은 변수값, setEmail은 seTter로 input에 입력된 값을 저장한다.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true); //계정확인
    const [error, setError] = useState(""); //에러메세지

    //onChange 이벤트가 있어야 변경이 가능함
    const onChange = (event) => {
        console.log(event.target.name);
        const {target : {name,value}} = event;  //event에서 target의 이름과 값을 가져오는 방식
        if(name === "email")
        {
            setEmail(value);
        }
        else if(name === "password") 
        {
            setPassword(value);
        }
    }

    //authService는 promise 동작을 하므로 async, await 사용
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const auth = getAuth();
            let data;
            if(newAccount) {
                // create Account
                data = await createUserWithEmailAndPassword(auth, email, password);
            }else
            {
                //Log in
                data = await signInWithEmailAndPassword(auth, email, password);
            }
            console.log(data);
        }catch(error)
        {
            console.log(error.message);
            setError(error.message);
        }

    }

    //값의 반대되는 값 리턴
    //만든 이유 로그인과 회원가입을 왔다 갔다 하는 버튼 역할
    const toggleAccount = () => setNewAccount((prev) => !prev); 

    return (<span>
        <form onSubmit={onSubmit}>
            <input type="email" name="email" placeholder="email" required value={email} onChange={onChange}/>
            <input type="password" name="password" placeholder="password" required value={password} onChange={onChange}/>
            <input type="submit" value={newAccount ? "Create Account" : "Log in"}/>
        </form>
        <span onClick={toggleAccount}>
            {newAccount ? "Sign in" : "Create Account"}
        </span>
        {error}
        <div>
            <button>Continue with Google</button>
        </div>
    </span>);
};
export default Auth;
//export default () => <span>AUth</span>
//function component