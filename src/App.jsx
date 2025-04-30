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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
          <a href="https://t.me/muhkeller" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
          </a>
        </div>
      </footer>
      {/* Updated footer - trigger redeploy */}
    </div>
  );
}

export default App;
