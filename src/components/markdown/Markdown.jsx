import React from 'react';
import Markdown from 'markdown-it';
import MarkdownFootnote from 'markdown-it-footnote';

const renderer = Markdown().use(MarkdownFootnote);

export default ({ source }) => (
	<div
		dangerouslySetInnerHTML={{
			__html: renderer.render(source)
		}}
	/>
);
