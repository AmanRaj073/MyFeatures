import logo from "../logo.svg";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

function GoogleShare() {

  useEffect(()=>{
    document.title ="Google Share"
  })

const shareUrl=window.location.href // Fetch Current Url of page

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Google Auth Intergration</p>
        <div>
          <FacebookShareButton url={shareUrl} >
            <FacebookIcon  size={50} round={true}/>
          </FacebookShareButton>
          &nbsp;&nbsp;&nbsp;
          <WhatsappShareButton url={shareUrl} >
            <WhatsappIcon size={50} round={true}/>
          </WhatsappShareButton>
        </div>
        <p></p>
        <span>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </span>
      </header>
    </div>
  );
}

export default GoogleShare;
