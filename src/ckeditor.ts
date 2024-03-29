/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import {
	Bold,
	Italic,
	Strikethrough,
	Subscript,
	Superscript,
	Underline
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Clipboard } from '@ckeditor/ckeditor5-clipboard';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { FontFamily, FontBackgroundColor, FontColor, FontSize } from '@ckeditor/ckeditor5-font';
import { ParagraphButtonUI } from '@ckeditor/ckeditor5-paragraph';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import PastePlainText from './pasteAsPlainText';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import Abbreviation from './abbreviation/abbreviation';
import HeadingsToParagraph from './tagConversions/headingsToParagraph';
import IndentListStyling from './indentListStyling';
import ItalicsAsEm from './tagConversions/italicAsEm';
import TranslationFr from './translationOverrides/translationFR';
import TranslationEn from './translationOverrides/translationEN';



import {
	SpecialCharacters,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText
} from '@ckeditor/ckeditor5-special-characters';
import {
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar
} from '@ckeditor/ckeditor5-table';
import { Dialog } from '@ckeditor/ckeditor5-ui/src';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { EditorWatchdog } from '@ckeditor/ckeditor5-watchdog';
import { WordCount } from '@ckeditor/ckeditor5-word-count';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		TranslationFr,
		TranslationEn,
		Alignment,
		BlockQuote,
		Bold,
		Clipboard,
		Dialog,
		Essentials,
		FindAndReplace,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		ParagraphButtonUI,
		HeadingsToParagraph,
		Indent,
		IndentBlock,
		Italic,
		ItalicsAsEm,
		Link,
		List,
		ListProperties,
		Paragraph,
		PasteFromOffice,
		PastePlainText,
		RemoveFormat,
		SelectAll,
		ShowBlocks,
		SourceEditing,
		SpecialCharacters,
		SpecialCharactersCurrency,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		SpecialCharactersText,
		Strikethrough,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextPartLanguage,
		TodoList,
		Underline,
		Undo,
		WordCount,
		GeneralHtmlSupport,
		Abbreviation,
		IndentListStyling
	];

	public static override defaultConfig: EditorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'sourceEditing',
				'showBlocks',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'subscript',
				'superscript',
				'removeFormat',
				'|',
				'fontColor',
				'fontFamily',
				'fontSize',
				'fontBackgroundColor',
				'|',
				'link',
				'|',
				'bulletedList',
				'numberedList',
				'|',
				'outdent',
				'indent',
				'|',
				'blockQuote',
				'selectAll',
				'findAndReplace',
				'|',
				'todoList',
				'alignment',
				'|',
				'specialCharacters',
				'insertTable',
				'|',
				'textPartLanguage'
			]
		},
		language: 'en',
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableCellProperties',
				'tableProperties'
			]
		}
	};
}

export default { Editor, EditorWatchdog };
