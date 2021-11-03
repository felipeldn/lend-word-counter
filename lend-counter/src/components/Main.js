import React from 'react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

function Main() {
    return (
        <div>
            <p>Please enter a string in the text field below:</p>

            <Input placeholder="Enter a string"/>
        <br/>
        <br/>
            <Button positive>COUNT</Button>
        </div>
    )
}

export default Main
