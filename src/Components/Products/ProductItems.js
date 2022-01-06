import ProductsLayout from "./ProductsLayout";
import "./ProductItems.css";

const productData = [
  {
    id: 1,
    item: "Graphic Card",
    price: 100,
    detail: "this is product A and it is a multiple tasker",
  },{
    id: 1,
    item: "Graphic Card",
    price: 100,
    detail: "this is product A and it is a multiple tasker",
  },{
    id: 1,
    item: "Graphic Card",
    price: 100,
    detail: "this is product A and it is a multiple tasker",
  },{
    id: 1,
    item: "Graphic Card",
    price: 100,
    detail: "this is product A and it is a multiple tasker",
  },
  {
    id: 2,
    item: "Pair of T-shirt",
    price: 25,
    detail: "Product 'B', Only few avaliable",
  },
  {
    id: 3,
    item: "Mobile Phone",
    price: 300,
    detail:
      "Mobile, Screen 6.7, battery 5200mAh, Android 10, Ram 6GB, Memory 128GB",
  },
];

function ProductItems() {
  return (
    <section className="ProductItems">
      {productData.map((data) => (
        <ProductsLayout
          item={data.item}
          price={data.price}
          detail={data.detail}
        ></ProductsLayout>
      ))}
    </section>
  );
}
export default ProductItems;
