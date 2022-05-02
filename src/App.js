import React from 'react';
import './App.css';
import propTypes from "prop-types";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='HomePage'>
      <span>RCFSFA Quiz for 2019/2021</span>
      <p>pick the correct answer to the question that qualify the right candidate</p>
    </div>
  )
};

const Room = ({ title, onClick, highlight}) => {
    const hightlightBg = (highlight) => {
    const mapping = {
      none: '',
      correct: 'green',
      wrong: 'red'
    }
    return mapping[highlight]
  }
  return (
    <div className='Title__Pick'>
      <button onClick={() => onClick(title)} style={{ backgroundColor: hightlightBg(highlight) }}>{title}</button>
    </div>
  )
};


const Turn = ({ author, books, onAnswerSelected, highlight }) => {
  return (
    <>
      <div className='TurnBg'>
        <div className='Turn'>
          <div className='TurnImage'>
            <img src={author.imageUrl} alt='' />
          </div>
          <div className='BookMap'>
            {books.map((title) => <Room key={title} title={title} highlight={highlight} onClick={onAnswerSelected} />)}
          </div>
        </div>
      </div>
    </>
  )
};

const Continue = () => {
  return (
    <div>

    </div>
  )
}

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer__Name'>
        The Quiz was buils by Meshach Ekene
      </div>
    </div>
  )
}

const App = ({ turnData, highlight, onAnswerSelected }) => {
  return (
    <>
    <div className='App'>
      <Home />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue />
      <p><Link to="/add">check the form</Link></p>
      <Footer />
    </div>
    </>
  )
}

Turn.propTypes = {
  author: propTypes.shape({
    name: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    books: propTypes.arrayOf(propTypes.string).isRequired
  }),
  onAnswerSelected:propTypes.func.isRequired,
  highlight: propTypes.string.isRequired
}

export default App;