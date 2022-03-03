import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

import images from "@/constants/images";
import { Carousel } from "react-responsive-carousel";

const HomeBannerImage = ({ className, t }) => {
	// return (
	// 	<div
	// 		style={{ backgroundImage: `url("${images.background}`}}
	// 		alt={t("home.altImage")}
	// 		className={className}
	// 	/>
	// );
    return (
        <Carousel className={className} infiniteLoop showArrows showStatus={false} showThumbs={false}>
            <div>
                <div className="carousel-item" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 21, 68, 0) 60%), url("${images.background}")`}} />
                <p className="legend">
                    Futebol e Campinas: A relação de ouro
                    <p className="subtitle">Por Isabella de Vito</p>
                </p>
            </div>
            <div>
                <div className="carousel-item" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 21, 68, 0) 60%), url("https://http2.mlstatic.com/D_NQ_NP_657068-MLB40733214303_022020-O.jpg")`}} />
                <p className="legend">
                    Paisagens de Campinas
                    <p className="subtitle">Por Israel Moreira</p>
                </p>
            </div>
            <div>
                <div className="carousel-item" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 21, 68, 0) 60%), url("https://s2.glbimg.com/WPngOimB9f_97VJSUm_tkHoMo48=/0x115:1025x769/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/j/V/86NwLjT16rx5BUStaUcg/trezedemaio-centro-campinas.jpeg")`}} />
                <p className="legend">
                    O centro de Campinas
                    <p className="subtitle">Por João Felipe</p>
                </p>
            </div>
            <div>
                <div className="carousel-item" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 21, 68, 0) 60%), url("https://www.livehere.com.br/blog/wp-content/uploads/2019/05/morar-em-campinas-990x556.jpg")`}} />
                <p className="legend">
                    Campinas vista de cima
                    <p className="subtitle">Por Li Zancheta</p>
                </p>
            </div>
        </Carousel>
    );
};

HomeBannerImage.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func
};

export default withTranslation("common")(styled(HomeBannerImage)`
	width: 100%;
    
    & .carousel-item {
        height: 500px;
        width: 100%;
        background-size: cover;
        background-position: center;
    }
    
    & .slide .legend {
        font-family: "Poppins",sans-serif;
        font-weight: bold;
        font-size: 24px;
        opacity: 1;
        background: transparent;
        margin-top: 0;
        margin-bottom: 0;
    }
    
    & .slide .legend .subtitle {
        font-size: 16px;
        font-weight: initial;
    }

`);
