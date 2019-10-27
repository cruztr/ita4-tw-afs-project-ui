import React from "react";
import 'antd/dist/antd.css';
import './Signup.css';
import {Redirect} from 'react-router-dom'
import {Button, Checkbox, Form, Input, Select, Card} from 'antd';
import sparkImage from "../Signup/Images/route.png";

const { Option } = Select;

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            platenumber: ""

        }
    }

    handleChange = (event) => {
        const thisState = this.state;
        this.setState({
            ...thisState,
            [event.target.name]: event.target.value
        });
    }

    setUser = () => {
        this.props.login(this.state);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div className={"SignUp-Whole"} style={{ background: '#d4d4d4', minHeight: 360, margin: 0 }}>
                <Card  style={{ background: '#fff', minHeight: 360, width: 500, margin: 0}}>
                    <Card className= "Spark-Logo" bordered={false}
                          cover={<img alt="Spark" src={sparkImage} />}>
                    </Card>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label={<span>First Name&nbsp;</span>}>
                        {getFieldDecorator('firstname', {
                            rules: [{ required: true, message: 'Please input your First Name!', whitespace: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label={<span>Last Name&nbsp;</span>}>
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'Please input your Last Name!', whitespace: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label={<span>Username&nbsp;</span>}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input a username!', whitespace: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label={<span>Plate Number&nbsp;</span>}>
                        {getFieldDecorator('platenumber', {
                            rules: [{ required: true, message: "Please input your car's Plate Number!", whitespace: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
        );
    }
}

export default Form.create()(Signup);