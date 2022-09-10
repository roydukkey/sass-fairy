// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import OriginalCodeBlock from '@theme-original/CodeBlock';
import React from 'react';
import type { ReactElement } from 'react';


export default function ({ highlightLines, highlightKeywords, isolateDefinition, stripSassDocs, rewriteFairyUses, children, ...props }: Attributes): JSX.Element {
	if (typeof children === 'string') {
		children = children.trim().replace(/\t/g, '  ');

		if (stripSassDocs) {
			children = children.replace(/^\/\/\/.*\n/gm, '');
		}

		// Replace version-aliased package @use statements.
		children = children.replace(/(@use\s*'@sass-fairy\/)v\d\//g, '$1');

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
					while (children.indexOf(field) > 0) {
						children = children.replace(field, module);
					}
				}
			}
		}

		let lines = children.split('\n');

		// Isolate Definition
		if (isolateDefinition) {
			const abstractedLines = abstractDefinition(`@function ${isolateDefinition}`, lines) ?? abstractDefinition(`@mixin ${isolateDefinition}`, lines);

			if (abstractedLines?.length) {
				if (highlightLines) {
					const highlightOffset = lines.length - abstractedLines.length - 1;

					highlightLines = `{${
						highlightLines.slice(1, -1).split(',').reduce<string[]>((accumulator, selection) => {
							const lineNumbers = selection.split('-').map((lineNumber) => Number(lineNumber) - highlightOffset);

							if (lineNumbers[0] < 1 && lineNumbers[1]) {
								lineNumbers[0] = 1;
							}

							if (lineNumbers[0] >= 1 && (lineNumbers.length === 1 || lineNumbers[1] > 1)) {
								accumulator.push(lineNumbers.join('-'));
							}

							return accumulator;
						}, []).join()
					}}`;
				}

				lines = abstractedLines;
				children = lines.join('\n');
			}
		}

		// Highlight Keywords
		if (!highlightLines && highlightKeywords) {
			const highlight: string[] = [];

			if (typeof highlightKeywords === 'string') {
				highlightKeywords = [[highlightKeywords]];
			}

			highlightKeywords.forEach(([from, to]) => {
				let fromLine = 0;
				let toLine = 0;

				for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
					const line = lines[lineNumber];

					if (!fromLine && line.includes(from)) {
						fromLine = lineNumber + 1;
					}

					if (to) {
						if (!toLine && line.includes(to)) {
							toLine = lineNumber + 1;
						}
					}
					else if (fromLine) {
						toLine = fromLine;
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
	highlightKeywords?: string | Array<[string, string?]>;

	/**
	 * Isolate the definition of a Sass function or mixin as the only content of the code block.
	 */
	isolateDefinition?: string;
}

function abstractDefinition (definition: string, lines: string[]): string[] | undefined {
	const startingLine = lines.findIndex((line) => line.startsWith(definition));

	if (startingLine >= 0) {
		let endingLine = lines.slice(startingLine + 1).findIndex((line, index) =>
			line.length
				? line.length === line.trimStart().length
				// Current line is empty. Look ahead to see if next line is part of the definition.
				: lines.slice(index + 1).findIndex((lineLookAhead) =>
					lineLookAhead.length || line.length === line.trimStart().length
				)
		);

		endingLine = endingLine <= 0
			? lines.length - 1
			: startingLine + endingLine;

		return lines.slice(startingLine, endingLine + 1);
	}
}
