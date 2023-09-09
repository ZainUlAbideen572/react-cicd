import classes from'./Availablemealsmodule.css'
import Mealitem from './Mealitem/Mealitem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'biryani',
      description: 'Hyderbadi dum biryani' ,
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'burger',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  const Availablemeals=()=>{
    const mealslist=DUMMY_MEALS.map(meal=><Mealitem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
    return <section className={classes.meals}>
     <ul>
        {mealslist}
     </ul>
    </section>
  }
  export default Availablemeals;