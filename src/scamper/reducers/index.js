/**
 * index: ページ番号
 * ideas: 保存されたテキスト
 */
import { combineReducers } from 'redux'
import { createStore as reduxCreateStore } from "redux"

const home = (state = { isStart : false }, action) => {
  switch (action.type) {
  case 'START':
    return { isStart : true };
  case 'INITIATE':
    return { isStart : false };
  default:
    return state;
  }
}

const initialData = {
  index: 0,
  ideas: [],
  text: '',
}

const main = (state = initialData, action) => {
  switch (action.type) {
  case 'SUBMIT':
    let log = state.ideas.concat()
    log.push({
      index: state.index,
      ideas: action.text
    })
    return {
      index: state.index + 1,
      ideas: log,
      text: ''
    }
  case 'INPUT_TEXT':
    return {
      ...state,
      text: action.text
    }
  case 'INITIATE':
    return initialData;
  default:
    return state
  }
}

const result = (state = { index: 0 }, action ) => {
  switch (action.type) {
  case 'TOGGLE_RESULT':
    return {
      index: state.index + 1,
    }
  case 'INITIATE':
    return { index: 0 };
  default:
    return state
  }
}

const scamperApp = combineReducers({
  home,
  main,
  result,
})

const createStore = () => reduxCreateStore(
  scamperApp,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // 開発用サーバでのみ使用可能
)

export default createStore
