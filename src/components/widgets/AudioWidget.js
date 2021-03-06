import React from 'react';
import { updateWidget, deleteWidget, moveWidget } from '../../actions/widgetActions';
import { connect } from 'react-redux';

class AudioWidget extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: '#2D3339', padding: '10px', margin: '0px 10px 10px 10px', borderRadius: '7px', minHeight: '20px'}}>
                <div style={{textAlign: 'left', margin: '0px 10px 20px 0px'}}>
                    <p style={{float: 'left', color: 'white', fontWeight: 'bolder'}}>{this.props.widget.type}</p>
                    <div style={{float: 'right'}}>
                        <i onClick={this.props.moveWidget} id={this.props.widget.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} className="fas fa-arrow-up"></i>
                        <i onClick={this.props.moveWidget} id={this.props.widget.id} style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 5px 0px 5px'}} className="fas fa-arrow-down"></i>
                        <i style={{color: 'lightgrey', cursor: 'pointer', margin: '0px 0px 0px 5px'}} class="fas fa-trash-alt" onClick={this.props.deleteWidget} id={this.props.widget.id}></i>
                    </div>
                </div>
                <select onChange={this.props.updateWidget} style={{border: 'none', height: '20px', width: '120px', margin: '10px 0px 0px -20px'}} id={this.props.widget.id}>
                    <option value="Adventure" selected={this.props.widget.value === "Adventure"}>Adventure</option>
                    <option value="New Dawn" selected={this.props.widget.value === "New Dawn"}>New Dawn</option>
                    <option value="Once Again" selected={this.props.widget.value === "Once Again"}>Once Again</option>
                    <option value="Piano Moment" selected={this.props.widget.value === "Piano Moment"}>Piano Moment</option>
                    <option value="Slow Motion" selected={this.props.widget.value === "Slow Motion"}>Slow Motion</option>
                    <option value="Tomorrow" selected={this.props.widget.value === "Tomorrow"}>Tomorrow</option>
                </select>
                <p style={{color: 'white', fontSize: '11px', marginTop: '5px'}}>Audio retrieved from https://www.bensound.com</p>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      widgetDetails: state.widgetDetails
    }
}

export default connect(mapStateToProps, { updateWidget, deleteWidget, moveWidget })(AudioWidget);