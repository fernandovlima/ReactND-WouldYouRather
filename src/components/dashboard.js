import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllQuestionsAPI } from '../actions/questions';
//components
import QuestionPoll from './questions/questionPoll';
import { Button } from 'react-bootstrap';

class Dashboard extends Component {
  state = {
    showAnswered: false
  };

  componentDidMount() {
    const { authedUser } = this.props;
    if (typeof authedUser === 'undefined') {
      this.props.history.push('/');
    }
    this.props.dispatch(getAllQuestionsAPI());
  }

  handleClick = () =>
    this.setState(oldState => ({
      showAnswered: !oldState.showAnswered
    }));

  render() {
    const { answers, unanswered } = this.props;
    return (
      <div className='dashboard-question'>
        <div className='anwser-btns'>
          <Button
            className='btn'
            onClick={this.handleClick}
            disabled={this.state.showAnswered}
          >
            ANSWERED
          </Button>
          <Button
            className='btn'
            onClick={this.handleClick}
            disabled={!this.state.showAnswered}
          >
            UNANSWERED
          </Button>
        </div>
        {this.state.showAnswered ? (
          <QuestionPoll idQuestions={answers} />
        ) : (
          <QuestionPoll idQuestions={unanswered} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (store, props) => {
  const { authedUser } = store.user;
  const { questions } = store;
  const user = store.user[authedUser];
  //const isAuthed = typeof user === "undefined" ? false : true
  const unanswered = Object.keys(questions)
    .filter(id => typeof user.answers[id] === 'undefined')
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const answers =
    typeof user !== 'undefined' && typeof questions !== 'undefined'
      ? Object.keys(user.answers)
          .map(a => questions[a])
          .sort((a, b) => b.timestamp - a.timestamp)
          .map(q => typeof q !== 'undefined' && q.id)
      : {};

  return {
    authedUser: store.user.authedUser,
    answers,
    unanswered,
    user
  };
};
export default connect(mapStateToProps)(Dashboard);
