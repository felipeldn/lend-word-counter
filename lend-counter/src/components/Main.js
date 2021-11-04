import React, {Component} from 'react'
import { Input, Button, Form } from 'semantic-ui-react'

// Capture string entered by user - DONE
// Call userString function when button is clicked - DONE
// Return string count as with original function via console - DONE
// Make everything dissapear once button has been clicked - MAYBE VIA INNER HTML?


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

        let userString = this.state.value

        let sentence = userString.split(' ')
        let count = 0

        let test_output = []

        sentence.forEach(function(word) {

            let hasNumber = /\d/
            let hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;'"\/\\><]/

            if (hasNumber.test(word) || hasSpecialCharacter.test(word)) {
                count = count
            } else {
                test_output.push(word)
                count += 1
            }
        })

        console.log(test_output)
        console.log(count)

        event.preventDefault()
    }


    render() {

        // const userSentence = this.state.userString

        // console.log(userSentence)

        // const filterWords = (sentence) => {
            
        //     let userString = sentence.split(' ')
        //     let count = 0

        //     let test_output = []

        //     userString.forEach(function(word) {
                
        //         let hasNumber = /\d/
        //         let hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;'"\/\\><]/

        //         if (hasNumber.test(word) || hasSpecialCharacter.test(word))
        //             count = count
        //         else {
        //             test_output.push(word)
        //             count += 1
        //         }
        //     })
        //     console.log(test_output)
        //     console.log(count)
        // }

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


