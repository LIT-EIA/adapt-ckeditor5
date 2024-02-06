import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class IndentListStyling extends Plugin {
  init() {

    // Listen to the 'indentList' command execution.
    this.editor.commands.get('indentList').on('execute', () => {

      const selection = this.editor.model.document.selection;

      const blocksInSelection = Array.from(selection.getSelectedBlocks());

      blocksInSelection.forEach(block => {
        // Check if the block is a list item.
        if (block._attrs && block._attrs.has("listType") && block._attrs.get("listType") === "numbered") {
          const indentationLevel = block._attrs.get("listIndent") - 1;

          const listStyle = this.getListStyle(indentationLevel);

          this.editor.model.change(writer => {
            writer.setAttribute('listStyle', listStyle, block);
          });
        }
      });
    });
  }

  getListStyle(indentationLevel) {
    const styles = ['lower-latin', 'lower-roman', 'upper-latin', 'upper-roman'];
    const maxIndentation = styles.length - 1;

    return styles[Math.min(indentationLevel, maxIndentation)];
  }
}
