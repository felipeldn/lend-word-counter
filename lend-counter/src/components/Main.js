import React, {Component} from 'react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

// Capture string entered by user - DONE
// Call userString function when button is clicked

export default class Main extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            userString: ""
        }
    
        this.handleChange = this.handleChange.bind(this)
    
    };

    handleChange(event) {
        this.setState({
            userString: event.target.value
        })
    }

    render() {

        const userSentence = this.state.userString
        
        const filterString = (string) => {
            if (typeof string === 'string') {
                console.log(string)
            } else {
                console.log('Please enter a string')
            }
        }

        console.log(userSentence)

        return(
            <div>
                <p>Please enter a string in the text field below:</p>

                <Input 
                    placeholder="Enter a string"
                    onChange={this.handleChange}
                />
                <br/>
                <br/>
                <Button positive onClick={filterString(userSentence)}>COUNT</Button>
            </div>
        
        )

    }
    
}


