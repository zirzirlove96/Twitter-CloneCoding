import React, {useState} from "react";
import {collection, addDoc, getDocs, query, onSnapshot} from "firebase/firestore";
import { dbService } from "firebase_config";
//import { async } from "@firebase/util";
import { useEffect } from "react";
import Nweet from "components/Nweet";

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    
    // snapshot으로 데이터를 불러온다.
    /*const getNweets = async () => {
        const getData = await getDocs(collection(dbService, "nweet"));
        //getData.forEach((document) => console.log(document.data()));
        //setter는 함수를 전달할 수 있다.
        //prev(이전값)을 전달할 수 있으며, 배열로 전달 가능
        getData.forEach((document) => {
            const nweetObject = {
                ...document.data(), //데이터를 풀어내는 es6문법
                id : document.id, 
            }
            // *set에 불러온 데이터를 저장하고 nweets를 통해 노출
            setNweets((prev) => [nweetObject, ...prev]);
        });
    }*/
    
    //마운트 (처음 화면이 나타날때만 수행)
    //useEffect를 통해 리렌더링을 제어한다. (한번만 함수가 실행)
    useEffect(() => {
        //getNweets();
        //snapshot을 사용하여 데이터를 모두 가져온다.
        //장점은 리렌더링을 줄일 수 있고, foreach 대신 map을 사용하여 실시간으로 데이터를 사용할 수 있다 
        const q = query(collection(dbService, "nweet"));
        const querySnapshot = onSnapshot(q, (snapshot)=> {
            const nweetArr = snapshot.docs.map((document)=> ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(nweetArr);
        });

        console.log(nweet);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        //firestore을 사용하여 실시간으로 DB에 저장
        console.log(userObj); 
        const docRef = await addDoc(collection(dbService, "nweet"), {
            text: nweet,
            createdAt : Date.now(),
            creatorId : userObj.uid,//userId
        });
        setNweet("");
    }
    const onChange = (event) => {
        const {target : {value}} = event;
        setNweet(value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="what's on your mind?" onChange={onChange} value={nweet}/>
                <input type="submit" value="submit"/>
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} IsOwner = {nweet.creatorId === userObj.uid}/>
                ))}
            </div>
        </div>
    )
}
export default Home;