import React from "react";

function Food({fav}){
  return <h1>I love {fav}</h1>
}

const foodLike = [
  {
    name : 'kimch;',
    image : 'https://health.chosun.com/site/data/img_dir/2022/07/11/2022071101596_0.jpg'
  },
  {
    name : 'samgiopsal;',
    image : 'https://mediahub.seoul.go.kr/wp-content/uploads/2020/10/d13ea4a756099add8375e6c795b827ab.jpg'
  },
  {
    name : 'ramen;',
    image : 'https://src.hidoc.co.kr/image/lib/2020/10/14/1602663615388_0.jpg'
  },
  


];


function App() {
  return (
    <div>
      <h1>HEllo</h1>
    </div>
  );
}

export default App;