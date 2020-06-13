import React, { useContext } from 'react'
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import Queries from '../Components/Queries';
import { XitikContext } from '../context/Context';

const QueryPage = () => {

    const { state } = useContext(XitikContext);

    const {messages} = state;

    console.log(messages.length)
    return (
       <Container className="mt-4">
           {messages.length === 0 ? (
        <h1 className="Center text-large text-primary pt-5 pb-5 mt-5 mb-5"> No Queries found !!!</h1>)
        : (
            <ListGroup>
                {Object.entries(messages).map(([key,value])=>(
                    <ListGroupItem key={key}>
                        <Queries messages={value} queryKey={key} />
                    </ListGroupItem>
                ))}
            </ListGroup>
        )}
       </Container>
    )
}
export default QueryPage;
