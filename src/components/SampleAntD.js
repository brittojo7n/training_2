import { Card, Row, Col } from 'antd';
import { Steps } from 'antd';
import '../App.css'

const { Meta } = Card;
const description = "Sample description"

const SampleAntD = () => {
    const cardData = [
        { title: 'Card 1' },
        { title: 'Card 2' },
        { title: 'Card 3' },
        { title: 'Card 4' }
    ];

    return (
        <div style={{ padding: '50px' }}>
            <div style={{ marginBottom: '50px' }}>
            <Steps
                current={1}
                items={[
                {
                    title: 'Finished',
                    description,
                },
                {
                    title: 'In Progress',
                    description,
                    subTitle: 'Left 00:00:08',
                },
                {
                    title: 'Waiting',
                    description,
                },
                ]}
            /></div>
            <Row style={{gap: '5px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {cardData.map((card, idx) => (
                    <Col
                        key={idx}
                        xs={24}
                        sm={12}
                        md={8}
                        lg={6}
                    >
                        <Card>
                            <Meta title={card.title} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SampleAntD;
