# Adaptivity and Layout
People generally want to be able to browse their favorite website on all of their devices and in any context. In CSS, you can configure interface elements and layouts to automatically change shape and size on different devices, smaller windows, and more. It’s important to design an adaptable interface that provides a great experience in any environment.

**Minimize media queries.** When you can, prefer using self-adjusting elements such as flex box instead of writing multiple media queries. Use media queries to resize single elements such as buttons or text. It will ensure your website looks great on all screens.

**Ensure that primary content is clear at its default size.** People shouldn’t have to scroll horizontally to read important text, or zoom to see primary images, unless they choose to change the size.

**Maintain an overall consistent appearance throughout your app.** In general, elements with similar functions should look similar.

**Use visual weight and balance to convey importance.** Large items catch the eye and appear more important than smaller ones. Larger items are also easier to tap. In general, place principal items in the upper half of the screen and — in a left-to-right reading context — near the left side of the screen.

**Use alignment to ease scanning and to communicate organization and hierarchy.** Alignment makes an app look neat and organized, helps people focus while scrolling, and makes it easier to find information. Indentation and alignment can also indicate how groups of content are related.

**Be prepared for text-size changes.** People expect most websites to respond when they choose a different text size when zooming. To accommodate some text-size changes, you might need to adjust the layout.

**Provide ample touch targets for interactive elements.** Try to maintain a minimum tappable area of 44pt x 44pt for all controls.

**Preview your app on multiple devices and browsers.** Before shipping your website, make sure to test it intensively on a variety of devices, operating systems and browser versions.

**Rely on CSS when adapting the layout and graphical elements.** While you can use JavaScript, we recommend CSS because the browser will be able to render the page according to the current context, even when it changes. For example, when dark mode is automatically enabled, the website should adapt immediately.