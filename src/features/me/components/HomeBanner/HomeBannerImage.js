import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import { Link, withTranslation } from "@i18n";

import { Carousel } from "react-responsive-carousel";
import authors from "@/constants/authors";
import images from "@/constants/images";

const HomeBannerImage = ({ className, t, destaks = [] }) => {
    return (
        <Carousel className={className} autoPlay infiniteLoop showArrows showStatus={false} showThumbs={false}>
            {destaks.filter(d => d.title).map(d => (
                <a key={`${d.title}${d.author}`} href={d.route}>
                    <div className="carousel-item" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 21, 68, 0) 60%), url("${d.img ? d.img : images.defaultCard}")`}} />
                    <p className="legend">
                        {d.title}
                        <p className="subtitle">Por {d.author ? d.author : authors[d.category].name}</p>
                    </p>
                </a>
            ))}
        </Carousel>
    );
};

HomeBannerImage.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func,
    destaks: PropTypes.array,
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
