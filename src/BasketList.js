import React from 'react';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + 70*Math.ceil(el.price+1) * el.quantity;
    }, 0);

    return (
        <ul className='collection basket-list'>
            <li className='collection-item' id={'basket'}>Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item goods'>Корзина пуста</li>
            )}
            <li className='collection-item price'>
                Общая стоимость: {totalPrice} руб.
                <button className='order'>Оформить</button>
            </li>
            <span onClick={handleBasketShow}>
                <i className='material-icons basket-close'>
                    close
                </i>
            </span>
        </ul>
    );
}

export { BasketList };

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <li className='collection-item'>
            {name}{' '}
            <button>
                <i className='material-icons basket-quantity'
                    onClick={() => decQuantity(id)}>remove</i>
            </button>{' '}
            {quantity} шт.{' '}
            <button>
            <i className='material-icons basket-quantity'
                onClick={() => incQuantity(id)}>add</i>
            </button>{' '}
            = {70*Math.ceil(price+1) * quantity} руб.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}
