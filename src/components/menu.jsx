import Pizza from "./pizza.jsx";

// Images

import pizza1 from "../assets/pizzas/focaccia.jpg";
import pizza2 from "../assets/pizzas/margherita.jpg";
import pizza3 from "../assets/pizzas/spinaci.jpg";
import pizza4 from "../assets/pizzas/funghi.jpg";
import pizza5 from "../assets/pizzas/salamino.jpg";
import pizza6 from "../assets/pizzas/prosciutto.jpg";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: pizza1,
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: pizza2,
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: pizza3,
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: pizza4,
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: pizza5,
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: pizza6,
      soldOut: false,
    },
];

const Menu = () => {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {pizzaData.length && (
                <ul className="pizzas">
                  {
                    pizzaData.map((pizzaObj, i) => {
                        return (
                            <Pizza key={i} {...pizzaObj}/>
                        )
                    })
                  }
                </ul>
              )
            }
        </main>
    )
}

export default Menu;