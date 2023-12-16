import PriceCard from "../PriceCard/PriceCard";
import './Prices.scss';
import pricesData from '../../data/pricesData.json';



const Prices = () => {
    return (
        <section className="prices">
            <h3 className="prices__title">Prices</h3>
            <div className="prices__cards">
                {pricesData.map((card, index) => (
                    <PriceCard
                        key={index}
                        cardPic={card.pic}
                        cardText={card.text}
                        cardPrice={card.price}
                        isDiscount={card.isDiscount}
                        cardDiscountPrice={card.discountPrice}
                    />
                ))}
            </div>
        </section>
    )
}

export default Prices