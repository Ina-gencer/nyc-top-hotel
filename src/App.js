import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const[hotels, setHotels] = useState(data);
  // console.log(data);
  const [showtext, setShowtext] = useState(false);

  const removeHotel = (id)=> {
    let newHotels = hotels.filter((hotel) => hotel.id !== id )
    setHotels(newHotels)
  }

  const showTextClick =(item)=>{
    item.showMore = !item.showMore;
    setShowtext(!showtext)
  }

  return (
    <div>
        <div className='container'>
          <h1>NYC TOP {hotels.length} HOTELS</h1>
        </div>
        {hotels.map((item => {
          const{id, hotelName, description, image, source, showMore} = item;
          return(
            <div key={id}>
              <div  className="container">
                <h2>{id} - {hotelName}</h2>
              </div>
              <div className='container'>
                <p>{showMore ? description : description.substring(0, 230) + " ..."}
                <button onClick={()=>showTextClick(item)} >{showMore ? "show less..." : "show more..."}</button>
                </p>
              </div>

              <div className='container'>
                <img src={image} alt="hotel" width="500px" />
              </div>

              <div className='container'>
                <p> {source} </p>
              </div>

              <div className='container'>
                <button className='btn' onClick={ ()=> removeHotel(id)}>Remove</button>
              </div>
                          </div>
          )
        }))}

<hr />
<div className='container'>
  <p>By Ina Gencer</p>
</div>
    </div>
  );
}

export default App;
