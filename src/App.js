import './App.css';
import './style/layout.css';
import './style/news-item.css';

import ContentMain from './components/ContentMain';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Methodia UI Dev Task</h1>
      </header>
      <ContentMain />
      <footer className='App-footer'>
        <h2>Serafima D.</h2>
      </footer>
    </div>
  );
}

export default App;
