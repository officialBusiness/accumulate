"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode_1 = __importDefault(require("vscode"));
const status_bar_item_1 = __importDefault(require("./status_bar_item/status_bar_item"));
function activate(context) {
    console.log('Congratulations, your extension "vscode-extension" is now active!');
    context.subscriptions.push(vscode_1.default.commands.registerCommand('vscode-extension.helloWorld', () => {
        vscode_1.default.window.showInformationMessage('Hello World from vscode_extension!');
    }));
    context.subscriptions.push(vscode_1.default.commands.registerCommand('vscode-extension.consoleText', () => {
        let editor = vscode_1.default.window.activeTextEditor;
        if (!editor) {
            vscode_1.default.window.showInformationMessage('没有打开的编辑器');
            return; // 没有打开的编辑器
        }
        let selection = editor.selection;
        let text = editor.document.getText(selection);
        // 给用户一个消息提示框
        vscode_1.default.window.showInformationMessage('选中的文字: ' + text + '; 选中的文字长度: ' + text.length);
    }));
    status_bar_item_1.default.init(context);
    context.subscriptions.push(vscode_1.default.commands.registerCommand('vscode-extension.statusBarAlignment', status_bar_item_1.default.commandHandler));
}
function deactivate() { }
//# sourceMappingURL=extension.js.map