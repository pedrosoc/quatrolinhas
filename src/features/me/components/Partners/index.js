import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import styles from "@/constants/styles";

const Partners = ({ className }) => {
	return (
		<div className={className}>
			<h4>Parceiros</h4>
            <div>
                <a href="https://www.kombishotdog.com.br/" target="_blank">
                    <img src="/static/images/kombis.png"></img>
                </a>
                <a href="https://www.instagram.com/klebinhostore/" target="_blank">
                    <img src="/static/images/klebinho.png"></img>
                </a>
            </div>
		</div>
	);
};

Partners.propTypes = {
	className: PropTypes.string
};

export default styled(Partners)`
	margin: 0 auto;

    & > div {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        & img {
            max-width: 300px;
        }
    }

	@media only screen and (min-width: ${styles.breakpoint_medium}) {
    }
`;
