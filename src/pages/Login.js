import React, { useState } from 'react'
import { Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Row,
    Input,
    Card,
    CardBody,
    CardFooter,
    CardHeader } from 'reactstrap';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history= useHistory();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSignin = () =>{
       if(email === "technoism2018@gmail.com" && password === "goodnight2018")
       {
           toast.success("Admin Authorised")

           history.push("/queries");
       }
       else{
        toast("Sorry you are not Admin", {type: "error"})
       }

    }

    const handleSubmit= e =>{
        e.preventDefault()
        handleSignin()
    }





    return (
        <Container className='text-center mt-5 mb-5'>
        <Row>
            <Col lg={6} className='offset-lg-3 mt-5'>
                <Card>
                    <Form onSubmit={handleSubmit}>
                        <CardHeader className=''>Admin SignIn</CardHeader>
                        <CardBody>
                            <FormGroup row>
                                <Label for='email' sm={3}>
                                    Email
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='Email'
                                        value={email}
                                        onChange={e => setemail(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='password' sm={3}>
                                    Password
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='Password'
                                        value={password}
                                        onChange={e => setpassword(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <Row>
                            <Button type='submit' block color='primary'>
                                Sign In
                            </Button>
                            </Row>
                        </CardFooter>
                    </Form>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default Login;
