import { connect } from 'react-redux';

const mapStateToProps = state => ({
  error: state.error.haveError,
});

export default connect(mapStateToProps);
