import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 276,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 210,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 312,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 312,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 165,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 218,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style={color:"red" , textTransform:"uppercase" , fontSize:"48px"};
  const style = {};
  return (
    <div className="header">
      <h1 style={style}>Making Fast Pizza Company</h1>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Authentic italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))};
      </div>
        
      {/* <Pizza name="Funghi Pizza" photoName="Pizzas/funghi.jpg" ingredients="Tomato, mozarella, spinach, and ricotta cheese" price="Rs 399/-"/>
    <Pizza name="Focaccia Pizza" photoName="Pizzas/focaccia.jpg" ingredients="Plain, mozarella, spinach, and ricotta cheese" price="Rs 199/-"/>
    <Pizza name="Margherita Pizza" photoName="Pizzas/margherita.jpg" ingredients="Plain cheese, spinach, mozarella" price="Rs 129/-"/>
    <Pizza name="Prosciutto Pizza" photoName="Pizzas/prosciutto.jpg" ingredients="Plain, mozarella, spinach, and ricotta cheese" price="Rs 259/-"/> */}
    </main>
    );
}

function Footer() {
  //    return <footer className="footer">{new Date().toLocaleString()}.We are currently open !!</footer>
  //    return React.createElement("footer",null,"We are currently open !!");

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
       <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 am and {closeHour}:00 pm {" "}
        </p>
      )}
    </footer>
  );
  // if(hour>=openHour && hour<=closeHour)
  // alert("We are currently Open !!");
  // else
  // alert("We are currently Closed !!");
}

function Order({openHour,closeHour}){
  return(
  <div className="order">
  <p>
    We 're open from {openHour}:00 am untill {closeHour}:00 pm. Come visit us or order online.
  </p>
  <button className="btn">Order Now</button>
</div>
  )
};

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if(pizzaObj.soldOut)return null;

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="pizzaObj.name" />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
    </div>
  );
}
// React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Before React version 18
// React.render(<App />)
