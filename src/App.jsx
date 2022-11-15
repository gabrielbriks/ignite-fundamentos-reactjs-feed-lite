import { Header } from './components/header/Header';
import { Post } from './Post';

import styles from './App.module.css';

import { Sidebar } from './components/sidebar/Sidebar';
import './global.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <aside>
          <Sidebar />
        </aside>
        
        <main>
          <Post 
            author="Gabriel Morais"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat veniam ex a culpa impedit! Vitae, delectus, totam quia officia sunt assumenda at, ducimus repellat temporibus iusto libero odit cupiditate."
            
          />
        

          <Post 
              author="Luana Morais"
              content="Lorem ipsum POST."
            />
        </main>
        

      </div>
      
    </div>
  )
}


export default App
