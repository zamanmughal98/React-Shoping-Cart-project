import "./ProductsLayout.css";

function ProductsLayout(props) {
  function ProductsLayoutButtonListener() {
    let orderQuantity = document.querySelector(
      ".ProductsLayout-quantity-inp"
    ).value;

    let orderedItem = {
      name: props.item,
      price: props.price,
      quantity: orderQuantity,
    };

    if (orderQuantity > 0 && orderQuantity <= 5) {
      console.log(orderedItem);
    } else {
      alert("Maximin Quantity Limit Exceeded");
    }
  }
  return (
    <section className="ProductsLayout">
      <h1 className="ProductsLayout-name">
        Name:
        <p className="ProductsLayout-name-item">{props.item.toUpperCase()}</p>
      </h1>
      <h1 className="ProductsLayout-price">
        Price:<p className="ProductsLayout-price-itemPrice">{props.price}$</p>
      </h1>
      <p className="ProductsLayout-details">{props.detail}</p>
      <label className="ProductsLayout-quantity">Quantity</label>
      <input
        className="ProductsLayout-quantity-inp"
        type="number"
        max="5"
        min="1"
        placeholder="1-5"
      ></input>
      <br />
      <button
        className="ProductsLayout-button"
        onClick={ProductsLayoutButtonListener}
      >
        Order
      </button>
    </section>
  );
}
export default ProductsLayout;
