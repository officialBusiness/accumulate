
import vscode from 'vscode';

let currentPanel: vscode.WebviewPanel | null = null;

function initMyWebviewPanel(){

}

function commandHandler(){

	const column = vscode.window.activeTextEditor
		? vscode.window.activeTextEditor.viewColumn
		: undefined;

	if( currentPanel === null ){

		currentPanel = vscode.window.createWebviewPanel(
			'my webview panel',
			'my webview panel 标题',
			column || vscode.ViewColumn.One,
			{
				enableScripts: true,
			},
		);

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
							}, 500)
						}
					</script>
				</body>
				</html>`
	}else{

		currentPanel.reveal(column);
	}
}


export default {
	init: initMyWebviewPanel,
	commandHandler,
}
