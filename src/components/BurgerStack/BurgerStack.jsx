const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {stack.map(ingredient => (
          <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(ingredient.name)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;