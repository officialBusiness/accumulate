
const vscode = require('vscode');

function activate(context) {

	console.log('Congratulations, your extension "vscode-extension" is now active!');

	const disposable = vscode.commands.registerCommand('vscode-extension.helloWorld', () => {

		vscode.window.showInformationMessage('Hello World from vscode_extension!');
	});

	context.subscriptions.push(disposable);
}

function deactivate(){}

module.exports = {
	activate,
	deactivate
}