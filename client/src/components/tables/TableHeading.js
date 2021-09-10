import React from "react";
import styles from "../../css/tables/TableHeading.module.scss";
import { PropTypes } from "prop-types";

const TableHeading = ({ heading }) => {
	return <th className={styles.TableHeading}>{heading}</th>;
};

export default TableHeading;

TableHeading.defaultProps = {};

TableHeading.propTypes = {};
