// reducers/items

export function itemsHasErrored(state = false, action){
	switch(action.type){
		case 'ITEMS_HAS_ERRORED': 			
			return action.itemsHasErrored
		default:
			return state
	}
}

export function itemsIsLoaded(state = false, action){
	switch(action.type){
		case 'ITEMS_IS_LOADING':
			return action.isLoading
		default:
			return state		
	}
}

export function items(state = [], action){
	switch(action.type){
		case 'ITEMS_FETCH_DATA_SUCCESS':
			return action.items
		default:
			return state
	}
}