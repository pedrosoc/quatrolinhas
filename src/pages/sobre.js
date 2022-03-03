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

const About = ({ className, t, categories }) => {
	return (
		<Fragment>
			<MetaHeader meta={routes.about.meta} />
            <Header categories={categories} social={social} />

			<Section first type={containerTypes.text}>
				<div className={className}>
					<div>
						<h5>{t("about.title")}</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur porttitor erat ut tincidunt. Nam velit orci, aliquet eu tempor a, porttitor mattis lectus. Fusce et urna luctus, ultrices purus id, imperdiet erat. Suspendisse fringilla varius nunc eget luctus. Donec elementum imperdiet est et gravida. Duis ut pulvinar ligula. Sed ullamcorper neque elit, nec lacinia quam tempor nec. Nullam mollis pharetra ullamcorper. Nam vel neque sit amet justo volutpat tincidunt. Etiam egestas varius nibh eget dapibus. Curabitur finibus urna lacus, quis volutpat odio vestibulum eget. Quisque sit amet augue nisi. Proin malesuada finibus nunc, a eleifend sem dictum eu.</p>
                        <h4>Escritores</h4>
                        <div className="profiles">
                            <UserProfile
                                dark
                                name="Israel Moreira"
                                description="Metalúrgico por Profissão, um eterno aluno das Ciências Sociais e apaixonado por rádio 📻"
                                photo="https://firebasestorage.googleapis.com/v0/b/clubestas.appspot.com/o/autores%2FWhatsApp%20Image%202022-03-01%20at%2022.35.05.jpeg?alt=media&token=d66ff817-3040-4bb8-9b26-f685f3c7688e"
                            />
                            <UserProfile
                                dark
                                name="Israel Moreira"
                                description="Metalúrgico por Profissão, um eterno aluno das Ciências Sociais e apaixonado por rádio 📻"
                                photo="https://firebasestorage.googleapis.com/v0/b/clubestas.appspot.com/o/autores%2FWhatsApp%20Image%202022-03-01%20at%2022.35.05.jpeg?alt=media&token=d66ff817-3040-4bb8-9b26-f685f3c7688e"
                            />
                            <UserProfile
                                dark
                                name="Israel Moreira"
                                description="Metalúrgico por Profissão, um eterno aluno das Ciências Sociais e apaixonado por rádio 📻"
                                photo="https://firebasestorage.googleapis.com/v0/b/clubestas.appspot.com/o/autores%2FWhatsApp%20Image%202022-03-01%20at%2022.35.05.jpeg?alt=media&token=d66ff817-3040-4bb8-9b26-f685f3c7688e"
                            />
                            <UserProfile
                                dark
                                name="Israel Moreira"
                                description="Metalúrgico por Profissão, um eterno aluno das Ciências Sociais e apaixonado por rádio 📻"
                                photo="https://firebasestorage.googleapis.com/v0/b/clubestas.appspot.com/o/autores%2FWhatsApp%20Image%202022-03-01%20at%2022.35.05.jpeg?alt=media&token=d66ff817-3040-4bb8-9b26-f685f3c7688e"
                            />
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
            color: ${styles.tertiary_color};
            margin: 40px auto;
        }
    }
`);
