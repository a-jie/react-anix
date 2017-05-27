import React, { Component } from 'react';
import { Anix } from 'test-react-anix';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      play: false,
      items: ['a']
    }
  }

  aniComplete() {
    console.log('over');
  }

  click(action) {
    switch (action) {
      case 'play':
        this.setState({ play: true });
        break;

      case 'appear':
        this.setState({ items: this.state.items.concat(['x']) });
        break;

      case 'disAppear':
        var items = this.state.items;
        items.shift();
        this.setState({ items: items });
        break;
    }

  }

  bgColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  render() {
    let items = this.state.items.map((item, i) => (
      <div className="rect" key={i}></div>
    ));

    let color = this.bgColor();

    return (
      <div>
        <h1>Test React Anix</h1>
        <div className="btngroup">
          <button className="btn btn-primary btn-default" onClick={this.click.bind(this, 'play')}>play all</button>
          <button className="btn btn-primary btn-default" onClick={this.click.bind(this, 'appear')}>appear</button>
          <button className="btn btn-primary btn-default" onClick={this.click.bind(this, 'disAppear')}>disAppear</button>
        </div>

        <Anix
          anis={[
            { left: '120px', background: '#000', time: .5 },
            { background: color, width: 0, time: .5, onComplete: this.aniComplete.bind(this), disAppear: true },
            { time: .5, from: { width: '0px' }, to: { width: '350px', background: color, delay: .1 }, appear: true }
          ]}

          play={this.state.play}
        >
          {items}
        </Anix>

      </div>
    );
  }

}
