import React, { useState } from "react";
import "./styles.css";

let database = {
  Places: [
    {
      name: "Gateway of India",
      description:
        " The Gateway of India is an arch monument built during the 20th century in Bombay, India. It served to allow entry and access to India. The Gateway of India is located on the waterfront at Apollo Bunder area at the end of Chhatrapati Shivaji Marg in South Mumbai and overlooks the Arabian Sea. It is located 25 km from Mumbai Airport",
      rating: "10/10",
      image:
        "https://images.unsplash.com/photo-1580581096469-8afb38d3dbd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80"
    },
    {
      name: "Marine Drive",
      description:
        " Marine Drive (also know as Queen’s Necklace, also known as Netaji Subhash Chandra Bose Road) is a three kilometer sea-facing promenade that starts at Nariman Point and goes on to Babulnath. With an uninterrupted view of the Arabian Sea, Marine Drive is undoubtedly among the most peaceful places the bustling city has to offer.It is located at a distance of 22 km from Mumbai Airport",
      rating: "10/10",
      image:
        "https://thebetterindia-english.s3.ap-south-1.amazonaws.com/uploads/2015/12/md_f.png"
    },
    {
      name: "Worli Seaface",
      description:
        "Officially known as Rajiv Gandhi Sea Link, this eight-lane cable-stayed bridge in Mumbai is the first project initiated by Maharashtra Government that commences West Island Freeway System. Bandra Worli Sea Link is one of the few bridges that is a cable-stayed with pre-stressed concrete-steel viaducts to hold it in place. Spanning across the arc of Mumbai's coastline, this sea link is a civil engineering wonder that reflects the modern infrastructure of the city of Mumbai.It is located at a distance of 14 km from Mumbai Airport",
      rating: "10/10",
      image:
        "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2F1+Bandra+Worli-Purple+Week.jpg&h=630&w=1200&q=75&v=20170226&c=1"
    },
    {
      name: "Chhatrapati Shivaji Terminus",
      description:
        "Chhatrapati Shivaji Terminus (CST) is popular railway station and is a spitting image of Victorian-Gothic style of architecture in India. Located in the heart of Mumbai, the CST is also a 'World Heritage Site' declared by UNESCO in 2004. Built in 1888, the station is the grand reminder of the British Raj pre-independence and is still one of the most historical landmarks within the Central Business District (CBD) of Mumbai. A bustling terminus, the CST is well-connected by rail to all parts of the country.It is located at a distance of 25 km from Mumbai Airport",
      rating: "9.9/10",
      image:
        "https://i.pinimg.com/originals/a2/f6/b7/a2f6b77b11ee59ef999f5f87bee74694.jpg"
    },
    {
      name: "Juhu Beach",
      description:
        "Juhu is an upmarket neighbourhood of Mumbai. It is most famous for the sprawling Juhu Beach. It is surrounded by the Arabian Sea to the west, Versova to the north, Santacruz and Vile Parle to the east and Khar to the south. Juhu is among the most affluent areas of the city and home to many Bollywood celebrities.It is located at a distance of 6 km from Mumbai Airport",
      rating: "9.6/10",
      image:
        "https://images.unsplash.com/photo-1516708941536-69c4c0517850?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
  ],
  Food: [
    {
      name: "Vada Pav",
      description:
        "Bread stuffed with vada inside which is usually made up of potato. A go to snack for every mumbaikar.",
      rating: "10/10",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg"
    },
    {
      name: "Pav Bhaji",
      description:
        "A dish made with tomato & many vegetables added together served along with pav , butter and onions.",
      rating: "10/10",
      image:
        "https://www.awesomecuisine.com/wp-content/uploads/2007/11/pav_bhaji_recipe.jpg"
    },
    {
      name: "Ragda Pattice",
      description:
        "Potato patties are served with a spicy white pea curry and garnished with chutneys, cilantro and sev!",
      rating: "9.5/10",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Delicious_Ragda_Patties_.HEIC.jpg"
    },
    {
      name: "Misal Pav",
      description:
        "A breakfast dish which is topped with farsan or sev, onions, lemon and coriander along with pav .",
      rating: "9.6/10",
      image:
        "https://1.bp.blogspot.com/-aH1ZH-0hIy4/XeltwulF2UI/AAAAAAAAQRc/2fYvaIGg--wdggzMASpQu-pKOYkTOUM8QCEwYBhgL/s1600/DSC_0932.JPG"
    }
  ],
  Transportation: [
    {
      name: "Mumbai Locals",
      description:
        "A convenient mode of transportation for people residing in mumbai.Daily lakhs of people travel through mumbai locals to their work",
      rating: "9.8/10",
      image:
        "https://images.moneycontrol.com/static-mcnews/2020/06/6-mumbai-suburban-trains-770x433.jpg?impolicy=website&width=770&height=431"
    },
    {
      name: "Mumbai metro",
      description:
        "A hassle free mode of transportation which connects both central and western parts of mumbai.",
      rating: "9.4/10",
      image:
        "https://gumlet.assettype.com/freepressjournal%2F2019-12%2F232d748a-4966-4134-b2c0-882243e549e2%2FmetroMumbai.jpg?rect=0%2C0%2C800%2C450&w=400&dpr=2.6"
    }
  ],
  Festivals: [
    {
      name: "Ganesh Chaturthi",
      description:
        "Ganesh Chaturthi is widely celebrated in Mumbai and other parts of the state. People unite with their friends & families and celebrate the festival for 10 days. In Mumbai, Lalbaughcha Raja which is kept at lalbaugh,Mumbai is most famous. ",
      rating: "10/10",
      image:
        "https://www.hindugodwallpaper.com/images/gods/zoom/1110_lalbaugcha-raja-wallpaper-04.jpg"
    },
    {
      name: "Krishna Janmashtami.",
      description:
        "Krishna Janmashtami is celebrated in Mumbai with utmost joy & enthusiasm. People form groups and participate in a festival wherein they have to break the handi (pot) filled with curd which is tied at the top ",
      rating: "10/10",
      image: "https://i.redd.it/qavssmlpwig51.jpg"
    }
  ]
};

let dbArray = Object.keys(database);

export default function App() {
  const [selectedOption, setSelectedOption] = useState("Places");

  function buttonClickHandler(item) {
    setSelectedOption(item);
  }

  return (
    <div className="App">
      <main>
        <h1 style={{ fontSize: "3rem" }}>Mumbai Darshan</h1>
        <h2>
          This app lists all the tourist places, food items, mode of
          transportation & festivals that enhance the popularity of Mumbai.{" "}
        </h2>

        <section>
          {dbArray.map((item) => {
            return (
              <button
                className="navButton"
                key={item}
                onClick={() => {
                  buttonClickHandler(item);
                }}
              >
                {item}
              </button>
            );
          })}
        </section>

        <section>
          {database[selectedOption].map((lists) => {
            return (
              <div className="mainArea">
                <div className="imageArea">
                  <img
                    src={lists.image}
                    className="image"
                    alt="actualimage"
                  ></img>
                </div>
                <div className="mainDescription">
                  <h1>{lists.name}</h1>
                  <p>{lists.description}</p>
                  <h4>Rating: {lists.rating}</h4>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <footer>
        <div>Made with 💛 by Ganesh Gajula</div>
      </footer>
    </div>
  );
}
