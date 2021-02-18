import '../App.css';
import SettingsBar from './SettingsBar';
import WeatherWidget from './widgets/WeatherWidget';
import Switch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';

class LinkTileView extends React.Component {
    render() {
        const theme = createMuiTheme({
            palette: {
              primary: {
                main: '#4495F6'
              }
            }
          });
        return (
            <div className="dashboard" style={{width: '100vw', height: '100vh', backgroundSize: 'cover', margin: '0', padding: '0', backgroundRepeat: 'no-repeat', backgroundColor: '#202124'}}>
            <SettingsBar />
            <div className="centered" style={{textAlign: 'center'}}>
              {this.props.linkTileDetails.tiles.map((tile) => {
                return (
                  <p>{tile.name}</p>
                )
              })}
            </div>
            <div style={{position: 'absolute', bottom: '0px'}}>
              <MuiThemeProvider theme={theme}>
                <Switch
                  
                  color="primary"
                  name="photoBackground"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </MuiThemeProvider>
            </div>
          </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
  return {
    photoDetails: state.photoDetails,
    linkTileDetails: state.linkTileDetails
  }
}

export default connect(mapStateToProps)(LinkTileView);