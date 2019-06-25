import { connect } from 'react-redux';
import { postDataIdea } from '../../redux/IdeasList/IdeasListAction';

const mapDispatchToProps = { postDataIdea };

export default connect(
  null,
  mapDispatchToProps,
);
