import { connect } from 'react-redux';
import { getDataIdeas } from '../../redux/IdeasList/IdeasListAction';

const mapStateToProps = (state, ownProps) => ({
  idea: state.ideas.ideas.find(item => item.id === +ownProps.match.params.id),
});

const mapDispatchToProps = { getDataIdeas };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
