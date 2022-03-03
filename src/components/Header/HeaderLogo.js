import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "@i18n";
import styles from "@/constants/styles";

const HeaderContent = ({ className }) => {
	return (
		<Link href="/">
			<a className={className}>
				<h1> 4 </h1>
                <div>
                    <h3 className="linhas"> LINHAS </h3>
                    <h3 className="campinas"> CAMPINAS </h3>
                </div>
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

    display: flex;
    align-items: center;

    & h1 {
        font-size: 48px;
        margin-right: 5px;
    }
    
    & .linhas {
        position: relative;
        top: 4px;
    }
    
    & .campinas {
        position: relative;
        top: -4px;
    }
`;
