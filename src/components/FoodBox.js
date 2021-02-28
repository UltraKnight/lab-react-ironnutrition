import React, { Component } from 'react';
import './FoodBox.css';

export default class FoodBox extends Component {
    handleChange = (e) => {
        const {food, updateQuantity} = this.props;
        food.quantity = e.target.value;

        updateQuantity(food);
    }

    componentDidMount() {
        const {food} = this.props;
        food.quantity = 1;
    }

    render() {
        const {food, handleAddFood} = this.props;

        return (
            <div className="box">
            <article className="media is-flex is-align-items-center">
                <div className="media-left">
                <figure className="image is-64x64 is-flex">
                    <img src={food.image} alt={food.name} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" onChange={this.handleChange} name='quantity' type="number" defaultValue='1' min='1' max='99' />
                    </div>
                    <div className="control">
                    <button onClick={() => handleAddFood(food)} className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
            </div>
        )
    }
}
