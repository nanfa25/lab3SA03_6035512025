import React from 'react';
import CharacterCaed from './CharacterCaed';
import './App.css';
import _ from 'lodash';
import './fah.jpg';

let message = 'HELLO'

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false,
    reset: 0
  }
}


class App extends React.Component {

  state = prepareStateFromWord(message);



  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length == this.state.chars.length) {
      if (guess.join('').toString() == this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }
  }

  reset = () => {
    this.setState({
      reset: this.state.reset + 1,
      completed: !this.state.completed
    })
  }



  render() {
    return (
      <div className="text">
        <div>
            <h2 className="name">นางสาวน่านฟ้า แสงนคร 6035512025</h2>
          {
            Array.from(this.state.chars).map((item, index) => (
              <CharacterCaed
                value={item}
                key={index}
                activationHandler={this.activationHandler}
                attempt={this.state.attempt}
                reset={this.state.reset}
              />
            ))
          }
          <div className="select">
            <h2>มาเล่นเกมกันเถอะ</h2>
            {
              Array.from(this.state.guess).map((item, index) => (
                <CharacterCaed
                  value={item}
                  key={index}
                  activationHandler={this.activationHandler}
                />
              ))
            }
            <div>เล่นรอบที่ {this.state.attempt}</div>
            {
              this.state.completed && <h4>Complete</h4>
            }

            {
              this.state.completed && <button onClick={this.reset}>Reset</button>
            }



          </div>
        </div>
      </div>
    )
  }
}


export default App;