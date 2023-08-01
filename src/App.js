import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Profile from './components/Profile';
import Calendar from './components/Calendar';
import Tables from './components/Tables';
import MainLayout from './components/MainLayout'





function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Profile />} />
              <Route path="calendar" element={<Calendar />}/>
              <Route path="tables" element={<Tables />}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
