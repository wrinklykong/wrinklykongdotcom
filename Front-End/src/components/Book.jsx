import React, { useCallback, useState } from 'react'

import HTMLFlipBook from 'react-pageflip'

import { Document, pdfjs, Page as ReactPdfPage } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css';

import "./Book.css"
import pdfFile from "../documents/test2.pdf"


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
    
    const onFlip = useCallback((e) => {
        console.log("Current page: "+ e.data);
    }, []);

    return (
        <div className='FlipBook'>
            <Document file={pdfFile}>
                <HTMLFlipBook
                    width={width} height={height}
                    onFlip={onFlip}
                    showCover={true}
                    drawShadow={false}
                    >
                    
                    <Page pageNumber={1}/>
                    <Page pageNumber={2}/>
                    <Page pageNumber={3}/>
                    <Page pageNumber={4}/>
                    <Page pageNumber={5}/>
                </HTMLFlipBook>
            </Document>
        </div>
    )
}

export default Book;