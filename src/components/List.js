import React from 'react'
import Topic from './Topic'

const List = ({ topics, show, subs, changeOption, sendAnswers }) => {

/*if(sub.length !== 0) {
let array = []
Object.keys(sub).forEach(function (key) {
	if (typeof sub[key] === 'object'){
		array.push(sub[key])
	}
})
}*/

	return (
		<div>
		<h2>This is a List</h2>
		<form onSubmit={sendAnswers}>
		{topics.map((topic, i) => <Topic key={i} topic={topic} show={show} subs={subs} 
		 changeOption={changeOption}></Topic>)}
		 <button type="submit">send answers</button>
		 </form>
		</div>
		)
}

export default List
