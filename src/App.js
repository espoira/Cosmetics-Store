import React, { Component } from 'react';

import { Categories } from './Categories';
import { Shop } from './Shop';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";


// don't change the Component name "App"
class App extends Component {
    constructor(){
        super();
        this.state = {
            flag: false,
            typeName: '',
            categories:[
                { id: 1, name: 'Румяна', image: "img/blush.png" },
                { id: 2, name: 'Помада и блеск для губ', image: "img/lipstick.png" },
                { id: 3, name: 'Тональная основа', image: "img/foundation.png" },
                { id: 4, name: 'Лак для ногтей', image: "img/nail_polish.png" },
                { id: 5, name: 'Уход за бровями', image: "img/eyebrow.png" },
                { id: 6, name: 'Тушь для ресниц', image: "img/mascara.png" },
                { id: 7, name: 'Подводка для глаз', image: "img/eyeliner.png" },
                { id: 8, name: 'Обводка контура губ', image: "img/lip_liner.png" },
                { id: 9, name: 'Тени для век', image: "img/eyeshadow.png" },
                { id: 10, name: 'Бронзаторы', image: "img/bronzer.png" }
            ],
            order: [],
            alertName: '',
            isBasketShow: false,
            amount: 0,
        };
    };


    addToBasket = (item) => {
        const itemIndex = this.state.order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            this.setState({order: [...this.state.order, newItem]});
        } else {
            const newOrder = this.state.order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            this.setState({order:newOrder});
        }
        this.setState({alertName:item.name});
        this.setState({amount:this.state.amount + 1});
    };

    closeAlert = () => {
        this.setState({alertName:''});
    };

    removeFromBasket = (itemId) => {
        const newOrder = this.state.order.filter((el) => el.id !== itemId);
        this.setState({order: newOrder});
        //eslint-disable-next-line
        this.state.order.map ((orderItem) => {
            if (orderItem.id === itemId) {
                return this.setState({amount:this.state.amount - orderItem.quantity});
            }
        });
    };

    incQuantity = (itemId) => {
        const newOrder = this.state.order.map ((orderItem) => {
            if (orderItem.id === itemId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1,
                }
            } else {
                return orderItem;
            }
        });
        this.setState({order:newOrder});
        this.setState({amount:this.state.amount + 1});
    };

    decQuantity = (itemId) => {
        const newOrder = this.state.order.map ((orderItem) => {
            if (orderItem.id === itemId) {
                const newQuantity = orderItem.quantity - 1;
                (newQuantity >= 0) ? this.setState({amount:this.state.amount - 1}) : this.setState({amount:this.state.amount});
                return {
                    ...orderItem,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            } else {
                return orderItem;
            }
        });
        this.setState({order: newOrder});
    };


    handleBasketShow = () => {
        this.setState({isBasketShow: !this.state.isBasketShow});
    };

    showList = (id) => {
        this.setState ({flag: true});
        this.setState ({typeName: this.state.categories[id-1].image.slice(4).split('.')[0]});
    };

    goBack = () => {
        this.setState ({flag: false});
    };

    render() {
        const {flag, typeName, categories, order, alertName, isBasketShow, amount} = this.state;

        return (
            <>
                <Header/>
                <main className="container content">
                    {!flag?
                        (<Categories categories={categories} showList={this.showList}/>):
                        (<>
                           <Shop str={typeName} alertName={alertName} addToBasket={this.addToBasket} closeAlert={this.closeAlert}/>
                           <button className='btn back' onClick={this.goBack}> Назад </button>
                         </>
                        )
                    }
                </main>
                <Cart quantity={amount} handleBasketShow={this.handleBasketShow}/>
                {isBasketShow && (
                    <BasketList
                        order={order}
                        handleBasketShow={this.handleBasketShow}
                        removeFromBasket={this.removeFromBasket}
                        incQuantity={this.incQuantity}
                        decQuantity={this.decQuantity}
                    />
                )}
                <Footer/>
            </>
        );
    }
}

export default App;
