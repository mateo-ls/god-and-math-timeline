import React from 'react';
import Markdown from '../markdown/Markdown';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { MdClose } from 'react-icons/md';

import styles from './styles.less';

export default class Content extends React.Component {
	render() {
		const { source, heroTitle, heroUrl, closeArticle, onNextArticle, onPreviousArticle, author } = this.props;

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
				<p className={styles.articleAuthor}>Article by {author}</p>
				<div className={styles.buttonContainer}>
					{onPreviousArticle ?
						<Button
							id={styles.leftButton}
							onClick={onPreviousArticle}
						>
							Previous
						</Button>
						:
						null
					}
					{onNextArticle ?
						<Button
							id={styles.rightButton}
							onClick={onNextArticle}
						>
							Next
						</Button>
						:
						null
					}
				</div>
			</div>
		)
	}
}
