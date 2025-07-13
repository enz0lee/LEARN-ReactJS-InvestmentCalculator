import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid = Object.values(userInput).every(
    (value) => typeof value === 'number' && value >= 0
  )

  function handleChange(event) {
    const { name, value } = event.target
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: Number(value),
    }))
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p>Please enter valid input values.</p>
      )}
    </>
  )
}

export default App
