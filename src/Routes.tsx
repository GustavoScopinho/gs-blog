import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import { Comments } from './pages/Comments/Comments'
import { Home } from './pages/Home/Home'
import { Posts } from './pages/Posts/Posts'
import { Users } from './pages/Users/Users'


export const Router = () => {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/posts/comments' element={<Comments/>} />
          <Route path='/users' element={<Users/>} />
          
        </Routes>
      </BrowserRouter>
   </>
  )
}
