'use strict';

import * as vscode from 'vscode';
import { ArchiveExplorer } from './archiveExplorer';

export function activate(context: vscode.ExtensionContext) {
	const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
		? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

	new ArchiveExplorer(context);
	
}