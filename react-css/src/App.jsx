import './App.css'
import './font/font.css';
import ProfileBar from './components/ProfileBar/ProfileBar'
import HeadBar from './components/HeadBar/HeadBar'
import PostsSection from './components/PostsSection/PostsSection'
import LeftSideBar from './components/LeftSideBar/LeftSideBar'

function App() {
  

  return (
    <div className='container'>
      <ProfileBar />
      <HeadBar />
      <PostsSection />
      <LeftSideBar />
    </div>
  )
}

export default App
