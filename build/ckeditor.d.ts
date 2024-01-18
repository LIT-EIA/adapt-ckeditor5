/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks';
import Abbreviation from './abbreviation/abbreviation';
import IndentListStyling from './indentListStyling';
import { SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { EditorWatchdog } from '@ckeditor/ckeditor5-watchdog';
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Abbreviation | typeof IndentListStyling | typeof Alignment | typeof BlockQuote | typeof Bold | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Indent | typeof Italic | typeof Link | typeof List | typeof ListProperties | typeof RemoveFormat | typeof SelectAll | typeof ShowBlocks | typeof SpecialCharactersEssentials | typeof Strikethrough | typeof Subscript | typeof Superscript | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof TextPartLanguage | typeof TodoList | typeof Underline | typeof Undo)[];
    static defaultConfig: EditorConfig;
}
declare const _default: {
    Editor: typeof Editor;
    EditorWatchdog: typeof EditorWatchdog;
};
export default _default;
