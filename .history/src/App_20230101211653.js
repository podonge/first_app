/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}){
  return (
    <dvi>
      <h2>I love {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} />
    </dvi>
  )
}

const foodLike = [
  {
    id: 1,
    name : 'kimch;',
    image : 'https://health.chosun.com/site/data/img_dir/2022/07/11/2022071101596_0.jpg',
    rating : 5
  },
  {
    id: 2,
    name : 'samgiopsal;',
    image : 'https://mediahub.seoul.go.kr/wp-content/uploads/2020/10/d13ea4a756099add8375e6c795b827ab.jpg',
    rating : 4.5
  },
  {
    id: 3,
    name : 'ramen;',
    image : 'https://src.hidoc.co.kr/image/lib/2020/10/14/1602663615388_0.jpg',
    rating : 5
  }
];


function App() {
  return (
    <div>
      {foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
}

export default App;
