
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { UserSignUp } from './auth/UserSignUp';
import { UserSignIn } from './auth/UserSignIn';
import { AgentSignUp } from './auth/AgentSignUp';
import { AgentSignIn } from './auth/AgentSignIn';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<UserSignUp/>} />
    <Route path='usersign-up' element={<UserSignUp/>} />
    <Route path='usersign-in' element={<UserSignIn/>} />
    <Route path='agentsign-up' element={<AgentSignUp/>} />
    <Route path='agentsign-in' element={<AgentSignIn/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
