import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class TranslationFr extends Plugin {
  static get pluginName() {
    return 'TranslationFr';
  }
  init() {
		const editor = this.editor;
    window.CKEDITOR_TRANSLATIONS = window.CKEDITOR_TRANSLATIONS || {};

    window.CKEDITOR_TRANSLATIONS['fr'] = window.CKEDITOR_TRANSLATIONS['fr'] || {};
    window.CKEDITOR_TRANSLATIONS['fr'].dictionary = window.CKEDITOR_TRANSLATIONS['fr'].dictionary || {};

    Object.assign(window.CKEDITOR_TRANSLATIONS['fr'].dictionary, {
      'Remove format': 'Supprimer le format',
      'Remove color': "Supprimer la couleur"
    });
  }
}