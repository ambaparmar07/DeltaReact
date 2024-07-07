import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [
        ["8,000 DPI", "5 Programmable buttons"],
        ["intutive surface", "designed for iPad Pro"],
        ["designed for iPad Pro", "intutive surface"],
        ["wireless", "optical orientation"],
    ];
    //const list = features.map((feature) => <li>{feature}</li>)
    // let isDiscount = price > 30000;
    // let styles= {backgroundColor: isDiscount ? "pink" : ""};
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;