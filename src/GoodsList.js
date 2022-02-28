import React from 'react';

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Nothing was found</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodsList };

function GoodsItem(props) {
    const {
        id,
        name,
        brand,
        price,
        api_featured_image,
        addToBasket = Function.prototype,
    } = props;

    const brandName = brand? brand : name.split(' ')[0] + ' ' + name.split(' ')[1];
    const titleLower = (name.toLowerCase().slice(0,5) === brandName.slice(0,5))?  name.toLowerCase().replace(brandName,'') : name.toLowerCase();
    const title = name.slice(name.length-titleLower.length).replace('&trade;','').replace('#','');

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={api_featured_image} alt={name} />
            </div>
            <div className='card-content'>
                <p>{brandName}</p>

                <span className='card-title'> {name.length<25? name.replace('#',''): title} </span>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {70*Math.ceil(price+1)} руб.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };