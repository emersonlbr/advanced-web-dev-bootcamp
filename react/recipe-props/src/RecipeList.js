import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
            title="Advice" 
            ingridients={['water', 'flour']}
            instructions="Mix ingredients"
            img="https://picsum.photos/200/300/?random"
          />

          <Recipe
            title="Desert" 
            ingridients={['no water', 'Dying', 'Try to survive']}
            instructions="Try to walk at night and sleep during the day. No matter what you do you'll end up dying cause there's no one to save you."
            img="https://picsum.photos/200/300/"
          />

          <Recipe
            title="Life and Everything" 
            ingridients={['bla', 'learn to code', 'buy food bro']}
            instructions="since you suck cooking just buy the fucking food"
            img="https://picsum.photos/200/"
          />
      </div>
    );
  }
}

export default RecipeList;