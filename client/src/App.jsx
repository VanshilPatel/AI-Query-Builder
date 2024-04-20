import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Chat from "./app/Chat";
function App() {
  
  return (
    <>
        
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
    </>
  );
}

export default App;
