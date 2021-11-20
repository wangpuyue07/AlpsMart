import Layout from "../../../components/layout";
import { useRouter } from 'next/router'
import ProductCard from '../../../components/productCard'
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
    Divider,
    Space,
    Select, Pagination, Result, Modal
} from "antd";
import {QuestionCircleOutlined, RollbackOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {Categories} from "../../../constants/categories";
const {Option}  = Select;
const { Paragraph,Text,Title } = Typography;
const { Meta } = Card;




const Content = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);


export default function Home({session,freshData}) {
    const router = useRouter()
    const [ModalVisible, setModalVisible] = useState(false);
    let {slug1,slug2,slug3}= router.query;
    if(!slug1||!slug2||!slug3) return null;
    const slug1Name = slug1.split('-').join(' ');
    const slug2Name = slug2.split('-').join(' ');
    const slug3Name = slug3.split('-').join(' ');
    return (
        <Layout session={session} freshData={freshData}>
            <PageHeader
                title={Categories[slug1Name].subCategories[slug2Name].subCategories[slug3Name].name}
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
                    }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={()=>{
                        router.push(`/${slug1}`)
                    }}>
                        <a>{Categories[slug1Name].name}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item onClick={()=>{
                        router.push(`/${slug1}/${slug2}`)
                    }}>
                        <a>{Categories[slug1Name].subCategories[slug2Name].name}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {Categories[slug1Name].subCategories[slug2Name].subCategories[slug3Name].name}
                    </Breadcrumb.Item>
                </Breadcrumb> }
            >
                <Content>
                    <Row><Col><img src={Categories[slug1Name]&&Categories[slug1Name].subCategories[slug2Name].subCategories[slug3Name].images[0]}/></Col></Row>
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                        {Categories[slug1Name]&&<div dangerouslySetInnerHTML={{ __html:Categories[slug1Name].subCategories[slug2Name].subCategories[slug3Name].description}}></div>}
                    </Paragraph>
                </Content>
            </PageHeader>


            <Divider/>
            <section style={{margin: '0 24px'}}>
                <Row style={{margin: '2rem 0 1rem 0'}}>
                    <Col>
                        <Space size={'large'} align="baseline">
                            <Title level={5}>Filter By:</Title>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '320px' }}
                                placeholder="Features"
                                onChange={(value)=>{console.log(`selected ${value}`);}}>

                                <Option key={'Features 1'}>Features 1</Option>
                                <Option key={'Features 2'}>Features 2</Option>
                            </Select>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '320px' }}
                                placeholder="Size"
                                onChange={(value)=>{console.log(`${value}`);}}
                            >
                                <Option key={'Size 1'}>Size 1</Option>
                                <Option key={'Size 2'}>Size 2</Option>
                                <Option key={'Size 3'}>Size 3</Option>
                                <Option key={'Size 4'}>Size 4</Option>
                            </Select>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '320px' }}
                                placeholder="Color"
                                onChange={(value)=>{console.log(`selected ${value}`);}}
                            >
                                <Option key={'Color 1'}>White</Option>
                                <Option key={'Color 2'}>Black</Option>
                                <Option key={'Color 3'}>Red</Option>
                            </Select>
                        </Space>
                    </Col>
                </Row>
                <Row style={{margin: '2rem 0 1rem 0'}}>
                    <Col>
                        <Space size={'large'} align="baseline">
                            <Title level={5}>Sort By:</Title>
                            <Select defaultValue="bestSelling" onChange={(value)=>{console.log(value)}}>
                                <Option value="bestSelling">Best Selling</Option>
                                <Option value="priceLow">Price(Low `&gt;` High)</Option>
                                <Option value="priceHigh">Price(High `&gt;` Low)</Option>
                                <Option value="latest">Latest</Option>
                                <Option value="mostReviewed">Most Reviewed</Option>
                                <Option value="name">Name</Option>
                            </Select>
                        </Space>
                    </Col>
                </Row>
            <Row gutter={[16,32]} justify="space-between">
                {
                    Categories[slug1Name].subCategories[slug2Name].subCategories[slug3Name].productIds?.map((productId,index)=><Col key={index}>
                        <ProductCard productId={productId} session={session} key={index} freshData={freshData}/>
                    </Col>)
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
                        <Pagination defaultCurrent={1} total={3} />
                    </Col>
                </Row>
            </section>
        </Layout>
    )
}
