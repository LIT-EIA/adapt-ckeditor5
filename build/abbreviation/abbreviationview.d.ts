export default class FormView extends View<HTMLElement> {
    constructor(locale: any);
    focusTracker: FocusTracker;
    keystrokes: KeystrokeHandler;
    abbrInputView: LabeledFieldView<import("@ckeditor/ckeditor5-ui").InputTextView>;
    titleInputView: LabeledFieldView<import("@ckeditor/ckeditor5-ui").InputTextView>;
    saveButtonView: ButtonView;
    cancelButtonView: ButtonView;
    childViews: import("@ckeditor/ckeditor5-ui").ViewCollection<LabeledFieldView<import("@ckeditor/ckeditor5-ui").InputTextView> | ButtonView>;
    _focusCycler: FocusCycler;
    focus(): void;
    _createInput(label: any): LabeledFieldView<import("@ckeditor/ckeditor5-ui").InputTextView>;
    _createButton(label: any, icon: any, className: any): ButtonView;
}
import { View } from "@ckeditor/ckeditor5-ui";
import { FocusTracker } from "@ckeditor/ckeditor5-utils";
import { KeystrokeHandler } from "@ckeditor/ckeditor5-utils";
import { LabeledFieldView } from "@ckeditor/ckeditor5-ui";
import { ButtonView } from "@ckeditor/ckeditor5-ui";
import { FocusCycler } from "@ckeditor/ckeditor5-ui";
