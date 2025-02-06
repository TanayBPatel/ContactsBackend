import React from "react";
import { Button, Input, Container, Header as SemanticHeader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const MyHeader = () => {
  return (
    <>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>Contacts Manager</h2>
        </div>
      </div>
    </>
  );
};

export default MyHeader;
