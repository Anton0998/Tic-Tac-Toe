import './App.css';
import {useState, useEffect} from 'react'

  let initialFields = ['', '', '', '', '', '', '', '', '']

  const winningScenarios = [
    [0, 1, 2,],
    [3, 4, 5,],
    [6, 7, 8,],
    [0, 3, 6,],
    [1, 4, 7,],
    [2, 5, 8,],
    [0, 4, 8,],
    [2, 4, 6,]
  ]

function App({playerOne, playerTwo}) {
  const [fields, setFields] = useState(initialFields)
  const [turn, setTurn] = useState('X')
  const [isRunning, setIsRunning] = useState(false)
  
  const handleNewGame = () => {
    setIsRunning(true)
    setFields(initialFields)
    setTurn('X')
  }
  
  const handleFieldClick = (index) => {
    
    if(!isRunning) return 
    
    setFields(prev => {
      const updatedFields = [...prev]
      if (updatedFields[index] !== '') return prev
      updatedFields[index] = turn
      setTurn(turn === 'X' ? 'O' : 'X')
      return updatedFields
    })
  }
  
  useEffect(() => {
    if(!isRunning) return;

    for(let scenario of winningScenarios) {
      const [a, b, c] = scenario
      if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
        setIsRunning(false)
        setTimeout(() => {
          alert(`Player '${fields[a]}' has won!`)
        }, 100)
        return
      }
    }

    if(fields.every(field => field !== '')) {
      alert('It is a draw!')
      setIsRunning(false)
    }

    
  }, [fields, isRunning])
  
  return (
    <div className='bg-slate-100'>

      <div className='max-w-screen-sm h-screen mx-auto flex flex-col py-6 gap-4'>
        <h1 className='text-center text-4xl font-bold pb-6'>Tic Tac Toe</h1>

        <button className='px-6 py-2 w-fit font-bold bg-blue-800 hover:outline outline-2 outline-blue-400 transition-all text-white self-center rounded' 
          onClick={handleNewGame} 
        > {isRunning ? 'New game' : 'Start game'} </button>

        <ul className='shrink my-auto grid grid-rows-3 grid-cols-3 gap-2 px-24'>
          {fields.map((field, index) => (
            <li className='flex justify-center items-center aspect-square bg-white cursor-pointer rounded border transition-all hover:outline outline-blue-600 text-6xl '
            onClick={() => handleFieldClick(index)}
            key={index}
            style={{background: field === 'O' ? 'rgb(220 252 231)' : field === 'X' ? 'rgb(219 234 254)' : ''}}
            >
              {field}
            </li>
          ))}
        </ul>

        <p 
          className='self-center font-bold text-lg text-black/60'
          style={{visibility: isRunning ? 'visible' : 'hidden'}}
        > {`${turn}'s turn`} </p>

      </div>
    </div>
  );
}

export default App;
