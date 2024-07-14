
import vscode from 'vscode';

import StatusBarItem from './status_bar_item/status_bar_item';
import WebviewPanel from './webview_panel/webview_panel';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-extension" is now active!');

	context.subscriptions.push( vscode.commands.registerCommand('vscode-extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode_extension!');
	}) );


	context.subscriptions.push( vscode.commands.registerCommand('vscode-extension.consoleText', () => {

		let editor = vscode.window.activeTextEditor;
		if (!editor) {

			vscode.window.showInformationMessage('没有打开的编辑器');
			return; // 没有打开的编辑器
		}
		let selection = editor.selection;
		let text = editor.document.getText(selection);
		// 给用户一个消息提示框
		vscode.window.showInformationMessage('选中的文字: ' + text + '; 选中的文字长度: ' + text.length);
	}) );


	StatusBarItem.init( context );
	context.subscriptions.push( vscode.commands.registerCommand( 'vscode-extension.statusBarAlignment', StatusBarItem.commandHandler ) );

	WebviewPanel.init();
	context.subscriptions.push( vscode.commands.registerCommand( 'vscode-extension.webviewPanel',  WebviewPanel.commandHandler ) );
}


export function deactivate(){}

