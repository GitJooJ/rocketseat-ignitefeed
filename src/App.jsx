import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css'


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego Fernandes" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus illum esse illo qui culpa magni, assumenda voluptatibus aliquam? Laborum ea tenetur esse quidem quia labore sed, autem earum veniam! " 
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </>
  )
}

