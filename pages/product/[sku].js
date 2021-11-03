import {useState} from 'react';
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

const {Title, Text} = Typography;

export default function Home() {
    const router = useRouter()
    const {sku} = router.query;
    const [visible, setVisible] = useState(false);
    const [ModalVisible, setModalVisible] = useState(false);
    return (
        <Layout>
            <section style={{margin: '0 24px 36px 24px'}}>
                <Row style={{margin: '2rem 0'}}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => {
                            router.push(`/Furniture `)
                        }}>
                            <a>Furniture </a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => {
                            router.push(`/Furniture/Living-Room-Furniture`)
                        }}>
                            <a>Living Room Furniture</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => {
                            router.push(`/Furniture/Living-Room-Furniture/Entertainment-Units`)
                        }}>
                            <a>Entertainment Units</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {sku}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row gutter={[24, 0]}>
                    <Col xl={12} md={24}>
                        <Carousel autoplay={false} dots={true}>
                            <div>
                                <AntImage
                                    preview={{visible: false}}
                                    alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005.jpg"
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                            <div>
                                <AntImage
                                    preview={{visible: false}}
                                    alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-1.jpeg"
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                            <div>
                                <AntImage
                                    preview={{visible: false}}
                                    alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-2.jpeg"
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                            <div>
                                <AntImage
                                    preview={{visible: false}}
                                    alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-3.jpeg"
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                            <div>
                                <AntImage
                                    preview={{visible: false}}
                                    alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-4.jpeg"
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                            <div>
                                <AntImage
                                    preview={{visible: false}}
                                    alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-5.jpeg"
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                            <div>
                                <AntImage
                                    preview={{visible: false}}
                                    alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-6.jpeg"
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                            <div>
                                <AntImage
                                    preview={{visible: false}}
                                    alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-7.jpeg"
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                            <div>
                                <AntImage
                                    preview={{visible: false}}
                                    alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-8.jpeg"
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                            <div>
                                <AntImage
                                    preview={{visible: false}}
                                    alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-9.jpeg"
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                        </Carousel>
                        <div style={{display: 'none'}}>
                            <AntImage.PreviewGroup preview={{visible, onVisibleChange: vis => setVisible(vis)}}>
                                <img alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005.jpg"/>
                                <img alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-1.jpeg"/>
                                <img alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-2.jpeg"/>
                                <img alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-3.jpeg"/>
                                <img alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-4.jpeg"/>
                                <img alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-5.jpeg"/>
                                <img alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-6.jpeg"/>
                                <img alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-7.jpeg"/>
                                <img alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-8.jpeg"/>
                                <img alt={''}
                                    src="https://www.treasurebox.co.nz/media/catalog/product/cache/1/thumbnail/1024x768/9df78eab33525d08d6e5fb8d27136e95/2/2/22005-9.jpeg"/>
                            </AntImage.PreviewGroup>
                        </div>
                    </Col>
                    <Col xl={12} md={24}>
                        <Title level={3}>MAIZE 1.3M LED Entertainment Unit - WHITE</Title>
                        <Text>SKU: 22005</Text>
                        <Card style={{width: '100%', marginTop: '30px'}}>
                            <Title level={5}>$380.00</Title>
                            <p><Text type="secondary">Or 10 Payments of $14.00 interest free with Genoapay</Text></p>
                            <p><Text type="secondary">4 fortnightly payments of NZ$ 35.00</Text></p>
                            <p><Text type="secondary">6 payments from NZ$ 23.33</Text></p>
                            <Space size={'large'} align="baseline" style={{marginTop: '30px'}}>
                                <Title level={5}>Qty:</Title>
                                <Select defaultValue="1" onChange={(value) => {
                                    console.log(value)
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
                            <Row align={'end'}>
                                <Col>
                                    <Button style={{padding: '0 48px', marginTop: '24px'}} type="primary" shape="round"
                                            size={'large'} icon={<PlusOutlined/>}
                                    onClick={()=>{
                                        setModalVisible(true);
                                    }}>Buy Now</Button>
                                    <Modal
                                        visible={ModalVisible}
                                        footer={[
                                            <Button key="submit"  loading={false} icon={<RollbackOutlined />}
                                                    onClick={()=>{setModalVisible(false);router.push('/')}}>
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
                                </Col>
                            </Row>

                        </Card>
                    </Col>
                </Row>
                <Descriptions style={{marginTop: 24}} title="Product Information:" bordered column={1}>
                    <Descriptions.Item label="Description"><p>
                        A brand new contemporary gem for your modern decor, simple and sleek design to fit in your
                        living room for all your entertainment needs. This MAIZE High Gloss Entertainment Unit
                        features flat top for all kind of TV or media storage, also comes with 2 independent
                        cabinets and 2 open shelves allowing extra storage space for gaming consoles, headsets, DVDs
                        and all sorts of accessories and other decorations such as vases and photos; equipped with
                        LED lights which will make your room more fashionable, modern and background wall brighter;
                        made of high quality particle board with a smooth melamine finish for easy maintenance and
                        cleaning which is durable and sturdy, while the UV high gloss finish and tempered glass give
                        the entertainment unit a modern look to anchor to your space.
                        <br/><br/>We update the entertainment unit with a thicker board that look sturdy is thicker
                        and stronger for use. Add modern style and storage space to your entertainment area with
                        this MAIZE High Gloss Entertainment Unit now!
                        <br/><br/>
                        <strong>PLEASE NOTE:</strong> Assembly is required!
                        <br/><br/>
                    </p></Descriptions.Item>
                    <Descriptions.Item label="Features">
                        <p>
                            <ul>
                                <li>100% Brand New 1.3M High Gloss LED Entertainment Unit TV Stand Cabinet</li>

                                <li>Modern and elegant design</li>

                                <li>Features 2 storage cabinets and 2 open shelves</li>

                                <li>Tempered glass shelves</li>

                                <li>Come with 16 colours LED light</li>

                                <li>High gloss finish - easy clean smooth surface</li>

                                <li>High-quality thicker particle board with UV paint
                                    construction
                                </li>

                                <li>Environmental friendly material</li>

                                <li>1.3m flat top perfect for studios and
                                    apartments
                                </li>

                                <li>Spacious storage space for media
                                    accessories
                                </li>

                            </ul>
                        </p>
                    </Descriptions.Item>
                    <Descriptions.Item label="Specifications">
                        <p>
                            <ul>
                                <li>Product Dimensions (L W H): 130cm x 35cm x 35cm</li>
                                <li>Package Dimensions (L W H): 150cm x 41cm x 11.5cm</li>
                                <li>Product Weight: 19kg</li>
                                <li>Package Weight: 21kg</li>
                                <li>Board Thickness: 18mm / 15mm / 3mm</li>
                                <li>Material: Particle board / Melamine / MDF / Metal / Tempered glass</li>
                                <li>Colour: White</li>
                            </ul>
                            <br/>
                            <p>Package Contents:<br/>1 x MAIZE 1.3M High Gloss LED Entertainment Unit TV Stand Cabinet -
                                WHITE</p>
                        </p>
                    </Descriptions.Item>
                    <Descriptions.Item label="Instruction">
                        <p>
                            <a target="_blank" rel="noreferrer"
                               href="https://treasurebox.co.nz/media/wysiwyg/instructions/22005-maize-1.3m-led-entertainment-unit.pdf">Entertainment
                                Unit Assembly Instructions</a>
                        </p>
                    </Descriptions.Item>
                </Descriptions>
            </section>
        </Layout>
    )
}
