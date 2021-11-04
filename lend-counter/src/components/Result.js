import React, {useState} from 'react'

function Result(props) {
    console.log(props.data)
    // const [showResult, setShowResult] = useState(false)
    const count = props.data

    return (
        <div id='result' className="count-result">
                <p>Your string contained <strong>{`${count} `}</strong>valid words</p>
        </div>
    )
}

export default Result
