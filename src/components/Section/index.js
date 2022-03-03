import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "./Container";
import styles from "@/constants/styles";

const Section = ({ className, colored, backgroundImage, tight, type, children }) => {
	return (
		<div className={className}>
			<Container tight={tight} type={type}>
				{children}
			</Container>
		</div>
	);
};

Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	colored: PropTypes.string,
    backgroundImage: PropTypes.string,
	type: PropTypes.string,
    tight: PropTypes.bool
};

export default styled(Section)`
    background-color: ${props => props.colored ? props.colored : "transparent"};

    background-image: ${props => props.backgroundImage ? `url("${props.backgroundImage}")` : "transparent"};
    background-size: cover;
    background-position: center;

    margin: ${props => props.first ? 0 : styles.container_margin_medium} 0 ${props => props.tight ? 0 : styles.container_margin_medium};

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        margin: ${props => props.first ? 0 : styles.container_margin_large} 0 ${props => props.tight ? 0 : styles.container_margin_large};
    }

`;
