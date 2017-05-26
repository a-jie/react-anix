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
  anis={[
  { left:'20px', time:.5, delay:3, play:this.state.play },
  { color:'#ffcccc', time:.5, onComplete:this.aniComplete.bind(this), appear:true },
  { color:'#ffcccc', time:.5, ease:'easeInOutBack', disAppear:true },
  { color:'#ffcccc', time:.5, play:'disAppear' },
  { time:.5, appear:true ,from:{ width:'20px' }, to: { width:'220px', delay:.1 }}
  ]}
	
  or 
  ani={{ left:'20px', time:.5, play:this.state.play }}
  
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