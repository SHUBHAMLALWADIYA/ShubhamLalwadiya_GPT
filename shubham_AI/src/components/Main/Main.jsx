import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "../Main/Main.css";
import { Context } from "../../context/Context";
import Markdown from 'https://esm.sh/react-markdown@9'
import Myself from "../Myself";
import AvatarWithRipple from "../Image";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="main">
      <div className="nav">
        <p>Shubham Lalwadiya's GPT</p>
       
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span> Shubham Lalwadiya's GPT...</span>
              </p>
              <p>How can i help you ..</p>
            </div>
    <AvatarWithRipple className="avatar"/>
    <div className="cards">
      <div className="card" onClick={() => handleClick('https://github.com/SHUBHAMLALWADIYA')}>
        <p>For coding related thing connect through Github</p>
        <img src={assets.github_icon} alt="Compass Icon" />
      </div>
      <div className="card" onClick={() => handleClick('https://www.linkedin.com/in/shubham-lalwadiya-402081221/')}>
        <p>let's connect through LinkedIn</p>
        <img src={assets.linkedin_icon} alt="Bulb Icon" />
      </div>
      <div className="card" onClick={() => handleClick('https://api.whatsapp.com/send?phone=917990336834')}>
        <p>let's connect through WhatsApp</p>
        <img src={assets.whatsapp_icon} alt="Message Icon" />
      </div>
      <div className="card" onClick={() => handleClick('mailto:lalwadiyashubham123@gmail.com')}>
        <p>lalwadiyashubham123@gmail.com</p>
        <img src={assets.gmail_icon} alt="Code Icon" />
      </div>
    </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading?
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>:
                <p  ><Markdown>{resultData}</Markdown></p>}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
             {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
