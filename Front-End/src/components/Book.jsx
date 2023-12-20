import React, { useCallback } from 'react'
import HTMLFlipBook from 'react-pageflip'
import "./Book.css"

const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className='Cover' ref={ref}>
            <div>
                <h2>{props.children}</h2>
            </div>
        </div>
    );
});

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <h1>Page header</h1>
            <h2>{props.children}</h2>
            <h3>{props.number}</h3>
        </div>
    );
});

function Book() {
    
    const onFlip = useCallback((e) => {
        console.log("Current page: "+ e.data);
    }, []);

    return (
        <div className='FlipBook'>
            <HTMLFlipBook
                width={300} height={500}
                onFlip={onFlip}
                showCover={true}
                >
                <PageCover>try</PageCover>

                <Page number="1">
                    <p>help</p>
                </Page>
                <Page number="2">
                    <p>help</p>
                </Page>
                <Page number="3">
                    <p>help</p>
                </Page>
                
            </HTMLFlipBook>
        </div>
    )
}

export default Book;