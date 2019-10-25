import React, {Component} from 'react';
import {Button, Card, Input} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import sparkImage from './images/route.png'

class App extends Component {
    render() {
        return (
            <div className="Login-Whole">
                <Card  className="Login">
                    <Card className= "Login-Logo" bordered={false}
                        cover={<img alt="Spark" src={sparkImage} />}>
                    </Card>
                    <div className="Login-Input">
                        <Input placeholder="Username" />
                        <Input placeholder="Password" />
                        <Button className="Login-Button">Primary</Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default App;
