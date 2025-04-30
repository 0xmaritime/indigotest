import { Routes, Route, Link } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import AnalysisPage from './pages/AnalysisPage';
import RobuxConverter from './components/RobuxConverter';

function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Game Acquisition Analysis</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-700 hover:text-primary-500 font-medium">Task</Link>
              </li>
              <li>
                <Link to="/analysis" className="text-gray-700 hover:text-primary-500 font-medium">Analysis</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <RobuxConverter />
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </div>
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-end">
          <a href="https://t.me/muhkeller" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.25 1.58-1.32 5.61-1.87 7.47-.16.5-.48.63-.78.4-.61-.45-1.22-.92-1.88-1.38-.3-.22-.6-.43-.89-.65-.32-.24-.64-.16-.78.17-.2.5-.76 1.6-1.1 2.15-.2.3-.6.4-.9.2-.7-.4-1.4-.83-2.04-1.3-.8-.6-1.5-1.2-2.2-1.9-.2-.2-.2-.5-.1-.7.3-.4.6-.8.9-1.2.1-.1.2-.2.1-.4 0-.1-.1-.1-.2-.1-.4.2-.8.4-1.2.6-.3.2-.6.1-.7-.2-.2-.5.2-1.5.6-2.1.1-.2.3-.3.5-.3h.4c.3 0 .6.1.8.3 1.3 1.2 2.6 2.4 3.8 3.6.3.3.6.3.8.1.5-.5 1-1 1.5-1.5.2-.2.4-.4.6-.6.2-.2.4-.1.5.1.1.2 0 .4-.1.6z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
