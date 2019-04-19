import React from 'react';
import Markdown from 'markdown-it';
import MarkdownFootnote from 'markdown-it-footnote';
import MarkdownMeta from 'markdown-it-meta';

const renderer = Markdown().use(MarkdownFootnote).use(MarkdownMeta);

export default ({ source }) => (
	<div
		dangerouslySetInnerHTML={{
			__html: renderer.render(source)
		}}
	/>
);
