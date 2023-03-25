import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import { Comments } from './pages/Comments/Comments'
import { Home } from './pages/Home/Home'
import { PostList } from './pages/PostList/PostList'
import { UserDetails } from './pages/UserDetails/UserDetails'
import { UserList } from './pages/UserList/UserList'



export const Router = () => {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/posts' element={<PostList/>} />
          <Route path='/posts/comments' element={<Comments/>} />
          <Route path='/users' element={<UserList/>} />
          <Route path='/user-by-id/' element={<UserDetails/>} />
          
        </Routes>
      </BrowserRouter>
   </>
  )
}
