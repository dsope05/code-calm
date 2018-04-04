import { connect } from 'react-redux';

const generateCodeContainer = connect((state) => {
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

export default generateCodeContainer;
