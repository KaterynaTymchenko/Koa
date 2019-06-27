import { connect } from 'react-redux';
import {
  getDataIdeas,
  updateDataIdea,
  deleteDataIdea,
} from '../../redux/IdeasList/IdeasListAction';

const mapStateToProps = (state, ownProps) => ({
  idea: state.ideas.ideas.find(item => item.id === +ownProps.match.params.id),
});

const mapDispatchToProps = { getDataIdeas, updateDataIdea, deleteDataIdea };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
