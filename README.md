# react-anix

Super easy and lightweight transitions animation library for React.

## Overview

react-anix extended from the [AniX](https://github.com/a-jie/AniX) library. It is a lightweight and easy-to-use animation library for React with excellent performance and good compatibility for modern browsers.

It uses the native css transition attribute, better than js simulation animation performance. 

For more information and demo please see
[https://a-jie.github.io/AniX/](https://a-jie.github.io/AniX/).

## Install and Usage
Quick Start
Install and manage react-anix with npm.

```
$ npm install react-anix --save
```

import and use the react-anix library.

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

### Appear Animation
```
<Anix appear={{ left:'120px', time:.5 , delay:.1, ease:'easeBackOut'}}>
	{items}
</Anix>

or

let appear = {time: .5, from: { width: '0px' }, to: { width: '350px' }}
<Anix appear={appear}>
	{items}
</Anix>
```

### DisAppear Animation
```
onComplete(){}
...

<Anix disAppear={{ width:'0px', time:.5 , onComplete:this.onComplete.bind(this) }}>
	{items}
</Anix>
```

### Control Animation
```
<Anix ani={{ background:'#ffcc00', time:.5 }} play={this.state.play}>
	{items}
</Anix>

//control animation play
this.setState({ play:true });
```

### About anis prop
Appear DisAppear and Control ani  write together  

```
<Anix 
	anis = {[
    { left: '120px', background: '#000', time: .5 },
    { background: color, width: 0, time: .5, onComplete: this.aniComplete.bind(this), disAppear: true },
    { time: .5, from: { width: '0px' }, to: { width: '350px', background: color, delay: .1 }, appear: true }
  ]}
>
	{items}
</Anix>
```

### about init prop
The init prop is used to control whether the default initial child is animated
```
<Anix appear={{ width:'120px', time:.5}} init={true}>
	{items}
</Anix>
```

### More direct to control the animation use refs
```
//Note the case
import { Anix, AniX } from 'react-anix';
...

//use refs
animate(){
	AniX.to(this.refs.title, .5, {width:'500px'});
}
...

<div className="red" ref="title">hello</div>
```

## Test and Build

```
$ cd test
$ npm install
$ npm start
```

## License

[The BSD License](https://opensource.org/licenses/BSD-3-Clause).