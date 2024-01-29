import { Command, Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';

function plainTextToHtml(text) {
  text = text
    // Encode &.
    .replace(/&/g, '&amp;')
    // Encode <>.
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Creates a paragraph for each double line break.
    .replace(/\r?\n\r?\n/g, '</p><p>')
    // Creates a line break for each single line break.
    .replace(/\r?\n/g, '<br>')
    // Replace tabs with four spaces.
    .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
    // Preserve trailing spaces (only the first and last one – the rest is handled below).
    .replace(/^\s/, '&nbsp;')
    .replace(/\s$/, '&nbsp;')
    // Preserve other subsequent spaces now.
    .replace(/\s\s/g, ' &nbsp;');
  if (text.includes('</p><p>') || text.includes('<br>')) {
    // If we created paragraphs above, add the trailing ones.
    text = `<p>${text}</p>`;
  }
  // TODO:
  // * What about '\nfoo' vs ' foo'?
  return text;
}

export default class PastePlainText extends Plugin {
  static get requires() {
    return [PastePlainTextUI, PastePlainTextCommand]
  }

  init() {
    const editor = this.editor;
    console.log('init paste plain text plugin........');

    editor.commands.add('pastePlainText', new PastePlainTextCommand(editor));

    // The logic responsible for converting HTML to plain text.
    const clipboardPlugin = editor.plugins.get('ClipboardPipeline');
    const command = editor.commands.get('pastePlainText');
    const editingView = editor.editing.view;

    editingView.document.on('clipboardInput', (evt, data) => {
      if (editor.isReadOnly || !command.value) {
        return;
      }

      const dataTransfer = data.dataTransfer;
      let content = plainTextToHtml(dataTransfer.getData('text/plain'));

      data.content = this.editor.data.htmlProcessor.toView(content);
    });
  }
};

class PastePlainTextUI extends Plugin {
  init() {
    const editor = this.editor;
    console.log('PastePlainTextUI.....');

    editor.ui.componentFactory.add('pastePlainText', locale => {
      const view = new ButtonView(locale);
      const command = editor.commands.get('pastePlainText');

      view.set({
        label: 'Paste as plain text',
        withText: true,
        tooltip: true,
        isToggleable: true
      });

      // A callback executed once the button is clicked.
      view.on('execute', () => {
        editor.execute('pastePlainText');
      });

      view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      return view;
    });
  }
};

class PastePlainTextCommand extends Command {
  refresh() {
    console.log('PastePlainTextCommand refresh.....');
    // Disable the command if the editor is in the read-only mode.
    this.isEnabled = !this.editor.isReadOnly;
  }

  execute() {
    console.log('PastePlainTextCommand execute.....');
    // Activate pasting plain text.
    this.value = !this.value;
  }
}