import { Plugin } from '@ckeditor/ckeditor5-core';

function StripChildrenStyles(child) {
  if (child.name === 'span' && child._styles && Object.keys(child._styles._styles).length === 0) {
    child.name = '';
  }
  if (child && child._styles && child._styles._styles) {
    child._styles._styles = {};
  }
  if (child._children) {
    child._children.forEach(subChild => {
      if (subChild._styles) {
        subChild._styles._styles = {};
      }
      StripChildrenStyles(subChild);
    });
  }
  else {
    return;
  }
}
export default class PastePlainText extends Plugin {

  init() {
    const editor = this.editor;
    editor.plugins.get('ClipboardPipeline').on('inputTransformation', (evt, data) => {

      if (data && data.content && data.content._children) {
        data.content._children.forEach(child => {
          if (child.name === 'span' && child._styles && Object.keys(child._styles._styles).length === 0) {
            child.name = '';
          }
          if (child && child._styles && child._styles._styles) {
            child._styles._styles = {};
          }
          StripChildrenStyles(child);
        });
      }

    });

  }
};
