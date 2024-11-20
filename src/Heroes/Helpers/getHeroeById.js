
import { heroes } from '../Data/heroes'

export const getHeroeById = ( id ) => {
    return heroes.find( hero => ( hero.id === id ) )
}