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
    image : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhealth.chosun.com%2Fsite%2Fdata%2Fimg_dir%2F2022%2F07%2F11%2F2022071101596_0.jpg&imgrefurl=https%3A%2F%2Fm.health.chosun.com%2Fsvc%2Fnews_view.html%3Fcontid%3D2022071101599&tbnid=5uhTCbjvsou-hM&vet=12ahUKEwjtkc2LnKb8AhXUNaYKHX2pD7cQMygAegUIARDlAQ..i&docid=-2I6MeVvHU44cM&w=640&h=427&q=%EC%9D%8C%EC%8B%9D%EC%82%AC%EC%A7%84&ved=2ahUKEwjtkc2LnKb8AhXUNaYKHX2pD7cQMygAegUIARDlAQ'
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
