import './App.css';
import Main from './components/Main'
import 'semantic-ui-css/semantic.min.css'

// Display title - DONE 
// Display caption - DONE
// Display text field - DONE
// Change state to entered text - DONE

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>REACT WORD COUNTER</h1>    
          <Main/>
      </header>
    </div>
  );
}

export default App;
