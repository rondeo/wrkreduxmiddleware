import React,{Component} from 'react';
import {connect} from 'react-redux'
import {itemsFetchData} from '../actions/items'


class ItemList extends Component {

  componentDidMount(){
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
  }

	render(){
		if(this.props.hasErrored){
			return <p>Error!</p>
		}
		if(this.props.isLoading){
			return <p>Loading..</p>
		}
		return(
			<ul>
				{
					this.props.items.map((item) => 
						<li key={item.id}>{item.label}</li>
					)
				}
			</ul>
			)
	}
}

const mapStateToStore = (state) => {
	return{
		items: state.items,
		hasErrored: state.hasErrored,
		isLoading: state.isLoading,
	}	
}

const mapDispathToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(itemsFetchData(url))
	}
} 

export default  connect(mapStateToStore, mapDispathToProps)(ItemList)