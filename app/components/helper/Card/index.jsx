import React from "react";
import PropTypes from "prop-types"; // For PropTypes (Optional)
import classNames from "classnames"; // For dynamic class management
import styles from "./responsiveCardStyles.module.scss"; // Importing with a different name
import GlowCard from "../glow-card";
const Card = ({ imgsrc, title, subtitle, description, tags, identifier, colortype }) => {

	return (
		
			<article
				className={classNames(
					styles.postcard,
					styles.dark,
					styles.linkWrapper,
					{
						[styles.red]: colortype === 'red',
						[styles.blue]: colortype === 'blue',
						[styles.green]: colortype === 'green',
						[styles.yellow]: colortype === 'yellow',
					}
				)}
			>
				<a className={styles.postcard__img_link} href="#">
					<img className={styles.postcard__img} src={imgsrc} alt={title} />
				</a>
				<div className={styles.postcard__text}>
					<h1 className={classNames(styles.postcard__title, styles.blue)}>
						<a href="#">{title}</a>
					</h1>
					<div className={classNames(styles.postcard__subtitle, styles.small)}>
						<time dateTime="2020-05-25 12:00:00">
							<i className="fas fa-calendar-alt mr-2"></i>
							{subtitle}
						</time>
					</div>
					<div className={styles.postcard__bar}></div>
					<div className={styles.postcard__preview_txt}>{description}</div>
					{tags && tags.length > 0 && (
						<ul className={styles.postcard__tagbox}>
							{tags.map((tag, index) => (
								<li key={index} className={styles.tag__item}>
									<i className="fas fa-tag mr-2"></i>
									{tag}
								</li>
							))}
							//TODO: clean this up
							{/* <li
								className={classNames(
									styles.tag__item,
									styles.blue,
									styles.play
								)}
							>
								<a href="#">
									<i className="fas fa-play mr-2"></i>Play Episode
								</a>
							</li> */}
						</ul>
					)}
				</div>
			</article>

	);
};

// Define PropTypes for validation (Optional but helpful for runtime checks)
Card.propTypes = {
	imgsrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
	colortype: PropTypes.oneOf(['red', 'blue', 'green', 'yellow']).isRequired,
};

// Default props if necessary (Optional)
Card.defaultProps = {
	subtitle: "",
	description: "",
	tags: [],
	colortype: "blue",
};


const CardContainer = ({ children }) => {
	return (<div className={styles.cardcontainer}>{children}</div>)
}
export { Card, CardContainer };
