import React from 'react'
import { Image } from 'semantic-ui-react'
import images from '../images/confused-counting.gif'

function Result(props) {

    const count = props.dataCount
    const validWords = props.dataWords

    if (count > 0) {
    
        return (
            <div id='result' className="count-result">
                    <Image src={images} alt='loading...' size='medium' centered />
                    <br/>
                    <p>Your string contained the following <strong>{`${count} `}</strong>valid words:</p>
                    
                    <strong>{`"${validWords.join(' ')} "`}</strong>
                    <br/>
                    <br/>
                    <p>Get your quote with <a href="https://www.lendable.co.uk/">Lendable</a> today!</p>
            </div>
    )}
    return (
        <div></div>
    ) 
}

export default Result
