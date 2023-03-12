import React from 'react';
const StateButtonsMap = Object.freeze(
  {
    "login-default": [
      {
        "label": "Select student or administrator",
        "next": "login-selection"
      }
    ],
    "login-selection": [
      {
        "label": "Student",
        "next": "login-student-expanded"
      },
      {
        "label": "Admin",
        "next": "login-admin-expanded"
      },
      {
        "label": "Back",
        "next": "login-default"
      }
    ],
    "login-student-expanded": [
      {
        "label": "Sign in",
        "next": "bookings-student"
      },
      {
        "label": "See error",
        "next": "login-student-error"
      },
      {
        "label": "Back",
        "next": "login-selection"
      }
    ],
    "login-student-error": [
      {
        "label": "Back",
        "next": "login-student-expanded"
      }
    ],
    "login-admin-expanded": [
      {
        "label": "Sign in",
        "next": "bookings-admin"
      },
      {
        "label": "See error",
        "next": "login-admin-error"
      },
      {
        "label": "Back",
        "next": "login-selection"
      }
    ],
    "login-admin-error": [
      {
        "label": "Back",
        "next": "login-admin-expanded"
      }
    ],
    "bookings-student": [
      {
        "label": "Add a booking",
        "next": "bookings-student-add"
      },
      {
        "label": "Exit",
        "next": "login-default"
      }
    ],
    "bookings-student-add": [
      {
        "label": "Back",
        "next": "bookings-student"
      }
    ],
    "bookings-admin": [
      {
        "label": "View all spaces",
        "next": "spaces-admin"
      },
      {
        "label": "Add a booking",
        "next": "bookings-admin-add"
      },
      {
        "label": "Exit",
        "next": "login-default"
      }
    ],
    "bookings-admin-add": [
      {
        "label": "Back",
        "next": "bookings-admin"
      }
    ],
    "spaces-admin": [
      {
        "label": "View all bookings",
        "next": "bookings-admin"
      },
      {
        "label": "Add a space",
        "next": "spaces-admin-add"
      },
      {
        "label": "Exit",
        "next": "login-default"
      }
    ],
    "spaces-admin-add": [
      {
        "label": "Back",
        "next": "spaces-admin"
      }
    ]
  }
)
class NavigationMap extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {
      curState: "login-default",
      imageClassName: "navigation-image-slide",
    }
    this.handleUpdateState = this.handleUpdateState.bind(this);
  }

  componentDidUpdate(){
    if(this.state.imageClassName){
      const timeout = setTimeout(() => {
        this.setState({
          imageClassName: undefined
        })
      }, 1000)
      return () => clearTimeout(timeout);
    }
  }

  handleUpdateState(nextState){
    this.setState({
      curState: nextState,
      imageClassName: "navigation-image-slide"
    });
  }

  render(){
    const imageUrl = `/static/images/states/${this.state.curState}.png`;
  
    return(
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: "600px"
        }}>
      <img 
        className={this.state.imageClassName}
        src={imageUrl} alt={this.state.curState}
         />
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          {StateButtonsMap[this.state.curState].map((b, i) => (
            <button 
              style={{
               width: "220px"
              }}
              key={`${this.state.curState}${i}`} onClick={() => this.handleUpdateState(b.next)}>{b.label}</button>
          ))}
        </div>
      </div>
    )
  }
}

export default NavigationMap;