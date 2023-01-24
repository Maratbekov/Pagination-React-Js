import "./App.css";
import { useState, useRef } from "react";

const data = [
  {
    id: 1,
    link: "https://dbk.vn/uploads/ckfinder/images/1-content/tang-fps-lol-1.jpg",
    name: "League of legends",
    price: 100
  },
  {
    id: 2,
    link:
      "https://hadoantv.com/wp-content/uploads/2021/08/download-FIFA-20-swich-hadoan-tv.png",
    name: "Fifa 20",
    price: 120
  },
  {
    id: 3,
    link:
      "https://hiepsibaotap.com/wp-content/uploads/2020/08/mw2cr-social-share-image.jpg",
    name: "Call of duty",
    price: 70
  },
  {
    id: 4,
    link: "https://minigameviet.net/wp-content/uploads/2014/08/songoku-10.png",
    name: "Dragon ball 10",
    price: 100
  },
  {
    id: 5,
    link:
      "https://cdn.tgdd.vn/Files/2018/10/25/1126811/cau-hinh-cho-may-tinh-choi-muot-pubg-la-bao-nhieu--1.jpg",
    name: "PUBG",
    price: 50
  },
  {
    id: 6,
    link:
      "https://genk.mediacdn.vn/139269124445442048/2021/9/10/photo-1-1631244041768887983579.jpg",
    name: "God of War",
    price: 400
  },
  {
    id: 7,
    link:
      "https://genk.mediacdn.vn/139269124445442048/2022/1/22/2-16428582932821269782526.jpg",
    name: "Dying light 2",
    price: 100
  },
  {
    id: 8,
    link:
      "https://image.thanhnien.vn/w1024/Uploaded/2022/fsmym/2022_01_15/top-cac-game-duoc-mong-doi-2022-phan-1-02-4809.jpeg",
    name: "Sifu",
    price: 320
  },
  {
    id: 9,
    link:
      "https://cellphones.com.vn/sforum/wp-content/uploads/2021/08/horizon-forbidden-west-delay-2-1.jpg",
    name: "Horizon forbidden west",
    price: 220
  },
  {
    id: 10,
    link:
      "https://cdn.akamai.steamstatic.com/steam/apps/1716740/capsule_616x353.jpg?t=1639080161",
    name: "Starfield",
    price: 420
  },
  {
    id: 11,
    link:
      "https://br.atsit.in/vi/wp-content/uploads/2022/01/elden-ring-hien-dang-len-hang-vang-trong-chuong-trinh-tro-choi-dai-bac-2022.jpg",
    name: "Elden Ring",
    price: 190
  },
  {
    id: 12,
    link:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/Daffodil_1P_Awareness_INT_Epic_1200x1600_1200x1600-356dd4965bde4c5dbd1000f9c97ac4b4",
    name: "Tiny Tina's Wonderlands",
    price: 320
  }
];
export default function App() {
  const quantityPageRef = useRef(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [endPosition, setEndPosition] = useState(4);

  const handlePagination = (index) => {
    setEndPosition((index + 1) * quantityPageRef.current);
    setCurrentIndex(
      (index + 1) * quantityPageRef.current - quantityPageRef.current
    );
  };

  const handlePrev = () => {
    if (currentIndex) {
      setCurrentIndex(currentIndex - quantityPageRef.current);
      setEndPosition(endPosition - quantityPageRef.current);
    }
  };

  const handleNext = () => {
    if (endPosition < data.length) {
      setCurrentIndex(currentIndex + quantityPageRef.current);
      setEndPosition(endPosition + quantityPageRef.current);
    }
  };
  return (
    <div className="App">
      <div className="products">
        {data.slice(currentIndex, endPosition).map((item) => (
          <div className="product">
            <div className="groupImage">
              <img src={item.link} alt={item.name} />
              <div className="text">
                <h3>{item.name}</h3>
                <p>{item.price}$</p>
              </div>
            </div>
            <button className="btn">Buy</button>
          </div>
        ))}
      </div>
      <button className="btnPaginate" onClick={handlePrev}>
        Previous
      </button>
      {Array(Math.ceil(data.length / quantityPageRef.current))
        .fill(null)
        .map((_, index) => (
          <button
            className={`btnPaginate ${
              currentIndex === 0 && index === currentIndex
                ? "active"
                : index === currentIndex / quantityPageRef.current && "active"
            }`}
            onClick={() => handlePagination(index)}
          >
            {index + 1}
          </button>
        ))}
      <button className="btnPaginate" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
