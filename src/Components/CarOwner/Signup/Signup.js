import React from "react";
import 'antd/dist/antd.css';
import './Signup.css';
import {Button, Checkbox, Form, Input, Select, Card, Modal, Col, notification, Icon, Drawer} from 'antd';
import EULA from '../Signup/EULA'

const { Option } = Select;

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSuccessful: false,
            visible: false
        }
    }

    setUser = () => {
        this.props.login(this.state);
    }

    openNotification = () => {
        notification.open({
            message: 'Registration Successful',
            description:
                'Thank you for signing up! Kindly login to start using our service! \n Happy Parking!',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {

            if (!err) {
                const credentials = {
                    firstName: values.firstname,
                    lastName: values.lastname,
                    username: values.username,
                    password: values.password,
                    plateNumber: values.platenumber
                }

                this.setState({
                    isSuccessful: this.props.registerCarOwner(credentials)
                })
                this.props.form.resetFields();
                this.openNotification();
            }
        });
    };

    handleCancelClick = () => {
        this.props.closeModal();
        this.props.form.resetFields();
        window.location.reload(true);
    }

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
            <div className={"SignUp-Whole"} style={{ minHeight: 360, margin: 0 }}>
                <Form {...formItemLayout} ref={(el) => this.myFormRef = el} onSubmit={this.handleSubmit}>
                    <Form.Item label={<span>First Name&nbsp;</span>}>
                        {getFieldDecorator('firstname', {
                            rules: [{ required: true, message: 'Please input your First Name!', whitespace: true }],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label={<span>Last Name&nbsp;</span>}>
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'Please input your Last Name!', whitespace: true }],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label={<span>Username&nbsp;</span>}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, min: 6, message: 'Please input a username!', whitespace: true }],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label={<span>Plate Number&nbsp;</span>}>
                        {getFieldDecorator('platenumber', {
                            rules: [{ required: true, message: "Please input your car's Plate Number!", whitespace: true }],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please enter a password with a minimum of 8 characters!',
                                    min: 8,
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password/>)}
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
                        })(<Input.Password onBlur={this.handleConfirmBlur} onChange={this.handleConfirmPassword}/>)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                <span>I have read the <Button className={"buttonEULA"}  onClick={this.showModal} type="link" block> agreement.</Button></span>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Col span={24} style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit" >
                            Register
                        </Button>
                        <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit" onClick={this.handleCancelClick} >
                            Cancel
                        </Button>
                        </Col>
                    </Form.Item>
                </Form>
                <Drawer
                    title="End-user License Agreement"
                    visible={this.state.visible}
                    onClose={this.onClose}
                    width={600}
                >
                    <EULA />
                </Drawer>

            </div>
        );
    }
}

export default Form.create()(Signup);

