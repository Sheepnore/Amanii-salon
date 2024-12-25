import "../../styles/Products.css";
import CaptionCard from "./CaptionCard";
import productPic from "../../assets/napla-product2.png";
function Products() {
  const captionCardText = [
    "Napla品牌長期使用",
    "Napla合作商家",
    "使用N系列產品護髮",
    "店內使用Naseed染膏",
  ];

  return (
    <div className="Products" id="products">
      <div className="product-text-container">
        <h1 className="heading-text">
          堅持使用日本製沙龍產品，
          <p className="subtext">有效降低髮質傷害</p>
        </h1>
        <div className="card-container">
          {captionCardText.map((text, i) => (
            <CaptionCard key={text}>
              <div>{`0${i + 1}.`}</div>
              {text}
            </CaptionCard>
          ))}
        </div>
      </div>
      <div className="img-container">
        <img src={productPic} alt="napla-product-pic" />
      </div>
    </div>
  );
}
export default Products;
