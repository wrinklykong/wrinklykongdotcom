import React, { useCallback, useState, useEffect, useRef } from 'react'

import HTMLFlipBook from 'react-pageflip'

import { Document, pdfjs, Page as ReactPdfPage } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css';

import "./Book.css"
import pdfFile from "../documents/test.pdf"
import { getAllProducts } from '../services/bookServices';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

/*
const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className='Cover' ref={ref}>
            <div>
                <h2>{props.children}</h2>
            </div>
        </div>
    );
});
*/

const width = 425;
const height = 550;

const Page = React.forwardRef(({pageNumber}, ref) => {
    return (
        <div ref={ref}>
            <ReactPdfPage pageNumber={pageNumber} width={width} height={height}/>
        </div>
    );
});

async function getItems() {
    const resp = await getAllProducts()
    console.log(resp)
}

function Book( props ) {

    /*
    props:
        id: id of the thingy
    */

    const [numPages, setNumPages] = useState();

    const wasCalled = useRef(false)

    /*
    const onFlip = useCallback((e) => {
        console.log("Current page: "+ e.data);
    }, []);
    */

    useEffect(() => {
        if(wasCalled.current) return;
        wasCalled.current = true;
        console.log("hello")
        getItems()
    }, []);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages)
        console.log(`hello: ${props.id}`)
    }

    return (
        <div className='FlipBook'>
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                <HTMLFlipBook
                    width={width} height={height}
                    showCover={true}
                    drawShadow={false}
                    >
                    {Array.from(new Array(numPages), (e1, index) => (
                        <Page
                            key={`page_${index+1}`} 
                            pageNumber={index + 1} 
                            width={width}
                            height={height}/>
                    ))}
                </HTMLFlipBook>
            </Document>
        </div>
    )
}

export default Book;