import React, {Component} from 'react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

// Capture string entered by user 
// Use handleChange 

export default class Main extends Component {
    
    constructor(props) {
        super(props)

        this.state = ""
    };

    render() {

        return(
            <div>
                <p>Please enter a string in the text field below:</p>

                <Input placeholder="Enter a string"/>
                <br/>
                <br/>
                <Button positive>COUNT</Button>
            </div>
        )

    }
    
}


