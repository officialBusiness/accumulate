"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = __importDefault(require("vscode"));
let currentPanel = null;
function initMyWebviewPanel() {
}
function commandHandler() {
    const column = vscode_1.default.window.activeTextEditor
        ? vscode_1.default.window.activeTextEditor.viewColumn
        : undefined;
    if (currentPanel === null) {
        currentPanel = vscode_1.default.window.createWebviewPanel('my webview panel', 'my webview panel 标题', column || vscode_1.default.ViewColumn.One, {
            enableScripts: true,
        });
        currentPanel.webview.html = `<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">

					<!--
						Use a content security policy to only allow loading images from https or from our extension directory,
						and only allow scripts that have a specific nonce.
					-->

					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>currentPanel.webview</title>
				</head>
				<body>
					<h1 id="lines-of-code-counter"></h1>

					<script type="text/javascript">
						let counterDom = document.getElementById('lines-of-code-counter');
						let count = 0;

						setCounter();
						function setCounter(){

							setTimeout(()=>{
								counterDom.innerHTML = count;

								if( count < 10 ){
									count++;
									setCounter();
								}
							}, 1000)
						}
					</script>
				</body>
				</html>`;
    }
    else {
        currentPanel.reveal(column);
    }
}
exports.default = {
    init: initMyWebviewPanel,
    commandHandler,
};
//# sourceMappingURL=webview_panel.js.map