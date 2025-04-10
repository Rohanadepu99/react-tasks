// 1) State Management అంటే ఏమిటి? (తెలుగులో వివరణ)
// React లో State అనేది ఒక component లో ఉండే డేటా స్టోరేజ్ లాంటిది. ఈ state ను మనం component లోని UI (User Interface) ని మార్చడానికి ఉపయోగిస్తాం.
// 
// ఉదాహరణకి, మనం ఒక బటన్ క్లిక్ చేసినప్పుడు number పెరగాలి అనుకుంటే, ఆ number ని state లో ఉంచుతాం. ఆపై state మారినప్పుడు, React ఆ UI ని ఆటోమేటిక్‌గా రీ-రెండర్ చేస్తుంది.
// 
// State Management అనేది:
// 
// Application లోని డేటాను effectively track చేయడం
// 
// దాన్ని ఉపయోగించి UI ని update చేయడం
// 
// React లో, రెండు ప్రధాన భాగాలు ఉంటాయి:
// 
// State – డేటా ఎక్కడ ఉంది
// 
// SetState() – ఆ డేటాను ఎలా మార్చాలో చెప్పే విధానం







//  2) Class Components Syntax
//  Syntax 1:
// jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
      </div>
    );
  }
}


export default MyComponent;



// Syntax 2:
// jsx

import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome to React Class Component!'
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}


// export default Welcome;







// 3) Counter Application (Class Component)
// jsx

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

// export default Counter;








// 4) Toggle Application (Class Component)
// jsx

import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? 'Hide' : 'Show'}
        </button>
        {this.state.isVisible && <p>This is toggle content!</p>}
      </div>
    );
  }
}


// export default toggle;










// 5) Dropdown with Gender Selection & Dynamic Update (Class Component)
// jsx
import React, { Component } from 'react';

class GenderSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: ''
    };
  }

  handleChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  render() {
    return (
      <div>
        <label>Select Gender: </label>
        <select value={this.state.gender} onChange={this.handleChange}>
          <option value="">--Select--</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <p>You selected: {this.state.gender}</p>
      </div>
    );
  }
}

// export default GenderSelector;

