import algoliasearch from 'algoliasearch/lite';
import {Button, Card, Col, Modal, Result, Row, Typography, Skeleton} from "antd";
import {RollbackOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import styled from "styled-components";

const {Meta} = Card;
const {Text} = Typography;


const StyledProductCard = styled.div`
  .ant-card-meta-title {
    white-space: normal;

    .ant-col:first-child {
      margin-bottom: 1rem;
    }
  }
`




export default function ProductCard({product: initProduct, key, freshData, session, productId}) {
    const [ModalVisible, setModalVisible] = useState(false);
    const router = useRouter();
    const [product, setProduct] = useState(initProduct);
    useEffect(async ()=>{
        if(productId){
            const res = await fetch(`/api/stripe/product/${productId}`, {
                method: 'GET'
            })
            let product = await res.json();
            setProduct(product);
        }
    },[productId])
    if (!product) {
        return <Card style={{width: 256, cursor: 'pointer'}}
                     actions={[<Button key={key} type="link" disabled>Add to Cart</Button>]}
        >
            <Skeleton active/>
        </Card>
    }
    return (
        <StyledProductCard>
            <Card
                style={{width: 256, cursor: 'pointer'}}
                cover={
                    <img
                        alt={product.label}
                        src={product.images[0]}
                        onClick={() => {
                            router.push(`/product/${product.id}`);
                        }}
                    />
                }
                actions={[<Button key={key} type="link" onClick={async () => {
                    if (session.user) {
                        const checkoutSession = await fetch('/api/cart', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                priceId: product.metadata.priceId,
                                productId: product.id
                            })
                        });
                        const data = await checkoutSession.json();
                        if (data.id) {
                            const newSession = await getSession();
                            freshData({session: newSession})
                            setModalVisible(true);
                        }

                    } else {
                        alert('没登录')
                    }
                }}>Add to Cart</Button>]}
            >
                <Meta
                    title={<Row justify="space-between"><Col>{product.name}</Col><Col><Text
                        type="success">${product.metadata.price / 100}</Text></Col></Row>}
                    description={''}
                    onClick={() => {
                        router.push(`/product/${product.id}`);
                    }}
                />
                <Modal
                    visible={ModalVisible}
                    footer={[
                        <Button key="submit" loading={false} icon={<RollbackOutlined/>}
                                onClick={() => {
                                    setModalVisible(false)
                                }}>
                            Continue Shopping
                        </Button>,
                        <Button key="back" type="primary" onClick={() => {
                            setModalVisible(false);
                            router.push('/checkout/cart')
                        }} icon={<ShoppingCartOutlined/>}>
                            Go To Cart
                        </Button>
                    ]}
                    onCancel={() => {
                        setModalVisible(false);
                    }}
                    maskClosable={false}
                >
                    <Result
                        status="success"
                        title="You've just added this product to the cart successfully!"
                        subTitle={product.name}
                    />
                </Modal>
            </Card>
        </StyledProductCard>


    )
}
