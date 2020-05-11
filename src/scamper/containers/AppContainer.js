import React from 'react'
import { connect } from 'react-redux'
import Opening from '../presentationals/Opening'
import Interaction from '../presentationals/Interaction'
import ResultView from '../presentationals/ResultView'
import { start, toggleResult, initiate } from '../actions'
import data from '../constants'
import 'semantic-ui-css/semantic.min.css';


class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillUnmount() {
    this.props.initiate();
  }

  render() {
    let description = data[this.props.appType];

    if ( this.props.isStart === false ) {
      return(
          <Opening title={description.title} description={description.description} onStartButtonClick={this.props.onStartButtonClick} />
      )
    } else if ( this.props.indexMain === description.body.length ) {
      return (
          <ResultView ideas={this.props.ideas} index={this.props.indexResult} onToggleResultButtonClick={this.props.onToggleResultButtonClick} descriptionBody={description.body} />
      )
    } else {
      const theme = description.body[this.props.indexMain].title;
      const question = description.body[this.props.indexMain].description;

      return  (
          <Interaction theme={theme} question={question} />
      )
    }
  }
}

const mapStateToProps = (state) => (
  {
    isStart: state.home.isStart,
    indexMain: state.main.index,
    ideas: state.main.ideas,
    indexResult: state.result.index,
  })

const mapDispatchToProps = ({
  onStartButtonClick: start,
  onToggleResultButtonClick: toggleResult,
  initiate,
})

AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default AppContainer
