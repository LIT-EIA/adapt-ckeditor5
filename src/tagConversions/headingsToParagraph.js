import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class HeadingsToParagraph extends Plugin {
  static get pluginName() {
    return 'HeadingsToParagraph';
  }
  init() {
    this.editor.conversion.for('upcast').elementToAttribute({
      model: 'bold',
      view: 'h1',
      converterPriority: 'high'
    });
    this.editor.conversion.for('upcast').elementToAttribute({
      model: 'bold',
      view: 'h2',
      converterPriority: 'high'
    });
    this.editor.conversion.for('upcast').elementToAttribute({
      model: 'bold',
      view: 'h3',
      converterPriority: 'high'
    });
    this.editor.conversion.for('upcast').elementToAttribute({
      model: 'bold',
      view: 'h4',
      converterPriority: 'high'
    });
    this.editor.conversion.for('upcast').elementToAttribute({
      model: 'bold',
      view: 'h5',
      converterPriority: 'high'
    });
    this.editor.conversion.for('upcast').elementToAttribute({
      model: 'bold',
      view: 'h6',
      converterPriority: 'high'
    });
  }
}