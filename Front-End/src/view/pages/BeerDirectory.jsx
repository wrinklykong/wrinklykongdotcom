import "../css/Beer.css"

import { useRef, useEffect, useState } from "react";
import { getRecentPosts, getPostsPage } from "../../services/beerServices";
import { Button } from "react-bootstrap";

import PostCard from "../../components/Post"

function BeerDirectoryPage ( ) {

    const [posts, setPosts] = useState();
    const [postNum, setPostNum] = useState();

    const wasCalled = useRef(false);
    const isLoading = useRef(true);
    const failedRequest = useRef(false);


    function init() {
        grabRecentPosts();
    }

    async function grabRecentPosts() {
        failedRequest.current = false;
        isLoading.current = true;
        const response = await getRecentPosts();
        if ( response != null ) {
            setPostNum(0);
        }
        else {
            failedRequest.current = true;
            setPosts(null);
        }
        setPosts(response);
        isLoading.current = false;
    }

    async function getNextResults () {
        failedRequest.current = false;
        isLoading.current = true;
        const response = await getPostsPage(postNum+1);
        if ( response != null ) {
            isLoading.current = false;
            setPosts(response);
            setPostNum( postNum+1 );
        }
        else {
            isLoading.current = false;
            failedRequest.current = true;
            setPosts(null);
        }
    }

    async function getPrevResults () {
        failedRequest.current = false;
        isLoading.current = true;
        const response = await getPostsPage(postNum-1);
        if ( response != null ) {
            isLoading.current = false;
            setPosts(response);
            setPostNum( postNum-1 );
        }
        else {
            isLoading.current = false;
            failedRequest.current = true;
            setPosts(null);
        }
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
    else if (isLoading.current !== true && failedRequest.current) {
        // TODO: Update with a placeholder not found result
        return(
            <p>Failed to connect to server!</p>
        )
    }
    else {
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
                    { posts.data.length === 5 ?<Button className="navButton" 
                            onClick={getNextResults} 
                            style={{display: "block"}}
                            >Next</Button>: null}
                </div>
            </div>
        )
    }
}

export default BeerDirectoryPage;