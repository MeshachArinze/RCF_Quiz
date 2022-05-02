import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { sample, shuffle } from "underscore";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddForm from "./AddForm";

const authors = [
  {
    id: 1,
    name: 'bro-faith',
    imageUrl: 'images/rcfsfa/bro-faith.jpg',
    books: ['member', 'nysc', 'petoleumn', 'gaming']
  },
  {
    id: 2,
    name: 'egbon-nifemi',
    imageUrl: 'images/rcfsfa/egbon-nifemi.jpg',
    books: ['Mech Engr', 'Pet Engr', 'Physics', 'Chemistry']
  },
  {
    id: 3,
    name: 'Elder Will and Mama k',
    imageUrl: 'images/rcfsfa/elder-mama.jpg',
    books: ['VP and Sis Cord', 'BsS and Ursher', 'Vp and Sani', 'Ursher and Sis Cord']
  },
  {
    id: 4,
    name: 'Deacon Papa Wills',
    imageUrl: 'images/rcfsfa/elder-will.jpg',
    books: ['Cooking,Singing,Gaminng,Praying', 'Cooking,Gisting,Reading,Movie', 'Singing,Studying,Electronic', 'Movie,Gaming, Gisting']
  },
  {
    id: 5,
    name: 'G Papa Gbenga',
    imageUrl: 'images/rcfsfa/G-papa.jpg',
    books: ['8th President', '6th President', '3rd President', '1st President']
  },
  {
    id: 6,
    name: 'Ereyomi Oluwaseyi Samuel',
    imageUrl: 'images/rcfsfa/I-Am-God.jpg',
    books: ['Can We Pray', 'Can We Study', 'Can We Whyn', 'Can We Play']
  }
];

function getTurnData(authors) {
  const allRoom = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);

  const fourRandomRoom = shuffle(allRoom).slice(0, 4);
  const answer = sample(fourRandomRoom);
  return {
    books: fourRandomRoom,
    author: authors.find((author) => author.books.some((title) => title === answer))
  }
}

const state = {
  turnData: getTurnData(authors),
  highlight: ''
}

const onAnswerSelected = (answer) => {
  const isCorrected = state.turnData.author.books.some((books) => books === answer);
  state.highlight = isCorrected ? 'correct' : 'wrong';
  rendering();
}

const NewApp = () => {
  return <App {...state} onAnswerSelected={onAnswerSelected} />;
}

const AddWrapper = (onAddAuthor) => { 
  return <AddForm onAddAuthor={console.log(onAddAuthor)}/>;
}

function rendering() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewApp />}/>
        <Route path="/add" element={<AddWrapper />} />
      </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rendering();