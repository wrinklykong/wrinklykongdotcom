import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { getPostByID } from "../../services/beerServices";


function BeerPostPage ( props ) {

    function init() {
        getPost(id)
    }
    
    async function getPost(id) {
        const result = await getPostByID(id);
        setPost(result);
        isLoading.current = false;
        console.log(result)
    }
    
    const [post, setPost] = useState();
    
    const isLoading = useRef(true);
    const wasCalled = useRef(false);
    
    const { id } = useParams();


    // Page functionality

    useEffect(() => {
        if(wasCalled.current) return;
        wasCalled.current = true;
        init();
    }, [])

    if (isLoading.current) {
        return(
            <p>Loading ...</p>
        )
    }
    else{
        return(
            <p>Test</p>
        )
    }
}

export default BeerPostPage;