const setCommond = (button, fun) => {
  button.onclick = () => {
    fun()
  }
}

const MenuBar = {
  refresh() {
    console.log('刷新')
  }
}

const RefreshMenuBarCommand = (receiver) => {
  return () => {
    receiver.refresh()
  }
}
const refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar)

// setCommond(button1, refreshMenuBarCommand)


class closeDoorCommand {
  execute() {
    console.log('关灯')
  }
}

class OpenPcCommand {
  execute() {
    console.log('开电脑')
  }
}

class OpenWxCommand {
  execute() {
    console.log('wx')
  }
}

class MacroCommand {
  constructor() {
    this.commandsList = []
  }
  add(command) {
    debugger
    command.parent = this
    this.commandsList.push(command)
  }

  execute() {
    for(let i = 0, command; command = this.commandsList[i++];) {
      command.execute()
    }
  }
}

class OpenfriCommand {
  execute() {
    console.log('开冰箱')
  }
}

class OpenMriCommand {
  execute() {
    console.log('打开微波炉')
  }
}

const macro2 = new MacroCommand()
macro2.add(new OpenfriCommand())
macro2.add(new OpenMriCommand())
const macro = new MacroCommand()
macro.add(new closeDoorCommand())
macro.add(new OpenPcCommand())
macro.add(new OpenWxCommand())
macro.add(macro2)
macro.execute()