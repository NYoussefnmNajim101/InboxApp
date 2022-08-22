/*import { VStack } from '@chakra-ui/layout';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
const SignUp = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    
    const handleClick = setShow(!show); 
    const postDetails = (pics) => {
        
    };
    const submitHandler = () => {
        
    };
    return (
        <>
        <VStack spacing={"5px"} color="black">
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='enter your name'
                    onChange={(e)=>setName(e.target.value)}
                />
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='enter your email'
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input
                    placeholder='enter your password'
                    type={show? "text":"password"}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <InputRightElement width={"4.5rem"}>
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='ConfirmPassword' isRequired>
                <FormLabel>Password confirmation</FormLabel>
                <Input
                    placeholder='confirm your password'
                    type={"password"}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />
            </FormControl>
            <FormControl id='pic' isRequired>
                <FormLabel>upload your picture</FormLabel>
                <Input
                    p={1.5}
                    accept="image/*"
                    type={"file"}
                    onChange={(e)=>postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button colorScheme={"blue"} width="100%" style={{marginTop: 15}} onClick={submitHandler}>Sign Up</Button>
        
            </VStack>
            </>
    );
};

export default SignUp;*/