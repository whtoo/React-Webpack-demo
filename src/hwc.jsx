import React from 'react';

export default class HelloWorldComponent extends React.Component {
    constructor() {
        super();
        this.state = { messages: ["john","arish","volker"]};
    }

    getInitialState() {
      console.log('answer me!');
    }

    render() {
        return (

          <div><ul>{this.state.messages.map((v) => (<li>{v}</li>))}</ul></div>

        );
    }
}
