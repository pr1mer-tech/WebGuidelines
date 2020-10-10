# Help
Ideally, people can figure out how to use your website without a guide. However, even in a highly intuitive site, users sometimes need help learning advanced and secondary features. When called for, your site can offer assistance in the form of help tags and documentation. Help tags allow you to provide temporary, context-sensitive help, whereas documentation allows you to provide a more thorough discussion of a topic or task.

**Avoid restricting user actions.** Unless you’re creating an app for children in which it can be appropriate to restrict the user’s scope of action, let people do what they want without unnecessary interference.

## Help Tags (Tooltips)
Help tags, often referred to as tooltips, succinctly describe how to use controls without shifting people’s focus away from the primary interface. Help tags appear when the user positions the pointer over a control for a few seconds. For example, you can show a tooltip when a user is hovering a button by using the `title` attribute in HTML.

**Describe only the control that’s directly beneath the pointer.** People expect a help tag to describe what they can do with the control. They don’t expect to learn about other controls or how to perform a larger task.

**Focus on the action a control initiates.** A good way to stay focused on the action is to begin the tag with a verb. For example, “Restore default settings” or “Add or remove a language from the list.”

**Use the fewest words possible.** As much as possible, limit tags to a maximum of 60 to 75 characters. If you need more text to describe a control, your interface design might be overly complicated. You can also omit articles to reduce the length of a tag. Note that localization can lengthen text by 20 to 30 percent, which is another good reason to keep tags short.

**In general, don’t reference a tag’s corresponding control.** A help tag appears directly over the control, which usually provides sufficient context. If you must refer to a control by name, do so consistently throughout all of your documentation. Avoid defining a tag that does nothing but repeat the name of a control.

**Use sentence fragments with sentence-style capitalization.** This style emphasizes brevity and tends to be more friendly, which connects well with users in need of assistance. If the tag text must form a complete sentence, use appropriate ending punctuation.

**Consider offering context-sensitive help tags.** You could provide different text for different control states, for example.

## Documentation
**Provide task-based help.** People look for help when they can’t figure out how to accomplish a goal. Although users sometimes want a quick reference guide, they’re more likely to seek help with specific tasks. In general, describe control usage in the context of accomplishing a task.