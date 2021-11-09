import {useState} from 'react';
import Layout from "../../components/layout";
import {useRouter} from 'next/router';
import {
    Table, Space, PageHeader, Typography, Row, Col, Input, Button, Divider, Form, Checkbox, Select, InputNumber

} from "antd";

import {QuestionCircleOutlined} from '@ant-design/icons'

const {Text,Title} = Typography;
export default function Home() {
    const router = useRouter()
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Layout>
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Checkout"
                subTitle="This is a subtitle"
                extra={[
                    <Text key={'1'} type={'danger'}>*Required Field</Text>,
                ]}
            >
                <Row gutter={[36,0]} justify="space-around" style={{marginTop:32,marginBottom:36}} >
                    <Col span={10}>
                        <Title level={3}>Billing Address</Title>
                        <Form

                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{

                            }}
                            scrollToFirstError
                            layout="vertical"
                        >
                            <Form.Item name="remember" valuePropName="checked"  extra={<Text type={'danger'}>Pickup under COVID19 Level 2 Only (Needs to be arranged)</Text>}>
                                <Checkbox>Pick up order from Massey Store, Auckland</Checkbox><br/>
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
                            <Form.Item
                                name="address"
                                label="Address"
                                rules={[
                                    {required:true,
                                    message:'Please input your Address'
                                    }
                                ]}
                            >
                                <Form.Item
                                    name="address"
                                    rules={[
                                        {required:true,
                                        }
                                    ]}
                                >
                                    <Input placeholder="Address"/>
                                </Form.Item>
                                <Form.Item
                                    name="address"
                                    rules={[
                                        {required:true,
                                        }
                                    ]}
                                >
                                    <Input placeholder="Suburb"/>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item
                                name="city"
                                label="City"
                                rules={[{ required: true, message: 'city is required' }]}
                                tooltip={'Please select other city if your city is not listed as main cities'}
                            >
                                <Select defaultValue="auckland" onChange={(value) => {
                                    console.log(value)
                                }} style={{width: '120px'}}>
                                    <Select.OptGroup label="Main Cities">
                                        <Select.Option value="auckland">Auckland</Select.Option>
                                        <Select.Option value="outerAuckland">Outer Auckland</Select.Option>
                                        <Select.Option value="hamilton">Hamilton</Select.Option>
                                        <Select.Option value="tauranga">Tauranga</Select.Option>
                                        <Select.Option value="wellington">Wellington</Select.Option>
                                        <Select.Option value="christchurch">Christchurch</Select.Option>
                                        <Select.Option value="dunedin">Dunedin</Select.Option>
                                    </Select.OptGroup>
                                    <Select.OptGroup label="North Island">
                                        <Select.Option value="auckland">Auckland</Select.Option>
                                        <Select.Option value="whangarei">Whangarei</Select.Option>
                                        <Select.Option value="rotoroa">Rotoroa</Select.Option>
                                        <Select.Option value="taupo">Taupo</Select.Option>
                                    </Select.OptGroup>
                                    <Select.OptGroup label="South Island">
                                        <Select.Option value="nelson">Nelson</Select.Option>
                                        <Select.Option value="greyMonth">GreyMonth</Select.Option>
                                        <Select.Option value="christchurch">Christchurch</Select.Option>
                                        <Select.Option value="timaro">Timaro</Select.Option>
                                    </Select.OptGroup>
                                </Select>
                            </Form.Item>
                            <Typography.Link href="#API"><Text type={'warning'}>Please check full shipping information for Rural/Island</Text></Typography.Link>

                            <Form.Item name="address" valuePropName="checked"
                            tooltip={'Please select other city if your city is not listed as main cities'}>
                                <Checkbox>Rural</Checkbox>
                            </Form.Item>
                            <Row gutter={[24]}>
                                <Col span={12}>
                                    <Form.Item
                                        name="Postcode"
                                        label="Postcode"
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
                                        name="Contact Number"
                                        label="Contact Number"
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
                                        name="Company"
                                        label="Company"
                                        rules={[
                                            {
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item name="address" valuePropName="checked"  >
                                <Checkbox>Ship to same address</Checkbox><br/>
                            </Form.Item>
                            <Form.Item
                                name="comments"
                                label="Comments"
                                rules={[

                                ]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </Form>
                    </Col>

                    <Col span={10}>
                        <Title level={3}>Shipping Address</Title>
                        <Form

                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{

                            }}
                            scrollToFirstError
                            layout="vertical"
                        >

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
                            <Form.Item
                                name="address"
                                label="Address"
                                rules={[
                                    {required:true,
                                        message:'Please input your Address'
                                    }
                                ]}
                            >
                                <Form.Item
                                    name="address"
                                    rules={[
                                        {required:true,
                                        }
                                    ]}
                                >
                                    <Input placeholder="Address"/>
                                </Form.Item>
                                <Form.Item
                                    name="address"
                                    rules={[
                                        {required:true,
                                        }
                                    ]}
                                >
                                    <Input placeholder="Suburb"/>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item
                                name="city"
                                label="City"
                                rules={[{ required: true, message: 'city is required' }]}
                                tooltip={'Please select other city if your city is not listed as main cities'}
                            >
                                <Select defaultValue="auckland" onChange={(value) => {
                                    console.log(value)
                                }} style={{width: '120px'}}>
                                    <Select.OptGroup label="Main Cities">
                                        <Select.Option value="auckland">Auckland</Select.Option>
                                        <Select.Option value="outerAuckland">Outer Auckland</Select.Option>
                                        <Select.Option value="hamilton">Hamilton</Select.Option>
                                        <Select.Option value="tauranga">Tauranga</Select.Option>
                                        <Select.Option value="wellington">Wellington</Select.Option>
                                        <Select.Option value="christchurch">Christchurch</Select.Option>
                                        <Select.Option value="dunedin">Dunedin</Select.Option>
                                    </Select.OptGroup>
                                    <Select.OptGroup label="North Island">
                                        <Select.Option value="auckland">Auckland</Select.Option>
                                        <Select.Option value="whangarei">Whangarei</Select.Option>
                                        <Select.Option value="rotoroa">Rotoroa</Select.Option>
                                        <Select.Option value="taupo">Taupo</Select.Option>
                                    </Select.OptGroup>
                                    <Select.OptGroup label="South Island">
                                        <Select.Option value="nelson">Nelson</Select.Option>
                                        <Select.Option value="greyMonth">GreyMonth</Select.Option>
                                        <Select.Option value="christchurch">Christchurch</Select.Option>
                                        <Select.Option value="timaro">Timaro</Select.Option>
                                    </Select.OptGroup>
                                </Select>
                            </Form.Item>
                            <Form.Item name="address" valuePropName="checked"  >
                                <Checkbox>Rural</Checkbox>
                            </Form.Item>
                            <Row gutter={[24]}>
                                <Col span={12}>
                                    <Form.Item
                                        name="Postcode"
                                        label="Postcode"
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
                                        name="Contact Number"
                                        label="Contact Number"
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
                                        name="Company"
                                        label="Company"
                                        rules={[
                                            {
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                </Row>
                <Divider/>
                <Row gutter={[36,0]} justify="space-around" style={{marginTop:32,marginBottom:36}} >
                    <Col span={12}>
                        <Title level={3}>Order Summary</Title>
                        <Space direction="vertical"  style={{width:'100%'}} >
                            <Input size={'large'} style={{width:'100%'}} placeholder="Enter your coupon code if you have one." />
                            <Button type="secondary" style={{width:'100%'}} size={'large'}>Apply Coupon</Button>
                        </Space>
                        <Divider/>
                        <Table style={{marginTop: '36px'}} showHeader={false} pagination={false}
                               columns={[
                                   {
                                       title: 'Item',
                                       dataIndex: 'item',
                                       key: 'item',
                                       render: item => <Space>
                                           <img
                                               src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/80x60/9df78eab33525d08d6e5fb8d27136e95/2/2/22005.jpg"
                                               width="80" height="60" alt="MAIZE 1.3M LED Entertainment Unit - WHITE"/>
                                           <Title level={5}>{item}</Title>
                                       </Space>,
                                   }, {
                                       title: 'Quantity',
                                       dataIndex: 'quantity',
                                       key: 'quantity',
                                       render: item => 'QTY:1',
                                   }, {
                                       title: 'Subtotal',
                                       dataIndex: 'subtotal',
                                       key: 'subtotal',
                                       render: item => '$123.00',
                                   }
                               ]}
                               dataSource={[
                                   {
                                       key: '1',
                                       item: 'MAIZE 1.3M LED Entertainment Unit - WHITE',
                                       quantity: '10 Downing Street',
                                       subtotal: ''
                                   },
                                   {
                                       key: '2',
                                       item: 'MAIZE 1.3M LED Entertainment Unit - BLACK',
                                       quantity: '10 Downing Street',
                                       subtotal: ''
                                   },
                               ]}/>

                        <Row justify="space-between" style={{marginTop:20}}>
                            <Col span={12}>Subtotal</Col>
                            <Col span={3}>$246.00</Col>
                        </Row>
                        <Row justify="space-between" style={{marginTop:20}}>
                            <Col span={12}><Title level={4} type={'warning'}>Grand Total</Title></Col>
                            <Col ><Title level={4} type={'warning'}>$246.00</Title></Col>
                        </Row>
                        <Row justify="space-between" style={{marginTop:20}}>
                            <Col span={6}><img alt="GeoTrust" src="https://www.treasurebox.co.nz/media/wysiwyg/test-images/geotrust_cert.png"/></Col>
                            <Col span={18}><Text type={'secondary'}>Your payment details are protected and encrypted by 256-bit SSL technology.</Text></Col>
                        </Row>
                        <Button style={{width:'100%',marginTop:'36px'}} type={'primary'} size={'large'}>Place Order</Button>
                    </Col>
                    <Col span={10}>

                    </Col>



                </Row>
            </PageHeader>
        </Layout>
    )
}
