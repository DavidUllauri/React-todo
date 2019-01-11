import React from "react";
import InputForm from "./InputForm";

const ListItem = ({ value, onDelete, onComplete}) => (
	<div>
		<ul>
			<li onClick="onComplete"></li>
		<ul>
	</div>
);

// class ListItem extends Component{
// 	  render(){
// 		return(
// 			<div>
// 			   <ul>
//
// 			   </ul>
// 			</div>
//
//
// 		);
// 	}
// }

	export default ListItem;
