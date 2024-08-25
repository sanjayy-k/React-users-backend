import Login from './Components/Login';
import {Routes,Route} from 'react-router-dom'
import Display1 from './Display1'
import Login1 from './Components/Login1';
import Display2 from './Display2'
function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path="/" element={<Login />}></Route>
        {/* "/" This is the first Page */}
        <Route path="/Display1" element={<Display1 />}></Route>
        <Route path="/Login1" element={<Login1 />}></Route>
        <Route path="/Display2" element={<Display2 />}></Route>
    </Routes>
   </div>
  )
}

export default App;
