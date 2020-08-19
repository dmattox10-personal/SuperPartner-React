import React, { useContext } from 'react'
import { Row, Col, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import { spContext } from '../contexts/spContext'

const Login = props => {

    const history = useHistory()
    const { loginActiveUser } = useContext(spContext)
    if (!localStorage.getItem('users') && !localStorage.getItem('user')) {
        history.push('/setup')
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
           username: Yup.string()
           .required('Username is Required'),
           password: Yup.string()
           .required('Password is Required'),
        }),
        onSubmit: values => {
            loginActiveUser(values)
        },    
    })

    return (
        <div>
            <Row>
                <Col xs='3'></Col>
                <Col xs='6'>
                    <div className='card border-info mb-3'>
                        <div className='card-header'>Login</div>
                        <div className='card-body'>
                            <Form onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col xs='12'>
                                        <FormGroup>
                                            <Label for='username'>Username</Label>
                                            <Input
                                                id='username'
                                                name='username'
                                                type='text'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.username}
                                                className={formik.touched.username && !formik.errors.username ? 'form-control is-valid' : 'form-control is-invalid'}
                                            />
                                            {formik.touched.username && formik.errors.username ? <div className='invalid-feedback'>{formik.errors.username}</div> : null}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs='12'>
                                        <FormGroup>
                                            <Label for='password'>Password</Label>
                                            <Input
                                                id='password'
                                                name='password'
                                                type='password'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                                className={formik.touched.password && !formik.errors.password ? 'form-control is-valid' : 'form-control is-invalid'}
                                            />
                                            {formik.touched.password && formik.errors.password ? <div className='invalid-feedback'>{formik.errors.password}</div> : null}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs='12'>
                                        <br />
                                        <Button type='submit' className='btn-info'>Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login