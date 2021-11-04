import React from 'react'

function Result(props) {

    const count = props.dataCount
    const validWords = props.dataWords

    if (count > 0) {
    
        return (
            <div id='result' className="count-result">
                    <p>Your string contained the following <strong>{`${count} `}</strong>valid words:</p>
                    <br/>
                    <strong>{`"${validWords.join(' ')} "`}</strong>
            </div>
    )}
    return (
        <div></div>
    ) 
}

export default Result
