import React, { useContext } from 'react'
import { Container, ListGroup, ListGroupItem, CardBody, Card, CardHeader, Row } from 'reactstrap';
import Queries from '../Components/Queries';
import { XitikContext } from '../context/Context';

const QueryPage = () => {

    const { state } = useContext(XitikContext);

    const {messages} = state;

    console.log(messages.length)
    return (
       <Container >
           
         <Card style={{ width: 'auto', 
         textAlign: 'center', marginLeft: "auto",marginRight: "auto" }}
         className="mb-2 mt-5 pt-5"
          >
         <CardHeader style={{color:"white",backgroundColor: "#2B2B52"}} >
             <Row >
              <h3 className="ml-2 mt-3"><b> Queries </b> </h3>
              </Row>
              </CardHeader>
      
         <CardBody  >
         
           {messages.length === 0 ? (
        <h1 className="Center text-large text-primary pt-5 pb-5 mt-5 mb-5"> No Queries found !!!</h1>)
        : (
            <ListGroup className="mt-4">
                {Object.entries(messages).map(([key,value])=>(
                    <ListGroupItem key={key}>
                        <Queries messages={value} queryKey={key} />
                    </ListGroupItem>
                ))}
            </ListGroup>
        )}
        </CardBody>
        </Card>
       </Container>
    )
}
export default QueryPage;
