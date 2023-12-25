import Image from "next/image";
import foodImage from "/public/vercel.svg";
export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product) => (
        <div className="food" key={product}>
          <Image src={foodImage} className="food-img" />
          <h4>{product} $40</h4>
        </div>
      ))}
    </div>
  );
}
