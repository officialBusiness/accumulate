"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myStatusBarItemIsShow = exports.myStatusBarItem = void 0;
const vscode_1 = __importDefault(require("vscode"));
exports.myStatusBarItemIsShow = false;
function initMyStatusBarItem(context) {
    exports.myStatusBarItem = vscode_1.default.window.createStatusBarItem(vscode_1.default.StatusBarAlignment.Left);
    exports.myStatusBarItem.command = 'vscode-extension.helloWorld';
    context.subscriptions.push(exports.myStatusBarItem);
}
function commandHandler() {
    let editor = vscode_1.default.window.activeTextEditor;
    if (exports.myStatusBarItem) {
        exports.myStatusBarItem.text = "第一个 statusBarAlignment";
        if (exports.myStatusBarItemIsShow) {
            exports.myStatusBarItem.hide();
            exports.myStatusBarItemIsShow = false;
        }
        else {
            exports.myStatusBarItem.show();
            exports.myStatusBarItemIsShow = true;
        }
    }
}
exports.default = {
    init: initMyStatusBarItem,
    commandHandler
};
// export default StatusBarItem;
//# sourceMappingURL=status_bar_item.js.map