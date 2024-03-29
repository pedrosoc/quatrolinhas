import React, { Fragment } from "react";
import PropTypes from "prop-types";

import api from "@api";
import { withTranslation } from "@i18n";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import HomeBanner from "@/features/me/components/HomeBanner";
import FullContentResume from "@/features/content/components/FullContentResume";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";

import contentsStatus from "@/constants/contentsStatus";
import images from "@/constants/images";
import styles from "@/constants/styles";
import Partners from "@/features/me/components/Partners";

const Home = ({ t, contents, categories, destaks }) => {
    return (
		<Fragment>
			<MetaHeader meta={routes.home.meta} />
            <Header categories={categories} social={social} />

			<Section first colored={styles.tertiary_color}>
				<HomeBanner destaks={destaks} />
			</Section>

            <Section tight>
				<Partners />
			</Section>

			<Section first>
				<FullContentResume contents={contents} />
			</Section>

			<Footer />
		</Fragment>
	);
};

Home.propTypes = {
	t: PropTypes.func,
	contents: PropTypes.array,
	categories: PropTypes.array,
	destaks: PropTypes.array,
};

export const getStaticProps = async () => {
    const categories = await api.me.data.getCategories();
    const allContents = await api.content.data.getAllByStatus(contentsStatus.published);

    const contents = (categories || []).map(c => (allContents || []).find(a => c.id === a.id));
    const destaks = contents.map(c => ({...(c.data || [])[0], category: c.id})).filter(c => c)

    return { props: { contents, categories, destaks }, revalidate: 1 };
}

export default withTranslation("common")(Home);
