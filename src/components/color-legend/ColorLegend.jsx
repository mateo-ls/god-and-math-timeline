import React from 'react';

import styles from './styles.less';

export default () => (
	<div className={styles.root}>
		<div className={styles.legend}>
			<div className={styles.legendSection}>
				<div className={styles.legendCircle} id={styles.classical}/>
				<span>Classical Era</span>
			</div>
			<div className={styles.legendSection}>
				<div className={styles.legendCircle} id={styles.scientificRevolution} />
				<span>Scientific Revolution Era</span>
			</div>
			<div className={styles.legendSection}>
				<div className={styles.legendCircle} id={styles.modern} />
				<span>Modern Era</span>
			</div>
		</div>
	</div>
);
