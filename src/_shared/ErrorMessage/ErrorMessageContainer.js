import { connect } from 'react-redux';

const mapStateToProps = state => ({
  error: state.ideas.haveError,
});

export default connect(mapStateToProps);
