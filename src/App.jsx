import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/lucasdessy.png',
      name: 'Lucas Dessy',
      role: 'Mobile Developer'
    },
	  content: [
      { type: 'paragraph', content: 'Hey guys 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare'},    
    ],
    publishedAt: new Date('2022-07-27 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/matheuslucca.png',
      name: 'Matheus Lucca',
      role: 'React Developer'
    },
	  content: [
      { type: 'paragraph', content: 'Hey guys 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2022-07-28 11:00:00'),
  },
];


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </>
  )
}

