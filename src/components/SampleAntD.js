import { Card, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const SampleAntD = () => {
  const cardData = [
    {
      title: 'Card 1'
    },
    {
      title: 'Card 2'
    },
    {
      title: 'Card 3'
    },
    {
      title: 'Card 4'
    }
  ];

  return (
    <div style={{ padding: '55px', background: '#f0f2f5' }}>
      <Row gutter={[16, 16]}>
        {cardData.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta title={card.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SampleAntD;