import React,{useState} from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import { render } from 'react-dom';

 
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
 
`;

function Googlelogin(){

        const[name,setname]=useState("");
        const[email,setemail]=useState("");
        const[url,seturl]=useState("");

        const responseGoogle = (response) => {
            setname(response.profileObj.name);
            setemail(response.profileObj.email);
            seturl(response.profileObj.imageURL);
        }

        return(
        <GridWrapper>
            <h1>login with google</h1>
        <h2>{name}</h2>
            <GoogleLogin
                clientId="568784012922-0qijjo45njutqvsiui27155veufr53kq.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
        />
        </GridWrapper>
        );
}

export default Googlelogin();