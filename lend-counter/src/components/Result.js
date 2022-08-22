import React from 'react'
import { Image } from 'semantic-ui-react'
import image from '../images/confused-counting.gif'

function Result(props) {

    const count = props.dataCount
    const validWords = props.dataWords

    if (count === 0) {
            return (
                <div></div>
            )
    } else if (count === 1) {
        return (
            <div>
                <Image src={image} size='large' centered/>
                <br/>
                <p>Your string contained <strong>{`${count} `}</strong> valid word:</p>

                <strong>{`"${validWords.join('')}"`}</strong>
                <br/>
                <br/>
                <p>Get your quote with <a href="https://www.lendable.co.uk/">Lendable</a> today!</p>
            </div>
        )
    } else {
        return(
            <div>
                <Image src={image} size='large' centered/>
                <br/>
                <p>Your string contained <strong>{`${count} `}</strong> valid words!</p>

                <strong>{`"${validWords.join(', ')}"`}</strong>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Result
