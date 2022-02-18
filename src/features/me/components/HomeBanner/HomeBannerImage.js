import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

import images from "@/constants/images";

const HomeBannerImage = ({ className, t }) => {
	return (
		<div
			style={{ backgroundImage: `url("${images.background}`}}
			alt={t("home.altImage")}
			className={className}
		/>
	);
    return null;
};

HomeBannerImage.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func
};

export default withTranslation("common")(styled(HomeBannerImage)`
	width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center;
`);
