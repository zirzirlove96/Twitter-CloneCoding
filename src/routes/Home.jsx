import React, {useState} from "react";

const Home = () => {
    const [nweet, setNweet] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
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
        </div>
    )
}
export default Home;