import React from "react";
import styles from "../../css/shadows/ShadowPreview.module.scss";
import { PropTypes } from "prop-types";

const ShadowPreview = ({ children }) => {
	return (
		<section className={styles.ShadowPreview}>
			<div className={styles.ShadowPreview_top}>
				<div className={styles.ShadowPreview_top_label}>
					Box-Shadow Preview:
				</div>
			</div>
			<div className={styles.ShadowPreview_preview}>{children}</div>
		</section>
	);
};

export default ShadowPreview;

ShadowPreview.defaultProps = {};

ShadowPreview.propTypes = {};
