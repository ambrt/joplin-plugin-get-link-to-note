import joplin from 'api';
import { MenuItemLocation, ToolbarButtonLocation } from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		await joplin.commands.register({
			name: 'getActiveNoteLink',
			label: 'Copy note\'s link',
			
			execute: async () => {
		
		const note = await joplin.workspace.selectedNote();
		navigator.clipboard.writeText(`[${note.title}](:/${note.id})`)
			}
		})
		await joplin.views.menuItems.create('getActiveNoteLinkMenu','getActiveNoteLink', MenuItemLocation.EditorContextMenu);
	},
});
