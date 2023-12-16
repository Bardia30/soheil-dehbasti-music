import './PriceCard.scss';

const PriceCard = ({ cardPic, cardText, cardPrice, isDiscount, cardDiscountPrice }) => {
    return (
        <section className="price-card">
            <img className='price-card__img' src={cardPic} alt="card" />
            <h3 className='price-card__text'>{cardText}</h3>
            <section className='price-card__prices'>
                {isDiscount ? <h3 className='price-card__discount'>{cardDiscountPrice}</h3> : null}
                <h3 className='price-card__price'>{cardPrice}</h3>
            </section>

        </section>
    )
}

export default PriceCard