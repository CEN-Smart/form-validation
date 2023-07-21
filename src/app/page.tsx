'use client'

import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Grid, Input, VStack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'

const HomePage = () => {
  return (
    <>
      <Grid minH='100vh' placeItems='center'>
        <Box bg='gray.700' color='white' p={6} borderRadius='md' >
          <Formik initialValues={{
            email: '',
            password: '',
            rememberMe: false
          }}
            onSubmit={(values) => (
              alert(JSON.stringify(values, null, 2))
            )}>
            {({ handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Field as={Input} name='email' id='email' type='email' variant='filled' placeholder='Enter your email' validate={(value: string) => {
                      let error
                      if (!value) {
                        error = 'Email is required'
                      }
                      return error
                    }} />
                    <FormErrorMessage>
                      {errors.email}
                    </FormErrorMessage>
                  </FormControl >
                  <FormControl isInvalid={!!errors.password && touched.password}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Field as={Input} name='password' id='password' type='password' variant='filled' placeholder='Password' validate={(value: string) => {
                      let error
                      if (!value) {
                        error = 'Password is required'
                      } else if (value.length < 8) {
                        error = 'Password must be at least 8 characters long'
                      }
                      return error
                    }} />
                    <FormErrorMessage>
                      {errors.password}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <Field colorScheme='whatsapp' as={Checkbox} id='rememberMe' name='rememberMe' type='checkbox'>
                      Remember Me
                    </Field>
                  </FormControl>
                  <Button colorScheme='whatsapp' w='full' type='submit'>Submit</Button>
                </VStack>
              </Form>

            )}
          </Formik>
        </Box>
      </Grid>
    </>
  )
}

export default HomePage