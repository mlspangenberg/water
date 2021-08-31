
import React from "react";
import './App.css';
import logo from "./utlogo.jpg";

function Header(props) {
  return (
    <header>
      <img 
      src={logo} 
      style={{textAlign: "left"}} 
      alt="UT Logo"
      />
      <h1>{props.name} Hello World</h1>
    </header>
  );
}
function Main(props) {
return (
  <section>
    <p>This {props.adjec} is the best</p>
    <ul style={{textAlign: "left"}}>
    {props.dishes.map((dish) => (
    <li key={dish.id}>{dish.title}</li>
    ))}
    </ul>
  </section>
);
}
function Footer(props) {
  return (
    <section>
      <p>The year is {props.year}</p>
    </section>
  );
}

const dishes = [
  "Mac and Cheese",
  "Some other example",
  "This is another example",
  "Another thing"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish}));

function App() {
  return (
    <div className="App">
    <Header name="Beetlejuice" />
    <Main adjec="nonsense" dishes={dishObjects}/>
    <Footer year={new Date().getFullYear()} />
     </div>
  );
}


export default App;
