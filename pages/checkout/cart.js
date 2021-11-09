import {useState} from 'react';
import React from 'react';
import Layout from "../../components/layout";
import {useRouter} from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import {
    Table, InputNumber, Space, Typography, Row, Col, Input, Button, Divider, Radio, Select, Tag, Form, Checkbox

} from "antd";
import {CheckCircleOutlined} from "@ant-design/icons";


const stripePromise = loadStripe('pk_test_51JsqSTCnmrpYZEi5iNzSIprkvw0HDhUMyXebZxV85cwj4i6r8GLKyp7x83M4i0XZTggi1CP1Oh1tVJBa622mRVyq00Fh56I11w');

const {Title,Text} = Typography;
export default function Home() {
    const router = useRouter();

    return (
        <Layout>
            <Table style={{marginTop: '36px'}} title={() => <Title level={3}>Shopping Cart</Title>} pagination={false}
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
                           title: 'Price',
                           dataIndex: 'price',
                           key: 'price',
                           render: item => '$123.00',
                       }, {
                           title: 'Quantity',
                           dataIndex: 'quantity',
                           key: 'quantity',
                           render: item => <InputNumber addonBefore="+" addonAfter="$" defaultValue={1} step={1}/>,
                       }, {
                           title: 'Subtotal',
                           dataIndex: 'subtotal',
                           key: 'subtotal',
                           render: item => '$123.00',
                       }, {
                           title: 'Action',
                           key: 'action',
                           render: (text, record) => (
                               <Space size="middle">
                                   <a>Remove All</a>
                               </Space>
                           ),
                       }
                   ]}
                   dataSource={[
                       {
                           key: '1',
                           item: 'MAIZE 1.3M LED Entertainment Unit - WHITE',
                           price: 32,
                           quantity: '10 Downing Street',
                           subtotal: ''
                       },
                       {
                           key: '2',
                           item: 'MAIZE 1.3M LED Entertainment Unit - BLACK',
                           price: 32,
                           quantity: '10 Downing Street',
                           subtotal: ''
                       },
                   ]}/>
            <Row gutter={[0, 0]} style={{marginTop: '36px',marginBottom:'72px'}} justify={'space-between'}>


                <Col xl={10} md={24}>
                    <Radio.Group>
                        <Space direction="vertical">
                            <Radio value={1}>Standard Delivery $23.00</Radio>
                            <Space size={'large'} align="baseline" direction="horizontal">
                                <Title level={5} style={{fontWeight: 'normal', marginLeft: 27, fontSize: 14}}>Shipping
                                    to:</Title>
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
                            </Space>
                            <Title level={5} style={{fontWeight: 'normal', marginLeft: 24, fontSize: 12}}
                                   type={'warning'}>Please note: Additional charge will be applied for rural
                                area.</Title>
                            <Typography.Link href="#API"><Text type={'warning'}>Please check full shipping information for Rural/Island</Text></Typography.Link>
                            <Radio value={2}>Pick up my order from Auckland centre <Tag
                                icon={<CheckCircleOutlined/>} color="success">FREE</Tag></Radio>
                        </Space>
                    </Radio.Group>
                    <Row style={{marginTop: '12px'}}>
                        <Col span={12}><Title level={5} style={{marginLeft: 24, fontSize: 14}}>Pick up centre
                            address:</Title></Col>
                        <Col span={12}><Title level={5}
                                              style={{marginLeft: 24, fontSize: 14}}>Note:</Title></Col>
                    </Row>
                    <Form.Item name="address" valuePropName="checked"
                               tooltip={'Please select other city if your city is not listed as main cities'}>
                        <Checkbox>Rural</Checkbox>
                    </Form.Item>


                    <Row>
                        <Col span={12}><Title level={5}
                                              style={{fontWeight: 'normal', marginLeft: 24, fontSize: 12}}
                                              type={'secondary'}>29A Don Buck Rd<br/>Massey<br/>Auckland
                            0614</Title></Col>
                        <Col span={12}><Title level={5}
                                              style={{fontWeight: 'normal', marginLeft: 24, fontSize: 12}}
                                              type={'secondary'}>Please have your order number handy and present
                            your Photo ID with your corresponding credit card on site as pick up reference for
                            security purpose.</Title></Col>
                    </Row>
                    <Title level={5} style={{fontWeight: 'normal', marginLeft: 24, fontSize: 12}}
                           type={'danger'}>Pickup under COVID19 Level 2 Only (Needs to be arranged)</Title>
                </Col>
                <Col xl={6} md={24}>
                    <Space direction="vertical" style={{width:'100%'}} size={'large'}>
                        <Title level={4} type={'secondary'}>Cart Totals</Title>
                        <div>
                            <Row justify="space-between"><Col>Subtotal</Col><Col>$854.63</Col></Row>
                            <Divider style={{margin:'6px 0'}}/>
                            <Row justify="space-between"><Col>Grand Total</Col><Col>$854.63</Col></Row>
                        </div>
                        <Button type="primary" onClick={async ()=>{
                            const checkoutSession = await fetch('/api/checkout_sessions', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({asd:123}),
                            });
                            const session = await checkoutSession.json();
                            const stripe = await stripePromise;
                            const result = await stripe.redirectToCheckout({
                                sessionId: session.id,
                            });
                            if (result.error) {
                                alert(result.error.message);
                            }
                        }} style={{width:'100%'}} size={'large'}>Checkout</Button>
                    </Space>
                </Col>
            </Row>
        </Layout>
    )
};
