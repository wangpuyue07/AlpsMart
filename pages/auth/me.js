import {useEffect, useState} from 'react';
import Layout from "../../components/layout";
import {useRouter} from 'next/router';
import {
    Descriptions,
    Avatar,
    Form,
    Popconfirm,
    Row,
    Col,
    Button,
    Select,
    Cascader,
    Divider,
    Typography,
    Breadcrumb,
    Table, Space, Tag

} from "antd";
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51JsqSTCnmrpYZEi5iNzSIprkvw0HDhUMyXebZxV85cwj4i6r8GLKyp7x83M4i0XZTggi1CP1Oh1tVJBa622mRVyq00Fh56I11w');

import Auth from '../../components/auth';
import {signOut,useSession} from "next-auth/react";
import {HighlightOutlined, SyncOutlined, CheckCircleOutlined, EditOutlined} from "@ant-design/icons";


const {Title} = Typography;


export default function Home({session,freshData}) {
    const router = useRouter();

    return (
        <Auth session={session}>
            <Layout session={session} freshData={freshData}>
                <section style={{margin: '0 24px 36px 24px'}}>
                    <Row style={{margin: '2rem 0'}}>
                        <Breadcrumb>
                            <Breadcrumb.Item onClick={() => {
                                router.push(`/`)
                            }}><a>Home</a></Breadcrumb.Item>
                            <Breadcrumb.Item>
                                My Account
                            </Breadcrumb.Item>

                        </Breadcrumb>
                    </Row>
                    <Row justify={'space-around'} align={'middle'}><Col><Avatar size={128}
                                                                                src="https://joeschmoe.io/api/v1/random"/></Col>
                        <Col>
                            <Descriptions bordered column={2}>
                                <Descriptions.Item label="Email">
                                    Anthonywang0517@gmail.com
                                </Descriptions.Item>
                                <Descriptions.Item label="UserName">
                                    <Typography.Text
                                        editable={{
                                            icon: <HighlightOutlined/>,
                                            tooltip: 'click to edit text',
                                            onChange: () => {
                                            },
                                        }}
                                    >
                                        PUYUE WANG
                                    </Typography.Text>
                                </Descriptions.Item>
                                <Descriptions.Item label="Telephone"><Typography.Text
                                    editable={{
                                        icon: <HighlightOutlined/>,
                                        tooltip: 'click to edit text',
                                        onChange: () => {
                                        },
                                    }}
                                >021 088 24591</Typography.Text></Descriptions.Item>
                                <Descriptions.Item label="Available Coupons"><Typography.Text
                                ><Tag color="lime">#FAS^T*CS^</Tag><Tag
                                    color="lime">#FAGS%f4S</Tag></Typography.Text></Descriptions.Item>
                                <Descriptions.Item label="Password"><Space align="baseline">*************<EditOutlined/></Space></Descriptions.Item>
                                <Descriptions.Item label="Account Settings"><Popconfirm
                                    title="Are you sure to log out?"
                                    onConfirm={async () => {
                                        const data = await signOut({
                                            redirect: false,
                                            callbackUrl: "/auth/signin"
                                        });
                                        freshData({session:{}});
                                        router.push(data.url);
                                    }}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <a href="#"><Button type="link" danger>
                                        Log Out
                                    </Button></a>
                                </Popconfirm>
                                    </Descriptions.Item>


                            </Descriptions>

                        </Col></Row>


                    <Table style={{marginTop: '36px', marginBottom: '36px'}}
                           title={() => <Title level={3}>View All Orders</Title>}
                           pagination={true}
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
                                   render: item => item,
                               }, {
                                   title: 'Quantity',
                                   dataIndex: 'quantity',
                                   key: 'quantity',
                                   render: item => item,
                               }, {
                                   title: 'Subtotal',
                                   dataIndex: 'subtotal',
                                   key: 'subtotal',
                                   render: item => item,
                               }, {
                                   title: 'Status',
                                   key: 'status',
                                   render: item => item.status,
                               }
                           ]}
                           dataSource={[
                               {
                                   key: '1',
                                   item: 'MAIZE 1.3M LED Entertainment Unit - WHITE',
                                   price: '$32.00',
                                   quantity: 1,
                                   subtotal: '$32.00',
                                   status: <Tag icon={<SyncOutlined spin/>} color="processing">
                                       delivering
                                   </Tag>
                               },
                               {
                                   key: '2',
                                   item: 'MAIZE 1.3M LED Entertainment Unit - BLACK',
                                   price: '$32.00',
                                   quantity: 2,
                                   subtotal: '$64.00',
                                   status: <Tag icon={<CheckCircleOutlined/>} color="success">
                                       delivered
                                   </Tag>
                               },
                           ]}/>
                </section>
            </Layout>
        </Auth>
    )
}
