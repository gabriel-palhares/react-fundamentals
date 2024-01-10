import { Header } from './components/Header';
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/isadorasophia.png',
      name: 'Maria Gabriela',
      role: 'CEO @CrewDaLadeira'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz nas minhas férias, com Typescript e React!' },
      { type: 'link', content: 'maroy.dev/crewdaladeira' },
    ],
    publishedAt: new Date('2022-08-11 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gabriel-palhares.png',
      name: 'Mayk Brito',
      role: 'CTO @CrewDaLadeira'
    },
    content: [
      { type: 'paragraph', content: 'Eaí gente' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Github. É um e-commerce feito com Typescript, React e Node. Não deixem de dar uma olhada!' },
      { type: 'link', content: 'gabrielpalhares.dev/crewdaladeira' },
    ],
    publishedAt: new Date('2023-05-11 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
