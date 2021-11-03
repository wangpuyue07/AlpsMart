import {useState} from 'react';
import Layout from "../../components/layout";
import {useRouter} from 'next/router';
import {
    Table, InputNumber, Space, Typography, Row, Col, Input, Button, Divider

} from "antd";

const {Title} = Typography;
export default function Home() {
    const router = useRouter()
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
            <Row gutter={[0, 0]} style={{marginTop: '36px',marginBottom:'72px'}} justify={'space-around'}>
                <Col xl={7} md={24}>
                    <Space direction="vertical"  style={{width:'100%'}} >
                        <Title level={4} type={'secondary'}>Discount Codes</Title>
                        <Input size={'large'} style={{width:'100%'}} placeholder="Enter your coupon code if you have one." />
                        <Button type="secondary" style={{width:'100%'}} size={'large'}>Apply Coupon</Button>
                    </Space>
                </Col>

                <Col xl={6} md={24}>
                    <Space direction="vertical" style={{width:'100%'}} size={'large'}>
                        <Title level={4} type={'secondary'}>Cart Totals</Title>
                        <div>
                            <Row justify="space-between"><Col>Subtotal</Col><Col>$854.63</Col></Row>
                            <Divider style={{margin:'6px 0'}}/>
                            <Row justify="space-between"><Col>Grand Total</Col><Col>$854.63</Col></Row>
                        </div>
                        <Button type="primary" style={{width:'100%'}} size={'large'}>Checkout</Button>
                    </Space>
                </Col>
            </Row>
        </Layout>
    )
}
