import { connect } from 'react-redux';
import { getDataIdeas } from '../../redux/IdeasList/IdeasListAction';

const mapStateToProps = state => ({
  ideas: state.ideas.ideas,
});

const mapDispatchToProps = { getDataIdeas };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
