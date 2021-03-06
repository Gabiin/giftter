import React from "react";
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

//css
import "./sharedmedia.css";

const SharedMedia = ({ url, title }) => {
  return (
    <div className="sharedcontent">
      <span>Media: </span>
      <div className="item">
        <EmailShareButton
          url={url}
          quote={title}
          title="Share on Email"
          subject={`Look at this Gif: ${title}`}
        >
          <EmailIcon size={25} round />
        </EmailShareButton>
      </div>
      <div className="item">
        <FacebookShareButton url={url} quote={title} title="Share on Facebook">
          <FacebookIcon size={25} round />
        </FacebookShareButton>
      </div>
      <div className="item">
        <FacebookMessengerShareButton
          url={url}
          quote={title}
          title="Share on Facebook Messenger"
          appId="360303158538861"
        >
          <FacebookMessengerIcon size={25} round />
        </FacebookMessengerShareButton>
      </div>
      <div className="item">
        <PinterestShareButton
          url={url}
          quote={title}
          title="Share on Pinterest"
        >
          <PinterestIcon size={25} round />
        </PinterestShareButton>
      </div>

      <div className="item">
        <RedditShareButton url={url} quote={title} title="Share on Reddit">
          <RedditIcon size={25} round />
        </RedditShareButton>
      </div>

      <div className="item">
        {" "}
        <TelegramShareButton url={url} quote={title} title="Share on Telegram">
          <TelegramIcon size={25} round />
        </TelegramShareButton>
      </div>

      <div className="item">
        <TumblrShareButton url={url} quote={title} title="Share on Tumblr">
          <TumblrIcon size={25} round />
        </TumblrShareButton>
      </div>

      <div className="item">
        <TwitterShareButton url={url} quote={title} title="Share on Twitter">
          <TwitterIcon size={25} round />
        </TwitterShareButton>
      </div>

      <div className="item">
        <WhatsappShareButton url={url} quote={title} title="Share on Whatsapp">
          <WhatsappIcon size={25} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SharedMedia;
