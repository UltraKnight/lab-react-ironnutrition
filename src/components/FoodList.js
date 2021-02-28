import React, { Component } from 'react';

export default class FoodList extends Component {
    getTotal = () => {
        const {foodList} = this.props;
        return foodList.reduce((accumulator, curr) => accumulator + curr.calories, 0);
    }

    render() {
        const {foodList, removeFood} = this.props;
        const total = this.getTotal();
        return (
            <div className='mt-5' style={{marginLeft: '100px'}}>
                <h2 className='title is-2'>Today's Food</h2>
                <ul>
                    {
                        foodList.map((food, i) => {
                            return (
                                <div key={i} className='is-flex is-justify-content-space-between is-align-items-center mb-3'>
                                    <li>{food.quantity} - {food.name} = {food.calories} cal</li>
                                    <button onClick={() => removeFood(i)} className='button ml-3 is-small is-rounded is-danger'>X</button>
                                </div>
                            )
                    })
                    }
                </ul>
                <p>Total {total} cal</p>
            </div>
        )
    }
}
