const HelloAction = (newText) => {
  console.log('from HelloAction.js');
  return {
    type: 'CHANGE_TEXT',
    text: newText
  }
}

export default HelloAction;
