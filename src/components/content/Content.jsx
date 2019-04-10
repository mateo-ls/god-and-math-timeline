import React from 'react';
import Markdown from 'react-markdown';

import styles from './styles.less';

export default class Content extends React.Component {
	render() {
		const { source, heroTitle, heroUrl } = this.props;

		return (
			<div className={styles.root}>
				{heroTitle && heroUrl ?
					<div
						className={styles.heroContainer}
						style={{ backgroundImage: `url(${heroUrl})` }}
					>
						<h1 className={styles.heroTitle}>{heroTitle}</h1>
					</div>
					:
					null
				}
				<div className={styles.content}>
					<Markdown
						source={source}
					/>
				</div>
			</div>
		)
	}
}
