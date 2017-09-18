import React from 'react';

class CoordinatesButton extends React.Component {
	button = (event) => {
		this.props.onReceiveCoordinates([event.pageX, event.pageY])
			}
	render () {
		return(
			<button onClick={this.button}>Submit</button>
			)
	}
}

export default CoordinatesButton