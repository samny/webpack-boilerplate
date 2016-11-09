import React from 'react';
import Image from '../components/media/Image';
import Button from '../components/ui/Button';
import html from './content.md';

export default function () {
    let random = Math.floor(Math.random() * 9) + 1;
    return (
        <div>
            <h1>Start</h1>
            <Image background src={`/sequence/test_${random}.jpg`}/>
            <div dangerouslySetInnerHTML={{__html: html}}/>
            <p>
                <Button>Click me!</Button>
            </p>
        </div>
    );
}