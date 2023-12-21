import React, { useCallback, useState } from 'react'

import HTMLFlipBook from 'react-pageflip'

import { Document, pdfjs, Page as ReactPdfPage } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css';

import "./Book.css"
import pdfFile from "../documents/test.pdf"


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

function Book() {

    const [numPages, setNumPages] = useState();

    /*
    const onFlip = useCallback((e) => {
        console.log("Current page: "+ e.data);
    }, []);
    */

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages)
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