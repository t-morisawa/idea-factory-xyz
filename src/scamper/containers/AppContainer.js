import React from 'react'
import { connect } from 'react-redux'
import Opening from '../presentationals/Opening'
import Interaction from '../presentationals/Interaction'
import ResultView from '../presentationals/ResultView'
import LoaderExampleText from '../presentationals/LoadSampleText';
import { start, toggleResult } from '../actions'
import data from '../constants'
import 'semantic-ui-css/semantic.min.css';


let AppContainer = ({ isStart, indexMain, ideas, indexResult, onStartButtonClick, onToggleResultButtonClick, appType }) => {

  let description = data[appType];

  if ( isStart === false ) {
    return(
        <Opening title={description.title} description={description.description} onStartButtonClick={onStartButtonClick} />
    )
  } else if ( indexMain === description.body.length ) {
    return (
        <ResultView ideas={ideas} index={indexResult} onToggleResultButtonClick={onToggleResultButtonClick} descriptionBody={description.body} />
    )
  } else {
    const theme = description.body[indexMain].title;
    const question = description.body[indexMain].description;

    return  (
        <Interaction theme={theme} question={question} />
    )
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
})

AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default AppContainer