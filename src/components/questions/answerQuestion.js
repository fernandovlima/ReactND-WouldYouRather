import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAllQuestionsAPI,
  handleSaveQuestionAnswer
} from '../../actions/questions';
import { Form, Button, ProgressBar, Row, Col } from 'react-bootstrap';

class AnswerQuestion extends Component {
  state = {
    selectedOption: 'optionOne'
  };

  componentDidMount() {
    const { authedUser, dispatch, history } = this.props;

    dispatch(getAllQuestionsAPI());

    typeof authedUser === 'undefined' &&
      history.push({
        pathname: '/',
        state: { unAuth: true }
      });
  }

  handleOptionChange = e => {
    const value = e.target.value;
    this.setState({ selectedOption: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { id_question, authedUser, dispatch } = this.props;
    const answer = this.state.selectedOption;

    dispatch(handleSaveQuestionAnswer(authedUser, id_question, answer));
  };

  render() {
    const {
      questionOK,
      answer,
      isAnswered,
      voteOne,
      voteTwo,
      voteTotal,
      loading,
      avatarURL
    } = this.props;

    return (
      <div>
        {!loading ? (
          <div className='container'>
            <div>
              <div className='question-user'>
                <h5>Asked by {questionOK.author} </h5>
                <img src={avatarURL} alt='avatar' />
              </div>

              <h5>Would you rather</h5>

              {isAnswered ? (
                <div className='answered-question'>
                  <div className='answer-option'>
                    <span>Would you rather {questionOK.optionOne.text} ?</span>
                    <ProgressBar
                      now={(voteOne / voteTotal) * 100}
                      label={`${Math.floor((voteOne / voteTotal) * 100)}%`}
                      variant={isAnswered ? 'success' : 'info'}
                    />
                    <p>{`${voteOne} of ${voteTotal} votes! ${answer ===
                      'optionOne' && ` (your answer!)`}`}</p>
                  </div>
                  <div className='answer-option'>
                    <span>Would you rather {questionOK.optionTwo.text} ? </span>
                    <ProgressBar
                      now={(voteTwo / voteTotal) * 100}
                      label={`${Math.floor((voteTwo / voteTotal) * 100)}%`}
                      variant={isAnswered ? 'success' : 'info'}
                    />
                    <p>{`${voteTwo} of ${voteTotal} votes! ${answer ===
                      'optionTwo' && ` (your answer!)`}`}</p>
                  </div>
                </div>
              ) : (
                <Form onSubmit={this.handleSubmit}>
                  <Row className='justify-content-md-center'>
                    <Col md='auto'>
                      <Form.Check
                        type='radio'
                        label={questionOK.optionOne.text}
                        value='optionOne'
                        id='optionOne'
                        checked={this.state.selectedOption === 'optionOne'}
                        onChange={this.handleOptionChange}
                      />
                    </Col>
                  </Row>
                  <Row className='justify-content-md-center'>
                    <Col md='auto'>
                      <Form.Check
                        type='radio'
                        value='optionTwo'
                        label={questionOK.optionTwo.text}
                        id='optionTwo'
                        checked={this.state.selectedOption === 'optionTwo'}
                        onChange={this.handleOptionChange}
                      />
                    </Col>
                  </Row>
                  <Button type='submit' onClick={this.handleSubmit}>
                    SUBMIT
                  </Button>
                </Form>
              )}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store, props) => {
  const { questions, user } = store;
  const { authedUser } = user;
  console.log('teste authed: ', user[authedUser]);
  const id_question = props.match.params.question_id;
  const questionOK = questions[id_question];

  const answers =
    Object.keys(user).length !== 0 ? user[authedUser].answers : {};
  const loading = typeof questionOK === 'undefined' ? true : false;

  const avatarURL =
    Object.keys(store.user).length !== 0 ? store.user[authedUser] : '';

  let voteOne,
    voteTwo,
    voteTotal = 0;
  if (!loading) {
    voteOne = questionOK.optionOne.votes.length;
    voteTwo = questionOK.optionTwo.votes.length;
    voteTotal = voteOne + voteTwo;
  }

  return {
    questions,
    id_question,
    questionOK,
    authedUser,
    voteOne,
    voteTwo,
    voteTotal,
    answer: answers[id_question],
    isAnswered: typeof answers[id_question] !== 'undefined' ? true : false,
    loading,
    avatarURL
  };
};
export default connect(mapStateToProps)(AnswerQuestion);
