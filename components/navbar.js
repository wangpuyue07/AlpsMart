import {Alert, Input, AutoComplete, Row, Col, Menu, Typography, Badge, Space} from 'antd';
import {UserOutlined, QuestionCircleOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import {Categories} from '../constants/products'
import Link from 'next/link';


import {useRouter} from 'next/router';
import styled from 'styled-components'

const {SubMenu} = Menu;
const {Paragraph, Text} = Typography;

import {useState} from "react";


const renderTitle = (title) => (
    <span>
    {title}
        <a
            style={{
                float: 'right',
            }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
      more
    </a>
  </span>
);

const renderItem = (title, count) => ({
    value: title,
    label: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            {title}
            <span>
        <UserOutlined/> {count}
      </span>
        </div>
    ),
});

const options = [
    {
        label: renderTitle('Libraries'),
        options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
        label: renderTitle('Solutions'),
        options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
        label: renderTitle('Articles'),
        options: [renderItem('AntDesign design language', 100000)],
    },
];

const StyledNavbar = styled.div`
  .ant-badge {
    width: 100%;
    line-height: inherit;
  }

`;


export default function Navbar({children}) {
    const [current, setCurrent] = useState('mail');
    const router = useRouter()
    return (
        <StyledNavbar>
            <Row><Col>&nbsp;</Col></Row>
            <Row justify="space-between" align="middle">
                <Col span={8}>
                    <a title="ALPSMart.co.nz" className="logo">
                        <Link href="/" passHref>
                            <img src="http://localhost:3000/images/logo.png"
                                 alt="TreasureBox.co.nz" width="300"/>
                        </Link>
                    </a>
                </Col>
                <Col span={10}>
                    <AutoComplete
                        dropdownClassName="certain-category-search-dropdown" Z
                        style={{width: '85%'}}
                        options={options}
                    >
                        <Input.Search size="large" placeholder="Search" enterButton/>
                    </AutoComplete>
                </Col>
                <Col span={6}>
                    <Row align="middle">
                        <Col span={8}>
                            <Link href={'/account/login'}><a>
                                <Space direction="vertical" style={{width: '100%', textAlign: 'center'}}>
                                    <QuestionCircleOutlined
                                        style={{fontSize: '2.5rem'}}/>
                                    <strong>FAQs</strong>
                                </Space>
                            </a></Link>
                        </Col>
                        <Col span={8}>
                            <Link href={'/account/login'}><a>
                                <Space direction="vertical" style={{width: '100%', textAlign: 'center'}}>
                                    <UserOutlined
                                        style={{fontSize: '2.5rem'}}/>
                                    <strong>My Account</strong>
                                </Space></a>
                            </Link>
                        </Col>
                        <Col span={8}>
                            <Badge count={2} offset={[-20, 0]}>
                                <Link href={'/checkout/cart'}>
                                    <a>
                                        <Space direction="vertical" style={{width: '100%', textAlign: 'center'}}>
                                            <ShoppingCartOutlined
                                                style={{fontSize: '2.5rem'}}/>
                                            <strong>My Cart</strong>
                                        </Space>
                                    </a>
                                </Link>
                            </Badge>

                        </Col>

                    </Row>
                </Col>

            </Row>
            <Row>
                <Col span={24}>
                    <Menu onClick={e => {
                        setCurrent(e.key)
                    }} selectedKeys={[current]} mode="horizontal"
                          forceSubMenuRender={true}
                    >
                        <Menu.Item key="home">
                            <Link href="/">Home</Link>
                        </Menu.Item>
                        {
                            Object.keys(Categories).map((Category) =>
                                <SubMenu key={Category} title={Category} popupOffset={[0, 0]}
                                         popupClassName={'MenuItem'}
                                         onTitleClick={() => {
                                             router.push(`/${Category.split(' ').join('-')}`);
                                         }
                                         }>
                                    {
                                        Object.keys(Categories[Category]).map(SubCategory =>
                                            <Menu.ItemGroup title={<Link
                                                href={`/${Category.split(' ').join('-')}/${SubCategory.split(' ').join('-')}`}>{SubCategory}</Link>}
                                                            key={SubCategory}>
                                                {
                                                    Categories[Category][SubCategory].map(name =>
                                                        <Menu.Item key={name} onClick={e => {
                                                            e.domEvent.preventDefault();
                                                            router.push(`/${Category.split(' ').join('-')}/${SubCategory.split(' ').join('-')}/${name.split(' ').join('-')}`);
                                                        }
                                                        }>{name}</Menu.Item>
                                                    )
                                                }
                                            </Menu.ItemGroup>
                                        )
                                    }
                                </SubMenu>)
                        }
                    </Menu>
                </Col>
            </Row>
        </StyledNavbar>
    )
}
