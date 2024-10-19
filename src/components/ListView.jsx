

import PropTypes from 'prop-types'

export const ListView = ({ products }) => {
    return (
        <div className="list-view">
            {products.map((item, index) => {
                return (
                    <div className="list-item" key={index}>
                        <div className="list-item-content">
                            <div className="list-item-img">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <h3 className="list-item-title">{item.name}</h3>
                            <p className="list-item-color">{item.color}</p>
                            <p className="list-item-price">${item.price}</p>

                            <button>add to cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

ListView.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
}

