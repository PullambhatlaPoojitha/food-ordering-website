import { Card, Grid, Link, Row, Text } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Vegetarian pizzas",
      img: "/images/cover1.jpg",
      
    },
    {
      title: "Non Vegetarian pizzas",
      img: "/images/cover2.jpg",
      
    },
    {
      title: "...and More",
      img: "/images/cover32.png",
      price: "Explore Now!",
    },
    
  ];

  return (
    <Grid.Container gap={2} justify="flex-start">
      {list.map((item, index) => (
          
        <Grid xs={6} sm={3} key={index}>
          <Card hoverable clickable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src={item.img}
                width="100%"
                height={200}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer justify="flex-start">
              <Row wrap="wrap" justify="space-between">
                <Text b>{item.title}</Text>
                <Link css={{ color: "blue", fontWeight: "$semibold" }} href="/">
                  {item.price}
                </Link>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
