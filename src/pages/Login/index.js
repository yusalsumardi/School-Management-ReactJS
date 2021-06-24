import React, { Component } from 'react';
import "./style.css";
import logo from '../../assets/logo/pngwing.png'
import Input from 'muicss/lib/react/input';


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="container">
                <div className="containerboxlogin">
                    <div className="logo">
                        <img src={logo} alt="logo" style={{ width: "50px" }} />
                    </div>
                    <div>
                        <p className="titlename">LOGIN</p>
                        <p className="titledes">Enter your Username and Password For Login or Signup</p>
                    </div>
                    <div>
                        <Input label="Input 1" floatingLabel={true} />
                    </div>
                </div>
            </div>
        );
    }
}

export default index;