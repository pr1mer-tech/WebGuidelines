# User Input
Users expect the site to respond correctly according to the device they are using. Your site must therefore adapt to the different ways of handling inputs.

## Keyboard
he keyboard is an essential input device for entering text, navigating, and initiating actions.
![](https://developer.apple.com/design/human-interface-guidelines/macos/images/keyboard_2x.png)
### Keyboard-Only Interaction
Some people prefer using a keyboard over a mouse or a trackpad. To ensure your site can be used by all users, make sure its core features are accessible using the keyboard.

**Respect standard keyboard shortcuts and create specific shortcuts for frequently used commands.** Keyboard shortcuts let people trigger actions by pressing specific key combination.

**In general, don’t override standard keyboard shortcuts.** Users may become confused if the shortcuts they know work differently in your site. Only in very rare cases does it make sense to redefine a common shortcut. For example, if you need to copy something that can’t be handle by the system’s pasteboard, then it can make sense to implement your own pasteboard and override the `Cmd+C` shortcut. Another option might be to let the user choose their own keyboard shortcuts.

**Respect platform differences.** Always adapt the shortcuts to the system the user is using. For example, if a user is using Windows, it can make sense to replace the `Cmd` key by `Ctrl`.

## Mouse & Touch
A mouse, a trackpad or a touchscreen provides a way to activate interface elements and initiate actions using clicks and fluid, intuitive finger gestures to supplement keyboard input.

**Respond to gestures depending on the context.** Wherever it makes sense, listen for the appropriate gestures. For example, on a web page, the user can zoom using the trackpad but you might want to override this gesture when displaying a map.

**Handle gestures as responsively as possible.** Gestures should enhance the experience of direct manipulation and provide immediate, live feedback. To achieve this, minimize other operations while gestures are being performed.

**Define custom gestures cautiously.** A custom gesture can be difficult to discover and remember. If a custom gesture seems gratuitous or awkward to perform, people are unlikely to use it. If you must define a custom gesture, make sure it’s easy to perform and not too similar to the gestures people already know.

### Pointers
The user’s system will offer a variety of standard pointer styles, which your site can use to communicate the interactive state of an interface element or the result of a drag operation.

**Use system-provided pointers as intended.** People are accustomed to the meaning of the standard pointer styles. If you change the meaning of one, people can’t predict the results of their actions.

**Prefer system-provided pointers because they're familiar.** If you must design a custom pointer, make sure it improves the usability of your site and isn’t confusing. For example, your custom pointer should make it easy for people to know which part of the pointer to position over an element. If you customize the arrow pointer, create custom versions of the related arrow pointers too, such as copy and disappearing item.

** Buttons shouldn’t always have a hand cursor**. There’s a belief that the hand (pointer) cursor means clickable, but this is wrong and potentially problematic. The hand (and often underlined text) signifies a link. Links are not buttons. Links came along with the web. To help users understand that they are different, they are given the hand cursor. It serves as an extra clue. A well-designed button does not need a hand cursor to help the user realize it does something.