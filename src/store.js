import { createStore } from 'redux'

const initialState = {
    images: [],
    imageId: 0,
}




//Define reducers
const reducer = (state, action) => {
    //Accepts current state and an action and returns the new state
    switch (action.type) {
        case 'set_images':
        return {...state, images: action.images}
        case 'set_imageId':
        return {...state, imageId: action.imageId}
    default:
        console.log(`Redux reducer: Action ${action.type} does not exist.`)
        return state
    }
}



export default createStore(reducer, initialState) 