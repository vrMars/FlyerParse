import React, { Component } from "react";
import "./ItemList.css";
import Items from "./Items";
import Prices from "./PriceList";

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            prices: []
        };
        this.fetchPrices = this.fetchPrices.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return { 
                    items: prevState.items.concat(newItem) 
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    fetchPrices() {
        const items = this.state.items;
        if (items.length !== 0) {
            var urlEncoded = new URLSearchParams();
            
            for (const item of items) {
                urlEncoded.append("items", item.text);
            }

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            myHeaders.append("Access-Control-Allow-Origin", '*');

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlEncoded,
                redirect: 'follow',
            };

            fetch(
                'https://cors-anywhere.herokuapp.com/https://flyer-parse.herokuapp.com/', requestOptions
            )
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                    this.setState({prices: data})
                })
                .catch(console.log)
        }
    }

    render() {
        return (
            <div className="itemListMain">
                <div className="header">
                    <form>
                        <input ref={ (a) => this._inputElement = a } placeholder="enter item">
                        </input>
                        <button type="button" onClick={this.addItem}>add</button>
                        <button type="button" onClick={this.fetchPrices}>get prices!</button>
                    </form>
                </div>
                <Items entries={this.state.items} delete={this.deleteItem}/>
                {
                    this.state.prices && this.state.prices.map((product, i) =>
                        Array.isArray(product) ?
                        product.p.map((price, index) => 
                        <Prices key={index} price={price.p}/>
                        ) : <Prices key={i} price={product.p[0]}/>
                    )}
            </div>
        );
    }
}

export default ItemList;
