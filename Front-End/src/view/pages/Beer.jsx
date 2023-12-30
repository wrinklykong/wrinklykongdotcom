import "../css/Beer.css"

import { useRef, useEffect, useState } from "react";
import PostCard from "../../components/Post"
import { getRecentPosts, getPostsPage } from "../../services/beerServices";
import { Button } from "react-bootstrap";

function BeerPage ( props ) {

    const [posts, setPosts] = useState();
    const [postNum, setPostNum] = useState();

    const wasCalled = useRef(false);
    const isLoading = useRef(true);


    function init() {
        grabRecentPosts();
    }

    async function grabRecentPosts() {
        isLoading.current = true;
        setPostNum(0);
        const response = await getRecentPosts()
        isLoading.current = false;
        setPosts(response)
    }

    async function getPage( page ) {
        isLoading.current = true;
        setPostNum(page);
        const response = await getPostsPage(page);
        isLoading.current = false;
        setPosts(response);
    }

    async function getNextResults () {
        console.log("next results")
        isLoading.current = true;
        const response = await getPostsPage(postNum+1);
        setPostNum( postNum+1 );
        isLoading.current = false;
        setPosts(response);
    }

    async function getPrevResults () {
        console.log("prev results")
        isLoading.current = true;
        const response = await getPostsPage(postNum-1);
        setPostNum( postNum-1 );
        isLoading.current = false;
        setPosts(response);
    }

    // Page functionality

    useEffect(() => {
        if(wasCalled.current) return;
        wasCalled.current = true;
        init();
    }, [])

    if (isLoading.current) {
        // Todo: make a loading div
        console.log("loading...")
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
                                date={posts.data[index].date}
                                />
                ))}
                <div className="buttonFooter">
                    { postNum!==0 ?<Button className="navButton" 
                            onClick={getPrevResults} 
                            style={{display: "block"}}
                            >Prev</Button>: null}
                    { posts.data.length == 5 ?<Button className="navButton" 
                            onClick={getNextResults} 
                            style={{display: "block"}}
                            >Next</Button>: null}
                </div>
            </div>
        )
    }
}

export default BeerPage;