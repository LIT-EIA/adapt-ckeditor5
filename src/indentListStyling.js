import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class IndentListStyling extends Plugin {
  init() {
    console.log('CustomIndent was initialized. this: ', this);

    // Listen to the 'indentList' command execution.
    this.editor.commands.get('indentList').on('execute', () => {

      const selection = this.editor.model.document.selection;

      const blocksInSelection = Array.from(selection.getSelectedBlocks());

      blocksInSelection.forEach(block => {
        // Check if the block is a list item.
        if (block.name === 'listItem') {
          
          if (block._attrs && block._attrs.has("listType") && block._attrs.get("listType") === "numbered") {
            this.editor.model.change(writer => {
              writer.setAttribute('listStyle', 'lower-latin', block);
            });
          }
        }
      });
    });
  }
}
