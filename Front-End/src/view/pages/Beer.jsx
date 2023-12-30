import "../css/Beer.css"

import { useRef, useEffect, useState } from "react";
import PostCard from "../../components/Post"
import { getRecentPosts } from "../../services/beerServices";

function BeerPage ( props ) {

    const [posts, setPosts] = useState();

    const wasCalled = useRef(false);
    const isLoading = useRef(true);

    async function grabRecentPosts() {
        const response = await getRecentPosts()
        isLoading.current = false;
        setPosts(response)
    }

    useEffect(() => {
        if(wasCalled.current) return;
        wasCalled.current = true;
        grabRecentPosts();
    }, [])

    if (isLoading.current) {
        // Todo: make a loading div
        console.log("loading...")
        console.log(isLoading.current)
        return (
            <a>Loading ...</a>
        )
    }
    else {
        console.log(posts.data)
        return(
            <div className="BeerFrontPage">
                {Array.from(new Array(posts.data.length), (e1, index) => (
                    <PostCard   key={index}
                                id={index}
                                title={posts.data[index].title} 
                                imgLink={posts.data[index].photoLink}
                                text={posts.data[index].contents}
                                />
                ))}
            </div>
        )
    }
}

export default BeerPage;