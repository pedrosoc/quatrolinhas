import React, { Fragment } from "react";
import PropTypes from "prop-types";

import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon
} from "react-share";

const SocialShare = ({ url, title, iconSize }) => {
	if (!url) {
		return <Fragment />
	}
	
	return (
		<Fragment>
			<FacebookShareButton url={url} quote={`${title} - @quatrolinhas`}>
                <FacebookIcon size={iconSize} round />
            </FacebookShareButton>
            <TelegramShareButton url={url} title={title}>
                <TelegramIcon size={iconSize} round />
            </TelegramShareButton>
            <TwitterShareButton url={url} title={`${title} - @quatrolinhas`} related={["@quatrolinhas"]}>
                <TwitterIcon size={iconSize} round />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={iconSize} round />
            </WhatsappShareButton>
		</Fragment>
	);
};

SocialShare.propTypes = {
	className: PropTypes.string,
	url: PropTypes.string,
	title: PropTypes.string
};

export default SocialShare;
