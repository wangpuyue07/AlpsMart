import {useState} from 'react';
import Layout from "../../components/layout";
import {useRouter} from 'next/router';
import {
    AutoComplete, Alert, Form, Checkbox, Row, Col, Input, Button, Select, Cascader, Divider, Typography

} from "antd";

const { Option } = Select;
const {Title} = Typography;



export default function Home() {
    const router = useRouter();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Layout>
            <Alert style={{marginTop:32}} message={<>Account confirmation is required. Please, check your email for the confirmation link. To resend the confirmation email please <a>click here</a>.</>} type="success" />
            <Row gutter={[36,0]} justify="space-around" style={{marginTop:32,marginBottom:36}} >
                <Col span={10}>
                    <Title level={3}>Create New Account</Title>
                    <Form

                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{

                        }}
                        scrollToFirstError
                        layout="vertical"
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Row gutter={[24]}>
                            <Col span={12}>
                                <Form.Item
                                    name="firstName"
                                    label="First Name"
                                    tooltip="What do you want others to call you?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your nickname!',
                                            whitespace: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="lastName"
                                    label="Last Name"
                                    tooltip="What do you want others to call you?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your nickname!',
                                            whitespace: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>


                        <Form.Item   name="captcha"
                                     label="Captcha" extra="We must make sure that your are a human."
                                     rules={[
                                         {
                                             required: true,
                                             message: 'Please input the captcha you got!',
                                         },
                                     ]}>
                            <Row gutter={8} justify="space-between">
                                <Col span={14}>
                                    <Form.Item

                                        noStyle={true}

                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col >
                                    <Button>Get captcha</Button>
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },
                            ]}
                        >
                            <Checkbox>
                                I agree to the <a href="">Terms & Conditions</a>, and <a href="">Privacy Policy</a>.
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary"  size={'large'} style={{width:'100%'}} onClick={()=>{router.push('/account/me')}}>
                                Create Account
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={4}>
                    <img alt="Or" src="https://www.treasurebox.co.nz/media/wysiwyg/test-images/or-divider.png" width="150" height="645"/>
                </Col>
                <Col span={10}>
                    <Title level={3}>Sign In to Your Account</Title>
                    <Form

                        form={form}
                        name="signIn"
                        onFinish={onFinish}
                        initialValues={{

                        }}
                        scrollToFirstError
                        layout="vertical"
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Row justify={'space-between'}>
                                <Col><Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item></Col>
                                <Col> <a className="login-form-forgot" href="">
                                    Forgot password
                                </a></Col>
                            </Row>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" onClick={()=>{router.push('/account/me')}} size={'large'} style={{width:'100%'}}>
                                Sign in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>

            </Row>

        </Layout>
    )
}
