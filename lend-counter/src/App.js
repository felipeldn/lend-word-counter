import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Input } from 'semantic-ui-react'

// Display title - DONE 
// Display caption - DONE
// Display text field - DONE
// Change state to entered text

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT WORD COUNTER</h1>
        <p>Please enter a string in the text field below:</p>
        <Input focus placeholder="Enter a string"/>

      </header>
    </div>
  );
}

export default App;
