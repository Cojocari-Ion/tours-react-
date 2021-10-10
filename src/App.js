import React, { useState } from 'react';
import './App.css';
import ToursList from './components/ToursList';

function App() {

  
  const toursArray = [
    {
      id: 1,
      name: "Best of Paris in 7 days",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum et deserunt quidem ut tempore similique enim velit qui non rerum itaque, esse dolorem delectus dolores necessitatibus tenetur quisquam exercitationem?",
      image: "https://images.pexels.com/photos/3989820/pexels-photo-3989820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "1200"
    },
  
    {
      id: 2,
      name: "Visit moldavian hills",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum et deserunt quidem ut tempore similique enim velit qui non rerum itaque, esse dolorem delectus dolores necessitatibus tenetur quisquam exercitationem?",
      image: "https://images.pexels.com/photos/414122/pexels-photo-414122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "30"
    },
  
    {
      id: 3,
      name: "eating mamaliga at Bunica's house",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum et deserunt quidem ut tempore similique enim velit qui non rerum itaque, esse dolorem delectus dolores necessitatibus tenetur quisquam exercitationem?",
      image: "https://images.pexels.com/photos/5585289/pexels-photo-5585289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "10"
    },
  
    {
      id: 4,
      name: "fishing with a drunk russian in Siberia",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum et deserunt quidem ut tempore similique enim velit qui non rerum itaque, esse dolorem delectus dolores necessitatibus tenetur quisquam exercitationem?",
      image: "https://images.pexels.com/photos/6831250/pexels-photo-6831250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "500"
    },
  
    {
      id: 5,
      name: "enjoying Egypt",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum et deserunt quidem ut tempore similique enim velit qui non rerum itaque, esse dolorem delectus dolores necessitatibus tenetur quisquam exercitationem?",
      image: "https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      price: "1000"
    },
  
    {
      id: 6,
      name: "hiking in african savana",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum et deserunt quidem ut tempore similique enim velit qui non rerum itaque, esse dolorem delectus dolores necessitatibus tenetur quisquam exercitationem?",
      image: "https://images.pexels.com/photos/2600340/pexels-photo-2600340.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      price: "1600"
    }
  ];
  const [tours, setTours] = useState(toursArray);

  console.log(tours);

  
    if (tours.length === 0) {
      return (
          <div className="App">
              <h1>No tours left</h1>
              <button className="refresh" onClick={() => setTours(toursArray)}>Refresh</button>
          </div>
      );
    }

  return (
    <div className="App">
      <h1>Select your tour</h1>
      <ToursList setTours={setTours} tours={tours} />
    </div>
  );
}

export default App;
