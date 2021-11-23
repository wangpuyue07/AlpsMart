import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import Layout from "../../components/layout";
import {useRouter} from 'next/router';
import Auth from '../../components/auth';
import {loadStripe} from '@stripe/stripe-js';
import {
    Table, InputNumber, Space, Typography, Row, Col, Popconfirm, Button, Divider, Radio, Select, Tag, Form, Checkbox

} from "antd";
import {CheckCircleOutlined} from "@ant-design/icons";
import {useSession, getSession, signOut} from "next-auth/react";
import {debounce} from "debounce";
import {Categories} from "../../constants/categories";


const stripePromise = loadStripe('pk_test_51JsqSTCnmrpYZEi5iNzSIprkvw0HDhUMyXebZxV85cwj4i6r8GLKyp7x83M4i0XZTggi1CP1Oh1tVJBa622mRVyq00Fh56I11w');

const {Title, Text} = Typography;
export default function Home({session,freshData}) {
    const [cartItems,setCartItems] = useState([]);
    const [loading,setLoading] = useState(true);
    const delayAddCart = debounce(async function ({quantity,cartId}) {
        setLoading(true);
        const checkoutSession = await fetch(`/api/cart`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity,
                id:cartId
            })
        });
        const data = await checkoutSession.json();
        const newSession = await getSession();
        freshData({session:newSession});
        setLoading(false);
    }, 1000);
    useEffect(async ()=>{
        if(session?.user&&session?.user.cartItems.length!=0){
            setLoading(true);
            const res = await fetch(`/api/stripe/product/listProduct`, {
                method: 'POST',
                body: JSON.stringify({ids:session.user.cartItems.map(cart=>cart.productId)}),
                headers: {"Content-Type": "application/json"}
            });
            const {data} = await res.json();
            setCartItems(session.user.cartItems.map((item,index)=>({...item,product:data[index]})));
            setLoading(false);
        }
    },[session]);
    return (
        <Auth session={session}>
            <Layout session={session} freshData={freshData}>
                {
                    session?.user?.cartItems.length == 0 ? <><Row justify={'center'} style={{marginTop:'64px',marginBottom:'12px'}}><Col><Title level={4}>Shopping Cart is Empty</Title></Col></Row>
                        <Row justify={'center'} style={{marginBottom:'12px'}}><Col><Text>You have no items in your shopping cart.</Text></Col></Row>
                        <Row justify={'center'} style={{marginBottom:'256px'}}><Col><Text><Link passHref href={'/'}><a>Click here to continue shopping.</a></Link></Text></Col></Row>
                    </> : <>
                        <Table loading={loading} style={{marginTop: '36px'}} title={() => <Title level={3}>Shopping Cart</Title>}
                               pagination={false}
                               columns={[{
                                   title: 'Item',
                                   dataIndex: 'item',
                                   key: 'item',
                                   render:  ({image,name}) => {
                                       return <Space>
                                           <img
                                               src={image}
                                               width="80" height="60" alt={name}/>
                                           <Title level={5}>{name}</Title>
                                       </Space>
                                   },
                               }, {
                                   title: 'Price',
                                   dataIndex: 'price',
                                   key: 'price',
                                   render: price => `$${price/100}`,
                               }, {
                                   title: 'Quantity',
                                   dataIndex: 'quantityItem',
                                   key: 'quantityItem',
                                   render: ({quantity,cartId}) => <InputNumber key={cartId} addonBefore="+" addonAfter="$" defaultValue={quantity} step={1}
                                                                    onChange={(quantity)=>{
                                                                        delayAddCart({quantity,cartId});
                                                                    }}/>,
                               }, {
                                   title: 'Subtotal',
                                   dataIndex: 'subtotal',
                                   key: 'subtotal',
                                   render: subtotal => `$${subtotal/100}`,
                               }, {
                                   title: 'Action',
                                   dataIndex: 'cartId',
                                   key: 'cartId',
                                   render: (cartId) => (
                                       <Space size="middle">
                                           <Popconfirm
                                               title="Are you sure to remove all?"
                                               onConfirm={async () => {
                                                   setLoading(true);
                                                   const res = await fetch('/api/cart',{
                                                       method: 'DELETE',
                                                       headers: {
                                                           'Content-Type': 'application/json',
                                                       },
                                                       body: JSON.stringify({id:cartId}),
                                                   });
                                                   const data = await res.json();
                                                   const newSession = await getSession();
                                                   freshData({session:newSession});
                                               }}
                                               okText="Yes"
                                               cancelText="No"
                                           >
                                               <a>Remove All</a></Popconfirm>
                                       </Space>
                                   ),
                               }
                               ]}
                               dataSource={cartItems.map((item,index)=>({
                                   item:{image:item.product.images[0],name:item.product.name},
                                   key:index,
                                   cartId:item.id,
                                   quantityItem:{quantity:item.quantity, cartId:item.id},
                                   price:item.product.metadata.price,
                                   subtotal:item.quantity*item.product.metadata.price
                               }))}/>
                        <Row gutter={[0, 0]} style={{marginTop: '36px', marginBottom: '72px'}}
                             justify={'space-between'}>
                            <Col xl={10} md={24}>
                                <Radio.Group defaultValue={1}>
                                    <Space direction="vertical">
                                        <Radio value={1}>Standard Delivery $25.00</Radio>
                                        <Title level={5} style={{fontWeight: 'normal', marginLeft: 24, fontSize: 12}}
                                               type={'warning'}>Please note: Additional charge($12) will be applied for rural
                                            area.</Title>
                                        <Typography.Link href="#API"><Text type={'warning'}>Please check full shipping
                                            information for Rural/Island</Text></Typography.Link>
                                        <Radio disabled value={2}>Pick up my order from Auckland centre <Tag
                                            icon={<CheckCircleOutlined/>} color="success">FREE</Tag></Radio>
                                    </Space>
                                </Radio.Group>
                                <Row style={{marginTop: '12px'}}>
                                    <Col span={12}><Title level={5} style={{marginLeft: 24, fontSize: 14}}>Pick up
                                        centre
                                        address:</Title></Col>
                                    <Col span={12}><Title level={5}
                                                          style={{marginLeft: 24, fontSize: 14}}>Note:</Title></Col>
                                </Row>

                                <Row>
                                    <Col span={12}><Title level={5}
                                                          style={{fontWeight: 'normal', marginLeft: 24, fontSize: 12}}
                                                          type={'secondary'}>29A Don Buck Rd<br/>Massey<br/>Auckland
                                        0614</Title></Col>
                                    <Col span={12}><Title level={5}
                                                          style={{fontWeight: 'normal', marginLeft: 24, fontSize: 12}}
                                                          type={'secondary'}>Please have your order number handy and
                                        present
                                        your Photo ID with your corresponding credit card on site as pick up reference
                                        for
                                        security purpose.</Title></Col>
                                </Row>
                                <Title level={5} style={{fontWeight: 'normal', marginLeft: 24, fontSize: 12}}
                                       type={'danger'}>Pickup under COVID19 Level 2 Only (Needs to be arranged)</Title>
                            </Col>
                            {
                                cartItems.length!=0 &&  <Col xl={6} md={24}>
                                    <Space direction="vertical" style={{width: '100%'}} size={'large'}>
                                        <Title level={4} type={'secondary'}>Cart Totals</Title>
                                        <div>
                                            <Row justify="space-between"><Col>Subtotal</Col><Col>${cartItems.map((cart)=>{
                                                return +cart.product.metadata.price*cart.quantity
                                            }).reduce((a,b)=>a+b)/100}</Col></Row>
                                            <Row justify="space-between"><Col>Shipping Fee</Col><Col>$25</Col></Row>
                                            <Divider style={{margin: '6px 0'}}/>
                                            <Row justify="space-between"><Col>Grand Total</Col><Col>${cartItems.map((cart)=>{
                                                return +cart.product.metadata.price*cart.quantity
                                            }).reduce((a,b)=>a+b)/100+25}</Col></Row>
                                        </div>
                                        <Button type="primary" onClick={async () => {
                                            const checkoutSession = await fetch('/api/checkout_sessions', {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                },
                                                body: JSON.stringify({
                                                    line_items: cartItems.map(item=>{
                                                        return {
                                                            price: item.priceId,
                                                            quantity: item.quantity,
                                                            adjustable_quantity: {
                                                                enabled: true,
                                                                minimum: 1,
                                                                maximum: 100,
                                                            },
                                                        }
                                                    }),
                                                    customer: session.user.stripeId,
                                                    metadata:{
                                                        strapiUserId:session.user.id
                                                    },
                                                    payment_intent_data:{
                                                        receipt_email:session.user.email
                                                    }
                                                }),
                                            });
                                            const {id} = await checkoutSession.json();
                                            const stripe = await stripePromise;
                                            const result = await stripe.redirectToCheckout({
                                                sessionId: id,
                                            });
                                            if (result.error) {
                                                alert(result.error.message);
                                            }
                                        }} style={{width: '100%'}} size={'large'}>Checkout</Button>
                                    </Space>
                                </Col>
                            }

                        </Row>
                    </>
                }
            </Layout>
        </Auth>
    )
}


