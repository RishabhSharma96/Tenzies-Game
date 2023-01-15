import React from "react"
import '../css/styles.css'
import { GameContext } from "./Context"
import Confetti from 'react-confetti'


const ContentArea = () => {

    const contextForContentArea = React.useContext(GameContext)

    return (
        <div className="midder">
            {contextForContentArea.tenzies && <Confetti />}
            <div className="section">
                <p className="header-title">Tenzies</p>
                <p className="about">Roll until dice shows same number, Click each die to freeze it
                    as current value of that die</p>
                <div className="dices">
                    {contextForContentArea.dieElements}
                </div>
                <button onClick={contextForContentArea.handleClick}>
                    <span>{contextForContentArea.tenzies ? "NEW GAME" : "ROLL"}</span>
                </button>
            </div>
        </div>
    )

}

export default ContentArea