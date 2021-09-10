import React from "react";
import styles from "../../css/code/PropDefinitions.module.scss";
import { PropTypes } from "prop-types";

const PropDefinitions = ({ title, componentName, children }) => {
	return (
		<div className={styles.PropDefinitions}>
			<div className={styles.PropDefinitions_top}>
				<div className={styles.PropDefinitions_top_title}>
					<span className={styles.PropDefinitions_top_title_label}>
						{title}
					</span>
					<span className={styles.PropDefinitions_top_title_name}>
						{componentName}
					</span>
				</div>
			</div>
			<div className={styles.PropDefinitions_defs}>{children}</div>
		</div>
	);
};

export default PropDefinitions;

PropDefinitions.defaultProps = {};

PropDefinitions.propTypes = {
	children: PropTypes.any,
};
