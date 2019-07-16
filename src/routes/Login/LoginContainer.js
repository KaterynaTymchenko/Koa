import { connect } from 'react-redux';
import { loginUser } from '../../redux/IdeasList/IdeasListAction';

const mapDispatchToProps = { loginUser };

export default connect(
  null,
  mapDispatchToProps,
);
