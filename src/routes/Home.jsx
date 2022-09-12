import React, {useState} from "react";
import {collection, addDoc, getDocs} from "firebase/firestore";
import { dbService } from "firebase_config";
import { async } from "@firebase/util";
import { useEffect } from "react";

const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    
    const getNweets = async () => {
        const getData = await getDocs(collection(dbService, "nweet"));
        //getData.forEach((document) => console.log(document.data()));
        //setter는 함수를 전달할 수 있다.
        //prev(이전값)을 전달할 수 있으며, 배열로 전달 가능
        getData.forEach((document) => {
            const nweetObject = {
                ...document.data(), //데이터를 풀어내는 es6문법
                id : document.id
            }
            // *set에 불러온 데이터를 저장하고 nweets를 통해 노출
            setNweets((prev) => [nweetObject, ...prev]);
        })
    }
    
    //마운트 (처음 화면이 나타날때만 수행)
    useEffect(() => {
        getNweets();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        //firestore을 사용하여 실시간으로 DB에 저장 
        const docRef = await addDoc(collection(dbService, "nweet"), {
            nweet,
            createdAt : Date.now()
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
                {nweets.map((nweet)=> (
                    <div id={nweet.id}>
                        <h4>{nweet.nweet}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home;