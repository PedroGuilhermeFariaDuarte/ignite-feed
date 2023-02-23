// Global Components
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

// Variables
import "./styles/global/variables.css"

// Fonts
import "./styles/fonts/index.css"

// Global Styles
import "./styles/global/index.css"

// Styles
import styles from "./App.module.css"

function App() {  

  return <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post 
          title="Lorem" 
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, odit qui aspernatur reiciendis praesentium odio facere a, nobis, aut culpa omnis quas. Repudiandae optio temporibus, expedita minus excepturi tempore deserunt"
        />
      </main>
    </div>
  </>
}

export default App