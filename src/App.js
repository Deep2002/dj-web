import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home';
import CustomCursor from './Components/CustomCursor';



function App() {
  
  return (
    
    <div className='bg-[#02080C] w-screen h-screen'>
      <body className="cursor-none"/>
      <CustomCursor />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap" rel="stylesheet"/>
      <Home />

    </div>
  );
}

export default App;
