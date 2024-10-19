
import PropTypes from 'prop-types'

export const CardsView = (props) => {
    return (
        <div className="cards-view">
            {props.products.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <h3 className="card-title">{item.name}</h3>
                        <p className="card-color">{item.color}</p>
                        <div className="card-img">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="card-content">
                            <p className="card-price">${item.price}</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

CardsView.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired
}

