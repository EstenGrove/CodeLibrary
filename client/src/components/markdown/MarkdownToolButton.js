import React from "react";
import styles from "../../css/markdown/MarkdownToolButton.module.scss";
import sprite from "../../assets/icons/editor.svg";
import { PropTypes } from "prop-types";

const icons = {
	// formatting icons
	bold: "format_bold",
	italic: "format_italic",
	underline: "format_underlined",
	alignCenter: "format_align_center",
	alignLeft: "format_align_left",
	alignRight: "format_align_right",
	alignJustify: "format_align_justify",
	indentDecrease: "format_indent_decrease",
	indentIncrease: "format_indent_increase",
	lineHeight: "format_line_spacing",
	list: "list",
	listBullets: "format_list_bulleted",
	listNumbers: "format_list_numbered",
	table: "table_chart",
	tableGrid: "table",
	gridOff: "grid_off",
	gridOn: "grid_on",
	// text styles icons
	textColor: "format_color_text",
	textSize: "format_size",
	textDirLR: "format_textdirection_l_to_r", // text direction left-to-right
	textDirRL: "format_textdirection_r_to_l", // text direction right-to-left
	textFont: "font_download",
	textStrikeThru: "format_strikethrough",
	textFields: "text_fields", // Tt
	textTitle: "title",
	textRotate: "text_rotate_up",
	textRotateVertical: "text_rotate_vertical",
	textMath: "calculate",
	textSubscript: "subscript",
	textSuperscript: "superscript",
	calculator: "table_view",
	// color icons
	colorFill: "format_color_fill",
	colorReset: "format_color_reset",
	// editor actions
	print: "print",
	save: "save1",
	copy: "content_copy",
	cut: "content_cut",
	paste: "content_paste",
	edit: "create",
	reply: "reply",
	forward: "forward",
	delete: "delete",
	code: "code2",
	code2: "code",
	zoomIn: "zoom_in",
	zoomOut: "zoom_out",
	alignVerticalBottom: "vertical_align_bottom",
	alignVerticalCenter: "vertical_align_center",
	alignVerticalTop: "vertical_align_top",
	wrapText: "wrap_text",
	formatListNumbers: "format_list_numbered_rtl",
	// keyboard related icons
	keyReturn: "keyboard_return",
	keyTab: "keyboard_tab",
	// caret & arrow icons
	caretDown: "keyboard_arrow_down",
	caretUp: "keyboard_arrow_up",
	caretLeft: "keyboard_arrow_left",
	caretRight: "keyboard_arrow_right",
	arrowLeft: "arrow_back",
	arrowRight: "arrow_forward",
	arrowUp: "arrow_upward",
	arrowDown: "arrow_down",
	paragraph: "paragraph",
	// cloud icons
	cloudFilled: "cloud",
	cloudDone: "cloud_done",
	cloudDownload: "cloud_download",
	cloudUpload: "cloud_upload",
	cloudOff: "cloud_off",
	cloudOutlined: "cloud_queue",
	// file-related icons
	fileDownload: "file_download",
	fileUpload: "file_upload",
	filePdf: "picture_as_pdf",
	fileHttp: "http",
	fileGif: "gif",
	// documents
	docTextPlain: "file-text",
	docTextLight: "file-text-o",
	docTextDark: "file",
	docPdf: "file-pdf-o",
	docWord: "file-word-o",
	excel: "file-excel-o",
	powerPoint: "file-powerpoint-o",
	fileImage: "file-image-o",
	fileZip: "file-zip-o",
	fileCode: "file-code-o",
	// image/photo related icons
	image: "insert_photo",
	imageAdd: "add_photo_alternate",
	// status related icons
	check: "check",
	checkCircle: "check_circle",
	checkDone: "done",
	checkDoneAll: "done_all",
	// others
	blockquote: "quote",
	quote: "format_quote",
	scatterplot: "scatter_plot",
	attachment: "attachment",
	transparent: "format_clear",
	link: "link",
	linkOff: "link_off",
	linkAdd: "add_link",
	undo: "undo",
	redo: "redo",
	draw: "gesture",
	lightbulb: "lightbulb",
	clear: "clear",
	add: "add",
	minus: "minus",
	archive: "move_to_inbox",
	flag: "outlined_flag",
	exclaim: "priority_high",
	database: "database",
	server: "servers",
	servers: "server",
	// settings/menu icons
	menu: "menu",
	tune: "tune",
	settings: "settings",
	dotsVertical: "dots-three-vertical",
	dotsHorizontal: "dots-three-horizontal",
	dotsTwoVertical: "dots-two-vertical",
	dotsTwoHorizontal: "dots-two-horizontal",
	// color related icons
	colorDropper: "colorize",
	colorBrush: "brush",
	colorPalette: "color_lens",
	colorTag: "style",
	// calendar icons
	calendarDate: "insert_invitation",
	calendarBusy: "event_busy",
	calendarNote: "event_note",
	calendarRange: "date_range",
	// comment icons
	commentChat: "chat",
	comment: "comment",
	chatForum: "forum",
	chatFilled: "chat_bubble",
	chatOutlined: "chat_bubble_outlined",
	rss: "rss",
	share: "share",
	// sort/filter icons
	sort: "sort",
	sortAlpha: "sort_by_alpha",
	filter: "filter_list",
	// brand icons
	javascript: "javascript",
	markdown: "markdown",
	mongodb: "mongodb",
	mysql: "mysql",
	nodejs: "node-dot-js",
	postgres: "postgresql",
	python: "python",
	typescript: "typescript",
};

const MarkdownToolButton = ({ handleClick, icon, hoverTitle }) => {
	return (
		<button
			type="button"
			className={styles.MarkdownToolButton}
			title={hoverTitle}
		>
			<svg className={styles.MarkdownToolButton_icon}>
				<use xlinkHref={`${sprite}#icon-${icons[icon]}`}></use>
			</svg>
		</button>
	);
};

export default MarkdownToolButton;

MarkdownToolButton.defaultProps = {};

MarkdownToolButton.propTypes = {};
