import React from 'react';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Alert } from './Alert';
import {APP_URL} from './config'


class Shop extends React.Component {
    constructor(){
        super();
        this.state = {
            goods: [],
            loading: true,
        };
        this.addToBasket = this.addToBasket.bind(this);
    }


    componentDidMount() {
        fetch(`https://${APP_URL}type=${this.props.str}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({goods:data});
                this.setState({loading:false});
            });
    };


    render() {
        const {goods, loading} = this.state;
        const {alertName, addToBasket = Function.prototype, closeAlert = Function.prototype} = this.props;

        return (
            <div>
                {loading ? (
                    <Preloader/>
                ) : (
                    <GoodsList goods={goods} addToBasket={addToBasket}/>
                )}
                {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
            </div>
        );
    }
}

export {Shop};