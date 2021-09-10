import React from "react";
import styles from "../../css/tables/TableCell.module.scss";
import { PropTypes } from "prop-types";

const TableCell = ({ cellData }) => {
	return <td className={styles.TableCell}>{cellData}</td>;
};

export default TableCell;

TableCell.defaultProps = {};

TableCell.propTypes = {
	cellData: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.bool,
	]),
};
