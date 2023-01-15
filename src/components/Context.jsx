import { createContext } from "react"
import 'nanoid'
import { nanoid } from "nanoid"
import React from "react"

export const GameContext = createContext()

export const GameContextProvider = (props) => {
    const getRandomNumbers = () => {
        const numbers = []
        for (let index = 0; index < 10; index++) {
            let n = Math.ceil(Math.random() * 6);
            numbers.push(generateDieValue())
        }
        return numbers
    }

    const generateDieValue = () => {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    const [randomDice, setRandomDice] = React.useState(getRandomNumbers())

    const [tenzies, tenziesState] = React.useState(false)

    React.useEffect(() => {
        const isStateTrue = randomDice.every(die => die.isHeld === true)
        const isNumberSame = randomDice.every(die => die.value === randomDice[0].value)

        if (isStateTrue && isNumberSame) {
            tenziesState(true)
        }
    }, [randomDice])

    const handleClick = () => {
        if (!tenzies) {
            setRandomDice(oldDice => oldDice.map((die) => {
                return die.isHeld ? die : generateDieValue()
            }))
        }
        else {
            tenziesState(false)
            setRandomDice(getRandomNumbers())
        }
    }

    const dieClick = (id) => {
        setRandomDice(oldDice => oldDice.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die
        }))
        // console.log(id)
    }

    const dieElements = randomDice.map(die => <div
        onClick={() => dieClick(die.id)}
        id={die.id}
        className={die.isHeld ? "dice-held" : "dice"}
        value={die.value}>{die.value}
    </div>)
    return (
        <GameContext.Provider value = {{
            tenzies,dieClick,handleClick,dieElements
        }}>
            {props.children}
        </GameContext.Provider>
    )
}