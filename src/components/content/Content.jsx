import React from 'react';
import Markdown from 'react-markdown';

import IconButton from '@material-ui/core/IconButton';
import { MdClose } from 'react-icons/md';

import styles from './styles.less';

export default class Content extends React.Component {
	render() {
		const { source, heroTitle, heroUrl, closeArticle } = this.props;

		return (
			<div className={styles.root}>
				{heroTitle && heroUrl ?
					<div
						className={styles.heroContainer}
						style={{ backgroundImage: `url(${heroUrl})` }}
					>
						<div className={styles.heroContent}>
							<IconButton
								onClick={closeArticle}
								color="inherit"
							>
								<MdClose />
							</IconButton>
							<h1 className={styles.heroTitle}>{heroTitle}</h1>
						</div>
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
