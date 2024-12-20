import './App.css'
import { TwitterFollowCard } from './TwiterFollowCard'

export function App () {

  const format = (userName)=>`@${userName}` // se puede pasar funciones por props

  const formattedUserName = (<span>@midudev</span>) //se puede pasar elementos por props

  const users =[

    { userName:'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },

    { userName:'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    { userName:'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    { userName:'TMChein',
      name: 'Tomás',
      isFollowing: false
    },

  ]

  return (
    <section className='App'>
      {
        users.map(user =>{
          const {userName, name, isFollowing} = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}