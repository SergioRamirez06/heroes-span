import { heroes } from "../Data/heroes";
import { Hero } from "../Pages/Hero";


export const getHeroesByName = ( name = '') => {
    name.toLocaleLowerCase().trim()
    if( name === 0 ) return [];
    return heroes.filter( Hero => Hero.superhero.toLocaleLowerCase().includes( name )); 
}
