# react-anix

The Simplest Animation Plugin for react.

## Overview
AniX is an animation plugin for react.   

It is very simple and convenient to use. At the same time it has very good compatibility.   

## Install and Usage
Quick Start
Install and manage AniX with npm.

```
$ npm install react-anix --save
```

import and use the AniX library.

```
//1. import module
import { Anix } from 'react-anix';

<Anix 
  anis = {[
    { left: '120px', background: '#000', time: .5 },
    { background: color, width: 0, time: .5, onComplete: this.aniComplete.bind(this), disAppear: true },
    { time: .5, from: { width: '0px' }, to: { width: '350px', background: color, delay: .1 }, appear: true }
  ]}
	
  or 
  ani={{ left:'20px', time:.5, delay: 1 }}
  
  or 
  appear={{ left:'20px', time:.5 }}
  
  control animation play
  play={this.state.play}
  >
  ...
  </Anix>
```

## Test and Build

```
npm start
```
view on http://localhost:3000/

## License

[The BSD License](https://opensource.org/licenses/BSD-3-Clause).