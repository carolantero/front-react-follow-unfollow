import { useState } from 'react';
import kelvin from './assets/kelvin-costa.png';

function UserCard({ picture, name, username, following, chamarFuncao, btn, btn_text, seguidor }) {
  return (

    <div className='banner'>
      <div className="card">

        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <span className='username'>
          @{username}
        </span>
        <span className='status'>
          {seguidor} seguidores <br />
          {following} seguindo
        </span>

      </div>

      <button onClick={chamarFuncao} className={`btn ${btn}`}>
        {btn_text}
      </button>

    </div>

  )
}



function App() {
  const user = [
    {
      id: 1,
      name: 'Kelvin Costa',
      picture: kelvin,
      username: 'costa',
      followers: 140,
      following: 207
    }
  ]

  const [btn, setBtn] = useState('follow');
  const [seguidores, setSeguidores] = useState(140);

  function mudarBtn() {
    const btnMode = btn === 'follow' ? 'unfollow' : 'follow';
    const add_seguidor = btn === 'follow' ? seguidores + 1 : seguidores - 1;

    setSeguidores(add_seguidor);
    setBtn(btnMode)
  }


  return (
    <div className="App">
      {user.map(user => {
        return (
          <UserCard
            key={user.id} {...user}
            chamarFuncao={mudarBtn}
            btn={btn}
            btn_text={btn === 'follow' ? 'Seguir' : 'Seguindo'}
            seguidor={seguidores}
          >
          </UserCard>
        )
      })}
    </div>
  );
}

export default App;
