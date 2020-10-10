# Modality
Modality is a design technique that presents content in a temporary mode that’s separate from the user's previous current context and requires an explicit action to exit. Presenting content modally can:

- Help people focus on a self-contained task or set of closely related options
- Ensure that people receive and, if necessary, act on critical information
> Alerts, sheets and popups are modal content.

**Use modality when it makes sense.** Create a modal experience only when it’s critical to focus people’s attention on making a choice or performing a task that’s different from their current task. A modal experience takes people out of their current context and requires an action to dismiss, so it’s essential to use it only when it provides a clear benefit.

**Reserve alerts for delivering essential — and ideally actionable — information.** Typically, an alert appears because something has gone wrong. Because an alert interrupts the experience , it’s important for people to feel that the intrusion is warranted.

**Keep modal tasks simple, short, and narrowly focused.** Avoid creating an app within your site. If a modal task is too complex, people can lose sight of the task they suspended when they entered the modal context. Be especially wary of creating modal tasks that involve a hierarchy of views because people can get lost and forget how to retrace their steps. If a modal task must contain subviews, provide a single path through the hierarchy and a clear path to completion. Avoid using a Done button for anything other than completing the task.

**Always include a way to dismiss the modal view.** For example, you might use Done or Cancel. Including a button ensures that the modal view is accessible to assistive technologies and provides an alternative to dismissal gestures. Alternatively, make sure that the modal is dismissed when clicking outside.

**In general, display a title that identifies the modal task.** When people enter a modal task, they switch away from their previous context, so it’s a good idea to make the new context clear. You might also provide text in other parts of the view that more fully describes the task or provides guidance.

**Coordinate the modal view appearance with your site.** Make sure you use the same UI views and controls on your site and on the modal view.