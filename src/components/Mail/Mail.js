import { IconButton } from '@material-ui/core';
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

import './Mail.css';

const Mail = () => {
  const history = useHistory();

  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_tools_left">
          <IconButton onClick={() => history.push('/')}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail_tools_right">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_body_header">
          <h2>Subject</h2>
          <LabelImportant className="mail_important" />
          <p>Title</p>
          <p className="mail_time">10:00pm</p>
        </div>
        <div className="mail_message">
          <p>This is a message</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
