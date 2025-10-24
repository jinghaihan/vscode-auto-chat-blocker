# vscode-auto-chat-blocker

<a href="https://marketplace.visualstudio.com/items?itemName=octohash.vscode-auto-chat-blocker" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/octohash.vscode-auto-chat-blocker.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
<a href="https://kermanx.github.io/reactive-vscode/" target="__blank"><img src="https://img.shields.io/badge/made_with-reactive--vscode-%23007ACC?style=flat&labelColor=%23229863"  alt="Made with reactive-vscode" /></a>

Automatically closes the Chat panel when Cursor window opens.

## Why ?

Does anyone really want to start coding through Chat immediately when they open the editor? It seems like it just takes up space and causes annoyance without providing any real benefits.

The community has been asking for this feature for months, but the official team refuses to provide a simple toggle option. Users have been complaining about this annoying behavior across multiple forum threads:

- [How to disable chat opening on launch](https://forum.cursor.com/t/how-to-disable-chat-opening-on-launch/59023)
- [Cursor's Default AI Chat Window Opens Automatically for New Projects - Need Toggle Option](https://forum.cursor.com/t/cursors-default-ai-chat-window-opens-automatically-for-new-projects-need-toggle-option/94211)
- [Disable auto opening of chat pane when switching workspaces or folders](https://forum.cursor.com/t/disable-auto-opening-of-chat-pane-when-switching-workspaces-or-folders/74095)

## Configuration

<!-- configs -->

| Key                        | Description                              | Type      | Default |
| -------------------------- | ---------------------------------------- | --------- | ------- |
| `auto-chat-blocker.enable` | Whether to enable the auto chat blocker. | `boolean` | `true`  |

<!-- configs -->

## Commands

<!-- commands -->

| Command                             | Title                                       |
| ----------------------------------- | ------------------------------------------- |
| `octohash.auto-chat-blocker.toggle` | Auto Chat Blocker: Toggle Auto Chat Blocker |

<!-- commands -->

## License

[MIT](./LICENSE) License © [jinghaihan](https://github.com/jinghaihan)
