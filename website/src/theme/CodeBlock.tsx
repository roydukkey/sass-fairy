// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import OriginalCodeBlock from '@theme-original/CodeBlock';
import React from 'react';
import type { ReactElement } from 'react';

export default function ({ highlightLines, highlightKeywords, stripSassDocs, rewriteFairyUses, children, ...props }: Attributes): JSX.Element {
	if (typeof children === 'string') {
		children = children.trim().replace(/\t/g, '  ');

		if (stripSassDocs) {
			children = children.replace(/^\/\/\/.*\n/gm, '');
		}

		if (rewriteFairyUses) {
			const modules: { [key: string]: string[] } = {};

			// Replace @use statements and build list of fields for replacement
			children = children.replace(/^(@use\s*'@sass-fairy\/([a-z]*))\/(?:.*\/)(.*)'\n/gm,
				(_, replacement, module, fieldName) => {
					module += '.';
					fieldName += '.';

					if (Object.prototype.hasOwnProperty.call(modules, module)) {
						modules[module].push(fieldName);
						return '';
					}

					modules[module] = [fieldName];

					return `${replacement}'\n`;
				}
			);

			for (const [module, fields] of Object.entries(modules)) {
				for (const field of fields) {
					children = children.replace(field, module);
				}
			}
		}

		if (!highlightLines && highlightKeywords) {
			const lines = children.split('\n');
			const highlight: string[] = [];

			highlightKeywords.forEach(([from, to]) => {
				let fromLine = 0;
				let toLine = 0;

				for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
					const line = lines[lineNumber];

					if (!fromLine && line.includes(from)) {
						fromLine = lineNumber + 1;
					}

					if (!toLine && line.includes(to)) {
						toLine = lineNumber + 1;
					}

					if (fromLine && toLine) {
						break;
					}
				}

				if (fromLine) {
					highlight.push(`${fromLine}${toLine ? `-${toLine}` : ''}`);
				}

			});

			if (highlight.length) {
				props.metastring = `{${highlight.join()}}`;
			}
		}

	}

	if (highlightLines) {
		props.metastring = highlightLines;
	}

  return <OriginalCodeBlock {...props}>{children}</OriginalCodeBlock>;
}

interface Attributes {
	className?: string;
	title?: string;
	metastring?: string;
	children: string | ReactElement;
	stripSassDocs?: boolean;

	/**
	 * Rewrite file specific `@sass-fairy` `@use` statements to package specific `@use` statements.
	 *
	 * @example
	 *   `@use '@sass-fairy/exception/src/separator'` becomes `@use '@sass-fairy/exception'`
	 */
	rewriteFairyUses?: boolean;

	/** @see {@link https://docusaurus.io/docs/markdown-features/code-blocks#multiple-line-highlighting} */
	highlightLines?: string;

	/**
	 * Search code for line that contain specific keywords and highlight the line.
	 */
	highlightKeywords?: Array<[string, string]>;
}
