import Layout from "../../../components/layout";
import { useRouter } from 'next/router';
import Link from 'next/link';
import {Categories} from '../../../constants/products'
import {
    Avatar,
    Button,
    Card,
    Menu,
    PageHeader,
    Row,
    Col,
    Tag,
    Typography,
    Breadcrumb,
    Pagination,
    Select,
    Space,
    Divider, Result, Modal
} from "antd";
const {Option} = Select;
import {QuestionCircleOutlined, RollbackOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {useState} from "react";
const { Paragraph,Text,Title } = Typography;
const { Meta } = Card;





const Content = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);


export default function Home() {
    const router = useRouter()
    const {slug1,slug2}= router.query;
    const [ModalVisible, setModalVisible] = useState(false);
    return (
        <Layout >
            <PageHeader
                title={slug2}
                className="site-page-header"
                subTitle="This is a subtitle"
                tags={<Tag color="green">Active</Tag>}
                extra={[
                    <Button key="3" type="primary" onClick={()=>{
                        zE('messenger', 'open');
                    }}><QuestionCircleOutlined/>Contact Us</Button>,
                ]}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item onClick={()=>{
                        router.push(`/`)
                    }}><a>Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item onClick={()=>{
                        router.push(`/${slug1}`)
                    }}>
                        <a>{slug1}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {slug2}
                    </Breadcrumb.Item>
                </Breadcrumb> }
            >
                <Content>
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                        A snug living room will put you in better spirits and bring fun for your family. TreasureBox offers a diverse range of high-quality Living Room Furniture to suit a range of styles and budgets.
                    </Paragraph>
                </Content>
            </PageHeader>
            <Divider/>
            <section style={{margin: '0 24px'}}>
                <Row gutter={[42,12]}>
                        {
                            Categories[slug1]&&Categories[slug1.split('-').join(' ')][slug2.split('-').join(' ')].map((slug3,index)=>
                                <Col key={index}><Link passHref href={`/${slug1}/${slug2}/${slug3.split(' ').join('-')}`}><Typography.Link>{slug3}</Typography.Link></Link></Col>)
                        }
                </Row>
                <Row style={{margin: '2rem 0 1rem 0'}}>
                    <Col>
                        <Space size={'large'} align="baseline">
                            <Title level={5}>Sort By:</Title>
                            <Select defaultValue="bestSelling" onChange={(value)=>{console.log(value)}}>
                                <Option value="bestSelling">Best Selling</Option>
                                <Option value="priceLow">Price(Low &gt; High)</Option>
                                <Option value="priceHigh">Price(High &gt; Low)</Option>
                                <Option value="latest">Latest</Option>
                                <Option value="mostReviewed">Most Reviewed</Option>
                                <Option value="name">Name</Option>
                            </Select>
                        </Space>
                    </Col>
                </Row>
                <Row gutter={[16,32]} justify="space-between">
                    {
                        Array.from(Array(20)).map((value,index)=><Col key={index}><Card
                            style={{ width: 300, cursor:'pointer' }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    onClick={()=>{
                                        router.push(`/product/${index}`);
                                    }}
                                />
                            }
                            actions={[<Button key={index} type="link" onClick={()=>{setModalVisible(true)}}>Add to Cart</Button>]}
                        >
                            <Meta
                                title={<Row justify="space-between"><Col>Product: {index}</Col><Col><Text type="success">$123.1</Text></Col></Row>}
                                description="This is the description"
                                onClick={()=>{
                                    router.push(`/product/${index}`);
                                }}
                            />
                        </Card></Col>)
                    }
                    <Modal
                        visible={ModalVisible}
                        footer={[
                            <Button key="submit"  loading={false} icon={<RollbackOutlined />}
                                    onClick={()=>{setModalVisible(false)}}>
                                Continue Shopping
                            </Button>,
                            <Button key="back" type="primary" onClick={()=>{setModalVisible(false);
                                router.push('/checkout/cart')}}  icon={<ShoppingCartOutlined />}>
                                Go To Cart
                            </Button>
                        ]}
                    >
                        <Result
                            status="success"
                            title="You've just added this product to the cart successfully!"
                            subTitle="MAIZE 1.3M LED Entertainment Unit - WHITE"
                        />
                    </Modal>
                </Row>
                <Row justify="end" style={{margin:'3rem 0 3rem 0'}}>
                    <Col>
                        <Pagination defaultCurrent={1} total={50} />
                    </Col>
                </Row>

            </section>

        </Layout>
    )
}
