import React, { useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

// Main Ingredients component
const Ingredients = () => {
  // State to hold the user's ingredients
  const [userIngredients, setUserIngredients] = useState([]);

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  }, []);

  // Function to add a new ingredient to the list
  const addIngredientHandler = (ingredient) => {
    fetch(
      "https://react-hooks-update-4a3bc-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  // Function to remove an ingredient from the list
  const removeIngredientHandler = (id) => {
    setUserIngredients((prevIngredients) => {
      return prevIngredients.filter((ingredient) => ingredient.id !== id);
    });
  };

  // Render the component
  return (
    <div className="App">
      {/* Render the IngredientForm component */}
      <IngredientForm onAddIngredient={addIngredientHandler} />

      {/* Render a section with the Search component and the IngredientList component */}
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {/* Render the IngredientList component with the user's ingredients */}
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

// Export the Ingredients component
export default Ingredients;
