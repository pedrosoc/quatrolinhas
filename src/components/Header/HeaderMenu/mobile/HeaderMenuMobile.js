import React from "react";

import PropTypes from "prop-types";

import Modal from "@/components/Modal";
import SVG from "@/components/SVG";

import styles from "@/constants/styles";

import HeaderMenuMobileContent from "./HeaderMenuMobileContent";

const HeaderMenuMobile = ({ contents, social }) => {
	return (
		<Modal
			trigger={<SVG name="menu" width="25" fill={styles.primary_color} />}
			content={<HeaderMenuMobileContent social={social} contents={contents} />}
		/>
	);
};

HeaderMenuMobile.propTypes = {
	social: PropTypes.array,
	contents: PropTypes.array
};

export default HeaderMenuMobile;
