import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  MessagingService,
  ResponseMessage,
  WindowIframeDestination as Destination,
} from 'alpheios-messaging';
import { buildQueryString } from '../../lib/params';

const config = {
  name: 'treebank',
  targetIframeID: 'string-not-used',
  targetURL: 'string-not-used',
  commModes: [Destination.commModes.RECEIVE],
};

const error = (request, message, code) => ResponseMessage.Error(request, new Error(message), code);

const redirectLink = ({ wordIds, sentenceId }) => {
  const query = buildQueryString({ w: wordIds });

  if (query === '') {
    return sentenceId;
  }

  return `${sentenceId}?${query}`;
};

class TreebankService extends Component {
  constructor(props) {
    super(props);

    this.state = { redirectTo: null };
    this.messageHandler = this.messageHandler.bind(this);
  }

  componentDidMount() {
    this.destination = new Destination({ ...config, receiverCB: this.messageHandler });
    this.service = new MessagingService('treebank-service', this.destination);
  }

  componentWillUnmount() {
    this.destination.deregister();
  }

  messageHandler(request, responseFn) {
    const { loaded } = this.props;
    const { body } = request;
    const [name] = Object.keys(body);

    if (!loaded) {
      responseFn(error(request, 'Treebank is not loaded', ResponseMessage.errorCodes.SERVICE_UNINITIALIZED));
      return;
    }

    try {
      switch (name) {
        case 'gotoSentence':
          this.setState({
            redirectTo: redirectLink(body.gotoSentence),
          });

          responseFn(ResponseMessage.Success(request, { status: 'success' }));
          break;
        case 'getMorph':
          responseFn(error(request, `Unsupported request: ${name}`, ResponseMessage.errorCodes.UNKNOWN_REQUEST));
          break;
        case 'refreshView':
          responseFn(error(request, `Unsupported request: ${name}`, ResponseMessage.errorCodes.UNKNOWN_REQUEST));
          break;
        case 'findWord':
          responseFn(error(request, `Unsupported request: ${name}`, ResponseMessage.errorCodes.UNKNOWN_REQUEST));
          break;
        default:
          responseFn(error(request, `Unsupported request: ${name}`, ResponseMessage.errorCodes.UNKNOWN_REQUEST));
      }
    } catch (err) {
      responseFn(ResponseMessage.Error(request, err, ResponseMessage.errorCodes.INTERNAL_ERROR));
    }
  }

  render() {
    const { redirectTo } = this.state;

    return (
      redirectTo && <Redirect to={redirectTo} />
    );
  }
}

TreebankService.propTypes = {
  loaded: PropTypes.bool.isRequired,
};

export default TreebankService;
