import React from 'react';

class DelayedButton extends React.Component {
	button = (event) => {
		event.persist()
		return setTimeout(()=> this.props.onDelayedClick(event), this.props.delay)
			}
	render () {
		return(
			<button onClick={this.button}>Submit</button>
			)
	}
}

export default DelayedButton