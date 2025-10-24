import { defineExtension } from 'reactive-vscode'
import { commands, ConfigurationTarget, window } from 'vscode'
import { config } from './config'

const { activate, deactivate } = defineExtension(() => {
  commands.registerCommand('octohash.auto-chat-blocker.toggle', async () => {
    await config.$update('enable', !config.enable, ConfigurationTarget.Global)
    window.showInformationMessage(`Auto Chat Blocker is now ${config.enable ? 'enabled' : 'disabled'}`)
  })

  if (config.enable)
    commands.executeCommand('composer.closeComposerTab')
})

export { activate, deactivate }
