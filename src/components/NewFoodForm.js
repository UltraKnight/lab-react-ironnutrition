import React, { Component } from 'react';
import './NewFoodForm.css';

export default class NewFoodForm extends Component {
    state = {
        name: '',
        calories: 50,
        image: '',
        quantity: 0
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name] : value
        })
    }

    //form submit
    addNewFood = (e) => {
        e.preventDefault();
        const {newFood, handleDisplayForm} = this.props;
        let {name, calories, image} = e.target.elements;
        let food = {name: name.value, calories: calories.value, image: image.value}
        newFood(food);
        handleDisplayForm();
       
        //reset the form by reseting the state once they're bound with each other
        this.setState({
            name: '',
            calories: 50,
            image: '',
            quantity: 0
        })
    }

    render() {
        const {handleDisplayForm, showForm} = this.props;
        const {name, calories, image} = this.state;
        return (
            <div className={'modal' + (showForm ? ' is-active' : '')}>
                <div className="modal-background"></div>
                <div className="modal-content box" style={{backgroundColor: 'white'}}>
                    <h1 className='title is-2 mt-3'>New Food</h1>
                    <form className='is-clipped p-5' onSubmit={this.addNewFood}>
                        <div className="field">
                            <label className="label" htmlFor='name'>Name</label>
                            <div className="control">
                                <input className="input" onChange={this.handleChange} id='name' name='name' type="text" value={name} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor='calories'>Calories</label>
                            <div className="control">
                                <input className="input" onChange={this.handleChange} type="number" id='calories' name='calories' min='1' max='5000' value={calories} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor='image'>Image URL</label>
                            <div className="control">
                                <input className="input" onChange={this.handleChange} id='image' name='image' type="text" value={image} />
                            </div>
                        </div>
                        <div className='buttons is-justify-content-space-around'>
                            <button type='submit' className="button is-primary">Add Food</button>
                            <button type='button' onClick={handleDisplayForm} className="button is-danger">Cancel</button>
                        </div>
                    </form>
                </div>
                <button onClick={handleDisplayForm} className="modal-close is-large" aria-label="close"></button>
            </div>
        )
    }
}
