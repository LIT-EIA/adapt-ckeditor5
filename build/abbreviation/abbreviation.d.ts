export default class Abbreviation extends Plugin {
    static get requires(): (typeof AbbreviationEditing | typeof AbbreviationUI)[];
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import AbbreviationEditing from "./abbreviationediting";
import AbbreviationUI from "./abbreviationui";
