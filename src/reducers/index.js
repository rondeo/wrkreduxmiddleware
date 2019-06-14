import {combineReducers} from 'redux'
import {itemsHasErrored, itemsIsLoaded, items} from './items'

export default combineReducers({
	itemsHasErrored,
	itemsIsLoaded,
	items
})