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
    </div>
  );
}

export default App;
