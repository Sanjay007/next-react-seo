import { createStore } from 'redux'

export const actionTypes = {}

const initialState = {
    products: [
        {
            name: 'Hat',
            price: 20,
            description: 'Razor blades not included',
            image: 'https://i10.dainikbhaskar.com/thumbnails/730x548/web2images/www.bhaskar.com/2019/09/01/0521_raipur_trafic_police.jpeg',
            id: 1
        },{
            name: 'Irish Whiskey',
            price: 55,
            description: 'From the finest producers in Ireland',
            image: 'https://snipcart.com/media/203633/whiskey-bottle.jpg',
            id: 2
        },{
            name: 'Race horse',
            price: 2075,
            description: "We'll even make sure he wins. Everytime.",
            image: 'https://snipcart.com/media/203632/race-horse.png',
            id: 3
        }
    ]
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export function initializeStore (initialState = initialState) {
  return createStore(reducer, initialState)
}
