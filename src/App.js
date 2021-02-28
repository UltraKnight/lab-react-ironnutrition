import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import NewFoodForm from './components/NewFoodForm';
import SearchBar from './components/SearchBar';
import FoodList from './components/FoodList';

let foodsData = foods;

class App extends React.Component {
  state = {
    showForm: false,
    foods: foodsData,
    foodList: []
  }

  handleDisplayForm = () => {
    this.setState(prev => ({
        showForm: !prev.showForm
    }))
  }

  //add a new food
  addNewFood = (newFood) => {
    foodsData.push(newFood);
    this.setState(prev => ({
      foods: prev.foods.concat(newFood)
    }))
  }

  //add a food to today's food
  handleAddFood = (food) => {
    const {foodList} = this.state;
    let foodData = {...food};
    let index = foodList.findIndex(item => item.name === foodData.name);
    if(index >= 0) {
      foodList[index].quantity += Number(foodData.quantity);
      foodList[index].calories = foodData.calories * foodList[index].quantity;
      this.setState({
        foodList: foodList
      })
    } else {
      foodData.quantity = Number(foodData.quantity);
      foodData.calories *= foodData.quantity;
      this.setState({
        foodList: foodList.concat(foodData)
      })
    }
  }

  handleRemoveFood = (index) => {
    let {foodList} = this.state;
    foodList.splice(index, 1);
    this.setState({
      foodList: foodList
    })
  }

  handleFilter = (searchQuery) => {
    let foods = [...foodsData];
    this.setState({
      foods: foods.filter(food => food.name.toLowerCase().includes(searchQuery.toLowerCase()))
    })
  }

  updateQuantity = (food) => {
    const index = foodsData.indexOf(food);
    if(index >= 0) {
      foodsData[index].quantity = food.quantity;
      let updatedFoods = [...foodsData];

      this.setState({
        foods: updatedFoods
      })
    }
  }

  render() {
    const {showForm, foods, foodList} = this.state;
    return (
      <div className="App container is-fluid">
        <h1 className='title is-1'>IronNutrition</h1>
        <SearchBar filter={this.handleFilter} />
        <div className='main is-flex is-justify-content-flex-start'>
          <div className='mt-5'>
            {
              foods.map((food, i) => {
                return <FoodBox updateQuantity={this.updateQuantity} handleAddFood={this.handleAddFood} key={i} food={food} />
              })
            }
            <button onClick={this.handleDisplayForm} className="button is-info mb-3 mt-3">Add new Food</button>
          </div>
          <div>
            <NewFoodForm newFood={this.addNewFood} handleDisplayForm={this.handleDisplayForm} showForm={showForm} />
            <FoodList removeFood={this.handleRemoveFood} foodList={foodList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;