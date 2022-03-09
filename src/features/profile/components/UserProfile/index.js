import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import styles from "@/constants/styles";

const UserProfile = ({ className, name, description, photo }) => {
	return (
        <div className={className}>
            <img src={photo} alt="Foto de quem escreveu" />
            <h3>{name}</h3>
            <span>{description}</span>
        </div>
	);
}

UserProfile.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	photo: PropTypes.string
};

export default styled(UserProfile)`
	display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;
    margin: auto;
    color: ${styles.primary_color};

    & > h3 {
        font-size: 18px;
        margin: 20px 0 10px;
    }
    
    & > img {
        object-fit: cover;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    
    & > span {
        font-size: 16px;
        text-align: center;
    }
`;
