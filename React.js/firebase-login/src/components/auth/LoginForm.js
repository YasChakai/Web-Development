import React from 'react'
import { Heading, GridItem, FormLabel, Alert, AlertIcon, FormControl, Input, Button, } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import {useHistory, useLocation} from 'react-router-dom'

const LoginForm = () => {
    const { handleSubmit, register, errors, setError, formState } = useForm();

    const { sendSignInLinkToEmail } = useAuth();

    const history = useHistory()


    const location = useLocation()

    const onSubmit = async data => {

        try {
            await  sendSignInLinkToEmail (data.email, location.search)
            history.push('/')
        } catch (error) {
            setError('email', {
                type: 'manual',
                message: error.message,
            });
        }
    }
    return (
        <GridItem colStart={[1, null, null, 2, null, null]}
            colSpan={[3, null, null, 1, null, null]}
            p={6}>
            <Heading as="h1" mb={6}>
                Log In
                </Heading>
                
            {errors.email && (
                <Alert status="error" variant="subtle" mt={6} mb={6}>
                    <AlertIcon />
                    {errors.email.message}
                </Alert>
            )}
            {formState.isSumbitSuccessful && (
                < Alert status="success" variant="subtle" mt={6} mb={6}>
                    <AlertIcon />
                  Check your email to complete login
                </Alert>


                )}




            <form onSumbit={handleSubmit(onSubmit)}>

                <FormControl>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input name="email" placeholder="Email" ref={register()} />
                    <Button mt={4} colorScheme="green" isLoading={formState.isSubmitting} type="sumbit">Sumbit</Button>
                </FormControl>
            </form>
        </GridItem>
    )



};

export default LoginForm