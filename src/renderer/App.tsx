import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            window.electron.store.set('time', '8:00:00');
            // or
            console.log(window.electron.store.get('time'));
          }}
        >
          Setta
        </button>
        <button
          type="button"
          onClick={() => {
            window.electron.store.get('time');
            console.log(window.electron.store.get('time'));
          }}
        >
          Mostra orari
        </button>
        <button
          type="button"
          onClick={() => {
            window.electron.store.reset();
            console.log(window.electron.store.get('time'));
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
