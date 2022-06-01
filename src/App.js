import './App.css';

function App() {
  let arr = [
    {
      pic:"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      name:"Ratatouille",
      rating:"⭐ 8",
      des:"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    },
    {
      pic:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      name:"Interstellar",
      rating:"⭐ 8.6",
      des:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      pic:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      name:"The Avengers",
      rating:"⭐ 8",
      des:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."
    },
    {
      pic:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      name:"Iron man 2",
      rating:"⭐ 7",
      des:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      pic:"https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      name:"Dark Knight",
      rating:"⭐ 9",
      des:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      pic:"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      name:"No Country for Old Men",
      rating:"⭐ 8.1",
      des:"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    }
  ]
  return (
    <div className="App">
      
      {arr.map((ele)=>(
        <Run pic={ele.pic} name={ele.name} rating={ele.rating} des={ele.des} />
      ))}

    </div>
  );
}

export default App;


function Run({pic, name, rating, des}){
  return(
    <div className='individualcont'>
      <img className='contimg' src={pic} alt={name} />
      <div className='innerindividualcont'>
        <h4>{name}</h4>
        <p>{rating}</p>
      </div>
      <p>{des}</p>
    </div>
  )
}