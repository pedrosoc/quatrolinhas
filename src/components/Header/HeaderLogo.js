import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "@i18n";
import styles from "@/constants/styles";

const HeaderContent = ({ className }) => {
	return (
		<Link href="/">
			<a className={className}>
				<h2> QUATRO LINHAS </h2>
			</a>
		</Link>
	);
};

HeaderContent.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderContent)`
	color: ${styles.primary_color};
	text-decoration: none;
`;
