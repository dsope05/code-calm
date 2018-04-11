import { connect } from 'react-redux';

const generateAlgorithmContainer = connect((state) => {
  console.log('state', state);
  return {

  }
}, (dispatch) => {
  return {
    changeName: () => {
      dispatch({
      });
    }
  };
});

export default generateAlgorithmContainer;
