import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class TranslationEn extends Plugin {
  static get pluginName() {
    return 'TranslationEn';
  }
  init() {
		const editor = this.editor;
    window.CKEDITOR_TRANSLATIONS = window.CKEDITOR_TRANSLATIONS || {};
    window.CKEDITOR_TRANSLATIONS['en'] = window.CKEDITOR_TRANSLATIONS['en'] || {};
    window.CKEDITOR_TRANSLATIONS['en'].dictionary = window.CKEDITOR_TRANSLATIONS['en'].dictionary || {};

    Object.assign(window.CKEDITOR_TRANSLATIONS['en'].dictionary, {
      'Big': '140%',
      'Huge': '180%',
      'Choose language': "Language of Parts"
    });
    
  }
}