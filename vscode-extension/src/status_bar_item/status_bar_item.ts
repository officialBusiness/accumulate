
import vscode from 'vscode';

export let myStatusBarItem: vscode.StatusBarItem;
export let myStatusBarItemIsShow: boolean = false;

function initMyStatusBarItem( context: vscode.ExtensionContext ){

	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
	myStatusBarItem.command = 'vscode-extension.helloWorld';

	context.subscriptions.push( myStatusBarItem );
}

function commandHandler(){

	let editor = vscode.window.activeTextEditor;

	if( myStatusBarItem ){

		myStatusBarItem.text = "第一个 statusBarAlignment";
		if( myStatusBarItemIsShow ){

			myStatusBarItem.hide();
			myStatusBarItemIsShow = false;
		}else{

			myStatusBarItem.show();
			myStatusBarItemIsShow = true;
		}
	}
}


export default {
	init: initMyStatusBarItem,
	commandHandler
}

// export default StatusBarItem;