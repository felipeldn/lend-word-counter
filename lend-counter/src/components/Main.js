import React, {Component} from 'react'
import { Input, Button, Form } from 'semantic-ui-react'

// Capture string entered by user - DONE
// Call userString function when button is clicked

export default class Main extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    
    };

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('The following was submitted:' + ` ${this.state.value}`)
        event.preventDefault()
    }


    render() {

        const filterString = (query) => {
            console.log(query)
            // if (typeof query === 'string') {
            //     console.log(query)
            // } else {
            //     console.log('Please enter a string')
            // }
        }

        // const userSentence = this.state.userString

        // console.log(userSentence)

        return(
            <div>
                <p>Please enter a string in the text field below:</p>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Field onChange={this.handleChange}>
                        <input placeholder="Enter a string"/>
                    </Form.Field>
                    <Button positive type='submit'>COUNT</Button>
                </Form>

                {/* <Input 
                    placeholder="Enter a string"
                    onChange={this.handleChange}
                /> */}
                    {/* <Button positive onClick={console.log("It's working!")}>COUNT</Button> */}
                
                <br/>
                <br/>
                {/* <Button positive onClick={console.log("It's working!")}>COUNT</Button> */}
            </div>
        
        )

    }
    
}


