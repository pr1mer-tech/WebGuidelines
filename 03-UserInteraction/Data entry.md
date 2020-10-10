# Data entry
Whether using a keyboard, mouse, trackpad, or your fingers, inputting information can be a tedious and sometimes error-prone process. When a website asks for lots of input before doing anything useful, people can get discouraged quickly.

**Let people make choices whenever possible.** Consider using a table, pop-up button, or set of radio buttons instead of an input (text field). The ability to choose from a list of predefined options rather than type a response makes data entry quicker and more efficient.

**Simplify navigation of value lists.** In controls like tables and pop-up buttons, make it easy to locate a specific value. Consider sorting values alphabetically or in another logical manner that facilitates speedy scanning and selection.

**Use an introductory label or placeholder text to help communicate purpose.** A label helps users understand what type of information they should enter. An input can also contain placeholder text—such as Email or Password—when there’s no other text in the field. A label is often unnecessary when placeholder text is present. Generally, labels should use title-style capitalization and end with a colon, while placeholder text should use sentence-style capitalization and no punctuation.

**Consider using an expansion tooltip to show the full version of clipped or truncated text.** An expansion tooltip (`title` attribute or custom tooltip) behaves like a help tag and appears when the user places the pointer over the field.

**Use input types when appropriate.** Always associate an input with the corresponding type. For example, an input that will receive a password should be of type `password`

## Prepopulating Data
**Get information from the system whenever possible**. Don’t force people to provide information that can be gathered automatically or with the user's permission, like country or language.

**Provide reasonable default values.** To the extent possible, prefill inputs with the most likely values. Providing good defaults minimizes decision making and speeds up data entry. Whenever possible, use autocomplete to offer suggestions as the user types. Autocomplete uses any text the user has entered so far to provide one or more suggested entries. The user can accept a suggestion or continue typing. Suggestions continue to be refined as more typing occurs.

**Never prepopulate a password field.** For security, the user should be asked to enter their password or let the browser handle this process.

**Ensure the accuracy of data populated by your site.** People appreciate the convenience of having some information supplied for them, as long as it’s correct. If you can’t guarantee the accuracy of the information you provide, it’s better to leave inputs empty.

## Validating Data
**Require input values only when necessary.** Use required inputs only for information that is truly necessary to proceed.

**Defer showing a required indicator next to a required input until the user tries to proceed without entering a value.** Preemptively displaying an asterisk or a custom icon next to each required input and selection control can make your interface appear cluttered and unappealing. Assume people know what they're doing and will enter all required values. If they forget one, show an indicator next to the forgotten field when they try to exit the current context.

**Dynamically validate input values.** It’s frustrating when you have to go back and correct mistakes after filling out a lengthy form. Whenever possible, check field values immediately after entry so users can correct them right away.

**Perform appropriate input validation.** Let the user know if they’ve entered an invalid value. If the only legitimate value for an input is a string of digits, for example, your site should alert the user if they’ve entered characters other than digits. In most cases, the appropriate time to check the data is when the user clicks outside the input or presses the Return, Enter, or Tab key.

**Enable advancement only after collecting required values.** Before enabling a Next or Continue button, make sure all required fields have values. The enabled button provides a visual cue that it’s OK to proceed.