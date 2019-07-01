import { connect } from 'react-redux';
import {
  getDataIdeas,
  updateDataIdea,
  deleteDataIdea,
  getDataIdea,
} from '../../redux/IdeasList/IdeasListAction';

const mapStateToProps = (state, ownProps) => ({
  idea: state.ideas.ideas.find(item => item.id === +ownProps.match.params.id),
  ideaSingle: state.ideas.idea,
});

const mapDispatchToProps = {
  getDataIdeas,
  updateDataIdea,
  deleteDataIdea,
  getDataIdea,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
