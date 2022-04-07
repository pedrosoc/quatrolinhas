import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import containerTypes from "@/constants/containerTypes";
import { withTranslation } from "@i18n";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";
import api from "@api";
import UserProfile from "@/features/profile/components/UserProfile";
import styles from "@/constants/styles";
import authors from "@/constants/authors";

const About = ({ className, t, categories }) => {
	return (
		<Fragment>
			<MetaHeader meta={routes.about.meta} />
            <Header categories={categories} social={social} />

			<Section first type={containerTypes.text}>
				<div className={className}>
					<div>
						<h5>{t("about.title")}</h5>
                        <p>Um portal de opinião, criado por quatro campineiros, ponte-pretanos e bugrinos, de conteúdo lírico e popular.</p>
                        <p>"Do que é nosso para os nossos", esse é o lema do portal que estreia em 2022. Uma alternativa de leitura para à nossa gente, com a linguagem fácil e dinâmica.</p>
                        <p>Nas Quatros Linha, um opção de conhecimento!</p>
                        <h4>Escritores</h4>
                        <div className="profiles">
                            {Object.keys(authors).map(a => (
                                <UserProfile
                                    dark
                                    name={authors[a].name}
                                    description={authors[a].description}
                                    photo={authors[a].img}
                                />
                            ))}
                        </div>
					</div>
				</div>
			</Section>

			<Footer />
		</Fragment>
	);
};

About.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func,
    categories: PropTypes.array
}

export const getStaticProps = async () => {
    const categories = await api.me.data.getCategories();    
    return { props: { categories }, revalidate: 1 };
}


export default withTranslation("common")(styled(About)`
	& h5 {
        font-size: 35px;
	}
    
    & h4 {
        margin: 40px 0 20px;
    }

	& .second {
		margin-top: 50px;
	}

	& p.list {
		display: flex;
		flex-direction: column;

		& > a {
			margin-top: 5px;
		}
	}

	& a {
		font-family: "Roboto", sans-serif;
		font-size: 18px;
		color: #111;

		& span {
			margin-right: 10px;
		
			&.link {
				color: rgba(0, 0, 0, .68);
				border-bottom: solid 1px rgba(0, 0, 0, .68);
			}
		}
	}

	& a .arrow {
		border-bottom: 2px solid transparent;
	}

    & .profiles {
        display: flex;
        flex-wrap: wrap;

        & > * {
            min-width: 250px;
            color: ${styles.tertiary_color};
            margin: 40px auto;
        }
    }
`);
