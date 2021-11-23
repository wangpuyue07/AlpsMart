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
import moment from 'moment';
import Auth from '../../components/auth';
import {signOut,useSession} from "next-auth/react";
import {HighlightOutlined, SyncOutlined, CheckCircleOutlined, EditOutlined} from "@ant-design/icons";
import axios from "axios";


const {Title} = Typography;


export default function Home({session,freshData}) {
    const router = useRouter();
    const [orders,setOrders] = useState([]);
    useEffect(async ()=>{
        if(session.user){
            const datas = [];
            for(let order of session.user.orders){
                const {data} = await axios.get(`/api/order/${order.id}`);
                for(let parcel of data.parcels){
                    const {data:product} = await axios.get(`/api/stripe/product/${parcel.barcode}`);
                    parcel.product = product;
                }
                datas.push(data);
            }
            setOrders(datas);
        }
    },[session])

    return (
        <Auth session={session} freshData={freshData}>
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
                    {
                        orders.length!=0&&<Title style={{marginTop:64}} level={3}>View All Orders</Title>
                    }

                    {
                        orders.map((order)=><Table key={order.id} style={{marginBottom: '36px'}}
                                                                 title={() => <Title level={4}>{moment(order.published_at).format('MMMM Do YYYY, h:mm:ss a')}</Title>}
                                                                 pagination={false}
                                                                 columns={[
                                                                     {
                                                                         title: 'Item',
                                                                         dataIndex: 'item',
                                                                         key: 'item',
                                                                         render: item => <Space>
                                                                             <img
                                                                                 src={item.image}
                                                                                 width="80" height="60" alt={item.name}/>
                                                                             <Title level={5}>{item.name}</Title>
                                                                         </Space>,
                                                                     }, {
                                                                         title: 'Price',
                                                                         dataIndex: 'price',
                                                                         key: 'price',
                                                                         render: item => item,
                                                                     }, {
                                                                         title: 'Status',
                                                                         key: 'status',
                                                                         render: item => item.status,
                                                                     }
                                                                 ]}
                                                                 dataSource={order.parcels.map(parcel=>{
                                                                     return {
                                                                         key: parcel.id,
                                                                         item: {name:parcel.product.name,image:parcel.product.images[0]},
                                                                         price: `$${parcel.product.metadata.price/100}`,
                                                                         status: <Tag icon={<SyncOutlined spin/>} color="processing">
                                                                             delivering
                                                                         </Tag>
                                                                     }
                                                                 })}/>)
                    }
                </section>
            </Layout>
        </Auth>
    )
}
