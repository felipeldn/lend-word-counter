import React, {Component} from 'react'
import Result from'./Result.js'
import { Button, Form } from 'semantic-ui-react'

// Capture string entered by user - DONE
// Call userString function when button is clicked - DONE
// Return string count as with original function via console - DONE
// Return count via another component by passing state to props - DONE
// Make everything dissapear once button has been clicked - MAYBE VIA INNER HTML?


export default class Main extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            stateCount: 0,
            validWords: ''
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

        const userString = this.state.value

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
        this.setState({stateCount: count})
        this.setState({validWords: test_output})

        event.preventDefault()
    }


    render() {

        const wordCount = this.state.stateCount
        const wordsss = this.state.value
        console.log(wordCount)
        console.log(wordsss)

        return(
            <div class="Form">
                <p>Please enter a string in the text field below:</p>

                <Form onSubmit={this.handleSubmit} >
                    <Form.Field onChange={this.handleChange}>
                        <input placeholder="Enter a string"/>
                    </Form.Field>
                    <Button positive type='submit'>COUNT</Button>
                </Form>
                <br/>
                    <Result dataCount={this.state.stateCount} dataWords={this.state.validWords}/>
            </div>
        
        )

    }
    
}


