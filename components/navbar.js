import {Alert, Input, AutoComplete, Row, Col, Menu, Spin, Badge, Space} from 'antd';
import {UserOutlined, QuestionCircleOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import {Categories} from '../constants/categories'
import Link from 'next/link';
import {debounce} from "debounce";
import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('ZAZ6U12BFI', 'ea3762995c8ce76a7b97c28acb9e6917');
const index = client.initIndex('Products');

import {useRouter} from 'next/router';
import styled from 'styled-components'

const {SubMenu} = Menu;

import {useState} from "react";
import {useSession} from "next-auth/react";


const renderTitle = (category,input) => (
    <span>
    {category}
        <Link href={{pathname: '/search', query: {input,category}}}>
        <a
            style={{
                float: 'right',
            }}

            rel="noopener noreferrer"
        >
      more
    </a></Link>
  </span>
);

const renderItem = (product) => ({
    value: product.id,
    label: (
        <Row gutter={[15]}>
            <Col span={4}>
                <img src={product.images[0]} style={{width:'100%'}}/>
            </Col>
            <Col span={20}>
                <Space direction="vertical" size={'middle'} style={{width:'100%'}}>
                    <p>{product.name}</p>
                    <p>${product.metadata.price/100}</p>
                </Space>
            </Col>
        </Row>
    ),
});



const StyledNavbar = styled.div`
  .ant-badge {
    width: 100%;
    line-height: inherit;
  };

`;


export default function Navbar({session,freshData}) {
    const [current, setCurrent] = useState('home');
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const delaySearch = debounce(async function (value) {
        setOptions([]);
        if(!value) return;
        setLoading(true);
        var data = {};
        const result = await index.search(value, {
            hitsPerPage: 20,
        });
        setLoading(false);
        result.hits.forEach(cell=>{
            cell.metadata.category = JSON.parse(cell.metadata.category);
            if(!data[cell.metadata.category[0]]){
                data[cell.metadata.category[0]] = {
                    label: renderTitle(cell.metadata.category[0],value),
                    options: [renderItem(cell)],
                }
            }else{
                data[cell.metadata.category[0]].options.push(renderItem(cell))
            }
        });
        data = Object.keys(data).map(key=>data[key]);
        setOptions(data);
    }, 1000);
    return (
        <StyledNavbar>
            <Row><Col>&nbsp;</Col></Row>
            <Row justify="space-between" align="middle">
                <Col span={8}>
                    <a title="ALPSMart.co.nz" className="logo">
                        <Link href="/" passHref>
                            <img src="/images/logo.png"
                                 alt="TreasureBox.co.nz" width="300"/>
                        </Link>
                    </a>
                </Col>
                <Col span={10}>
                    <AutoComplete
                        dropdownClassName="certain-category-search-dropdown"
                        style={{width: '85%'}}
                        options={options}
                        dropdownMatchSelectWidth={500}
                        notFoundContent={<Row style={{margin:'30px auto'}} justify="center"><Col>{loading?<Spin size="large"/>:<span>Sorry, nothing found for your input.</span>}</Col></Row>}
                        onSelect={(barcode)=>{
                            router.push(`/product/${barcode}`);
                        }}
                        onChange={(value) => {
                            delaySearch(value);
                        }}
                    >
                        <Input.Search size="large" placeholder="Search" enterButton
                                      onSearch={(value)=>{
                                          value.trim()&&router.push(`/search?input=${value}`);
                                      }}

                        />
                    </AutoComplete>
                </Col>
                <Col span={6}>
                    <Row align="middle">
                        <Col span={8}>
                            <Link href={'/auth/signin'}><a>
                                <Space direction="vertical" style={{width: '100%', textAlign: 'center'}}>
                                    <QuestionCircleOutlined
                                        style={{fontSize: '2.5rem'}}/>
                                    <strong>FAQs</strong>
                                </Space>
                            </a></Link>
                        </Col>
                        <Col span={8}>
                            <Link href={'/auth/me'}><a>
                                <Space direction="vertical" style={{width: '100%', textAlign: 'center'}}>
                                    <UserOutlined
                                        style={{fontSize: '2.5rem'}}/>
                                    <strong>My Account</strong>
                                </Space></a>
                            </Link>
                        </Col>
                        <Col span={8}>
                            <Badge count={session?.user?.cartItems.map(item=>item.quantity).reduce(function(a, b){
                                return a + b;
                            })||'0'} offset={[-20, 0]}>
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
                                <SubMenu key={Category} title={Categories[Category].name} popupOffset={[0, 0]}
                                         popupClassName={'MenuItem'}
                                         onTitleClick={() => {
                                             router.push(`/${Category.split(' ').join('-')}`);
                                         }
                                         }>
                                    {
                                        Object.keys(Categories[Category].subCategories).map(SubCategory =>
                                            <Menu.ItemGroup title={<Link
                                                href={`/${Category.split(' ').join('-')}/${SubCategory.split(' ').join('-')}`}>{Categories[Category].subCategories[SubCategory].name}</Link>}
                                                            key={SubCategory}>
                                                {
                                                    Object.keys(Categories[Category].subCategories[SubCategory].subCategories).map(name =>
                                                        <Menu.Item key={name} onClick={e => {
                                                            e.domEvent.preventDefault();
                                                            router.push(`/${Category.split(' ').join('-')}/${SubCategory.split(' ').join('-')}/${name.split(' ').join('-')}`);
                                                        }
                                                        }>{Categories[Category].subCategories[SubCategory].subCategories[name].name}</Menu.Item>
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
