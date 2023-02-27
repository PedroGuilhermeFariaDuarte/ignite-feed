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
import { IPost } from './components/Post/types'

const posts: Array<IPost> = [
  {
    id: 16112395,
    author: {
      avatar_url: "https://avatars.githubusercontent.com/u/16112395?v=4",
      name: "Pedro Guilherme",
      role: "Web Developer"
    },
    publishedAt: new Date(),
    content: {
      text: [
        {
          type: "paragraph",
          content: 'Fala galeraa 👋'
        },
        {
          type: "paragraph",
          content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        {
          type: "link",
          content: '👉 jane.design/doctorcare'
        }
      ],
      tags: [
        'novoprojeto' ,
        'nlw',
        'rocketseat'
      ]                                    
    },
    commentaries: [
      {
        id: 2254731,
        author: {
          avatar_url: "https://avatars.githubusercontent.com/u/2254731?v=4",
          name: "Diego Fernandes",
          id: 2254731       
        },
        publishedAt: new Date(),
        content: {
          text: [
            {
              type: "paragraph",
              content: 'Muito bom Devon, parabéns!! 👏👏'
            },            
          ],
          tags: [
            'parabéns',
            'Devon',            
          ]
        },
        hots: 0
      }
    ]
  },
  {
    id: 2254731,
    author: {
      avatar_url: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: "Diego Fernandes",
      role: "CTO at @Rocketseat. Passionate about education and changing people's lives through programming."
    },
    publishedAt: new Date(),
    content: {
      text: [
        {
          type: "paragraph",
          content: 'Fala galeraa 👋'
        },
        {
          type: "paragraph",
          content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        {
          type: "link",
          content: '👉 jane.design/doctorcare'
        }
      ],
      tags: [
        'novoprojeto' ,
        'nlw',
        'rocketseat'
      ]                                    
    },
    commentaries: []
  }
]

function App() {  

  return <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {
          posts.length <= 0 ? 'Nenhum post disponível' : ''
        }
        {
          posts.map(post => <Post post={post} key={post.id}/>)
        }       
      </main>
    </div>
  </>
}

export default App