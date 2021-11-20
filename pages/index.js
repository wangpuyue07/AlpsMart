import Layout from "../components/layout";
import {Avatar, Button, Card, Menu, PageHeader, Row, Col,Tag, Typography,Carousel,Space} from "antd";

const { Paragraph,Text } = Typography;
const { Meta } = Card;



export default function Home({session,freshData}) {
  return (
    <Layout session={session} freshData={freshData}>
      <Carousel autoplay arrows={true}>
        <div>
          <img alt='' src="https://www.treasurebox.co.nz/media/wysiwyg/slideshow-banners/home-office-furniture-211019-1-0.jpg"/>
        </div>
        <div>
          <img alt='' src="https://www.treasurebox.co.nz/media/wysiwyg/slideshow-banners/pop-up-gazebos-211028-1-0.jpg"/>
        </div>
        <div>
          <img alt='' src="https://www.treasurebox.co.nz/media/wysiwyg/slideshow-banners/home-office-furniture-211019-1-0.jpg"/>
        </div>
        <div>
          <img alt='' src="https://www.treasurebox.co.nz/media/wysiwyg/slideshow-banners/alert-level-3-announcement-210922-1-0.jpg"/>
        </div>
      </Carousel>
      <br/>
      <br/>
      <Row gutter={[30,30]} align={'middle'} justify="space-between">
        <Col>
          <Card
              hoverable
              style={{ width: 204  }}
              cover={<img alt="example" src="https://www.treasurebox.co.nz/media/wysiwyg/index/top-category-sofas-sectionals-211027.jpg" />}
          >
            <Meta description="SOFAS&SECTIONALS" />
          </Card>
        </Col>
        <Col>
          <Card
              hoverable
              style={{ width: 204  }}
              cover={<img alt="example" src="https://www.treasurebox.co.nz/media/wysiwyg/index/top-category-desk.jpg" />}
          >
            <Meta description="DESK" />
          </Card>
        </Col>
        <Col>
          <Card
              hoverable
              style={{ width: 204  }}
              cover={<img alt="example" src="https://www.treasurebox.co.nz/media/wysiwyg/index/entertainment-units-22320.jpg" />}
          >
            <Meta description="ENTERTAINMENT UNIT" />
          </Card>
        </Col>
        <Col>
          <Card
              hoverable
              style={{ width: 204  }}
              cover={<img alt="example" src="https://www.treasurebox.co.nz/media/wysiwyg/index/top-category-bed-frame-211027.jpg" />}
          >
            <Meta description="BED FRAME" />
          </Card>
        </Col>
        <Col>
          <Card
              hoverable
              style={{ width: 204  }}
              cover={<img alt="example" src="https://www.treasurebox.co.nz/media/wysiwyg/index/top-category-outdoor-furniture-211027.jpg" />}
          >
            <Meta description="OUTDOOR FURNITURE" />
          </Card>
        </Col>
        <Col>
          <Card
              hoverable
              style={{ width: 204  }}
              cover={<img alt="example" src="https://www.treasurebox.co.nz/media/wysiwyg/index/top-category-sideboard-1.jpg" />}
          >
            <Meta description="SIDEBOARD" />
          </Card>
        </Col>
        <Col>
          <Card
              hoverable
              style={{ width: 204  }}
              cover={<img alt="example" src="https://www.treasurebox.co.nz/media/wysiwyg/index/top-category-gazebos.jpg" />}
          >
            <Meta description="GAZEBO" />
          </Card>
        </Col>
        <Col>
          <Card
              hoverable
              style={{ width: 204  }}
              cover={<img alt="example" src="https://www.treasurebox.co.nz/media/wysiwyg/index/top-category-wardrobe-211027.jpg" />}
          >
            <Meta description="WARDROBE" />
          </Card>
        </Col>
        <Col>
          <Card
              hoverable
              style={{ width: 204  }}
              cover={<img alt="example" src="https://www.treasurebox.co.nz/media/wysiwyg/index/top-category-drawer-211027.jpg" />}
          >
            <Meta description="DRAWERS" />
          </Card>
        </Col>
        <Col>
          <Card
              hoverable
              style={{ width: 204  }}
              cover={<img alt="example" src="https://www.treasurebox.co.nz/media/wysiwyg/index/top-category-dining-chairs-211027.jpg" />}
          >
            <Meta description="DINING CHAIRS" />
          </Card>
        </Col>

      </Row>
      <br/>
      <br/>
    </Layout>
  )
}
