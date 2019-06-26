import { connect } from 'react-redux';
import { getDataIdeas, deleteDataIdea } from '../../redux/IdeasList/IdeasListAction';

const mapStateToProps = state => ({
  ideas: state.ideas.ideas,
});

const mapDispatchToProps = { getDataIdeas, deleteDataIdea };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
