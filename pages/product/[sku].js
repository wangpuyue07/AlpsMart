import {useEffect, useState} from 'react';
import Layout from "../../components/layout";
import {useRouter} from 'next/router';
import {
    Breadcrumb,
    Row,
    Col,
    Carousel,
    Image as AntImage,
    Typography,
    Card,
    Space,
    Select,
    Tag,
    Radio,
    Button,
    Descriptions, Modal,Result
} from "antd";
import {CheckCircleOutlined, PlusOutlined,ShoppingCartOutlined,RollbackOutlined} from '@ant-design/icons';
import {getSession} from "next-auth/react";
import Loading from '../../components/loading'

const {Title, Text} = Typography;

export default function Home({session,freshData}) {
    const router = useRouter()
    const {sku} = router.query;
    const [visible, setVisible] = useState(false);
    const [product, setProduct] = useState(null);
    const [quantity,setQuantity] = useState(1);
    const [ModalVisible, setModalVisible] = useState(false);
    useEffect(async ()=>{
        const res = await fetch(`/api/stripe/product/${sku}`, {
            method: 'GET'
        })
        let data = await res.json();
        data.metadata.category = JSON.parse(data.metadata.category);
        data.metadata.features = JSON.parse(data.metadata.features);
        data.metadata.specifications = JSON.parse(data.metadata.specifications);
        data.metadata.instruction = JSON.parse(data.metadata.instruction);
        setProduct(data);
    },[sku])
    return (
        product? <Layout session={session} freshData={freshData}>
            <section style={{margin: '0 24px 36px 24px'}}>
                <Row style={{margin: '2rem 0'}}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => {
                            router.push(`/${product.metadata.category[0].toLowerCase().split(' ').join('-')}`)
                        }}>
                            <a>{product.metadata.category[0]} </a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => {
                            router.push(`/${product.metadata.category[0].toLowerCase().split(' ').join('-')}/${product.metadata.category[1].toLowerCase().split(' ').join('-')}`)
                        }}>
                            <a>{product.metadata.category[1]} </a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => {
                            router.push(`/${product.metadata.category[0].toLowerCase().split(' ').join('-')}/${product.metadata.category[1].toLowerCase().split(' ').join('-')}/${product.metadata.category[2].toLowerCase().split(' ').join('-')}`)
                        }}>
                            <a>{product.metadata.category[2]} </a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {product.name}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row gutter={[24, 0]}>
                    <Col xl={12} md={24}>
                        <Carousel autoplay={false} dots={true}>
                            {
                                product.images.map((image,index)=><div key={index}>
                                    <AntImage
                                        preview={{visible: false}}
                                        alt={''}
                                        src={image}
                                        onClick={() => setVisible(true)}
                                    />
                                </div>)
                            }
                        </Carousel>
                        <div style={{display: 'none'}}>
                            <AntImage.PreviewGroup preview={{visible, onVisibleChange: vis => setVisible(vis)}}>
                                {
                                    product.images.map((image,index)=><AntImage key={index} alt={image}
                                                                           src={image}/>
                                    )
                                }
                                </AntImage.PreviewGroup>
                        </div>
                    </Col>
                    <Col xl={12} md={24}>
                        <Title level={3}>{product.name}</Title>
                        <Text>SKU: {product.id}</Text>
                        <Card style={{width: '100%', marginTop: '30px'}}>
                            <Title level={5}>${product.metadata.price/100} NZD</Title>
                            <Space size={'large'} align="baseline" style={{marginTop: '30px'}}>
                                <Title level={5}>Qty:</Title>
                                <Select value={quantity} onChange={(value) => {
                                    setQuantity(value);
                                }}>
                                    <Select.Option value="1">1</Select.Option>
                                    <Select.Option value="2">2</Select.Option>
                                    <Select.Option value="3">3</Select.Option>
                                    <Select.Option value="4">4</Select.Option>
                                    <Select.Option value="5">5</Select.Option>
                                    <Select.Option value="6">6</Select.Option>
                                    <Select.Option value="7">7</Select.Option>
                                    <Select.Option value="8">8</Select.Option>
                                    <Select.Option value="8">9</Select.Option>
                                    <Select.Option value="8">10</Select.Option>
                                </Select>
                                <Tag icon={<CheckCircleOutlined/>} color="success">In Stock</Tag>
                                <img alt="Payment Methods"
                                     src="https://www.treasurebox.co.nz/media/wysiwyg/test-images/bank-icon.jpg"
                                     width="265" height="30"/>
                            </Space>

                            <Row align={'end'}>
                                <Col>
                                    <Button style={{padding: '0 48px', marginTop: '24px'}} type="primary" shape="round"
                                            size={'large'} icon={<PlusOutlined/>}
                                    onClick={async ()=>{
                                        if(session.user){
                                            const checkoutSession = await fetch('/api/cart', {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                },
                                                body: JSON.stringify({
                                                    priceId:product.metadata.priceId,
                                                    quantity,
                                                    productId:product.id
                                                })
                                            });
                                            const data = await checkoutSession.json();
                                            if(data.id){
                                                const newSession = await getSession();
                                                freshData({session:newSession})
                                                setModalVisible(true);
                                            }

                                        }else{
                                            alert('没登录')
                                        }
                                    }}>Buy Now</Button>
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
                                            subTitle={product.name}
                                        />
                                    </Modal>
                                </Col>
                            </Row>

                        </Card>
                    </Col>
                </Row>
                <Descriptions style={{marginTop: 24}} title="Product Information:" bordered column={1}>
                    <Descriptions.Item label="Description">
                        <div dangerouslySetInnerHTML={{__html:product.metadata.longDescription}}></div>
                        <br/>
                        <strong dangerouslySetInnerHTML={{__html:product.metadata.note}}></strong>
                    </Descriptions.Item>
                    <Descriptions.Item label="Features">
                        <p>
                            <ul>
                                {
                                    product.metadata.features.map((feature,index)=><li key={index}>{feature}</li>)
                                }
                            </ul>
                        </p>
                    </Descriptions.Item>
                    <Descriptions.Item label="Specifications">
                        <p>
                            <ul>
                                {
                                    Object.keys(product.metadata.specifications).map((key,index)=><li key={index}>{key}: {product.metadata.specifications[key]}</li>)
                                }
                            </ul>
                        </p>
                    </Descriptions.Item>
                    <Descriptions.Item label="Instruction">
                        <p>
                            <a target="_blank" rel="noreferrer"
                               href={product.metadata.instruction.url}>{product.metadata.instruction.name}</a>
                        </p>
                    </Descriptions.Item>
                </Descriptions>
            </section>
        </Layout>:<Loading/>
    )
}
