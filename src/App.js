import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='app-body'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='chatbox'>
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
