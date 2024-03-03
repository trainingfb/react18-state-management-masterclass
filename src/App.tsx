// src/App.tsx
import { Outlet } from 'react-router-dom';
import { Navbar } from './core/Navbar.tsx';

function App() {
  return (
    <>
      <Navbar />

      <div className="max-w-screen-xl mx-auto my-6">
        <Outlet />
      </div>
    </>
  )
}

export default App
