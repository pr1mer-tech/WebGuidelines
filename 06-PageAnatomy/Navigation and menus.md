# Navigation and menus
It is common to want to have a bar at the top of your page that contains several elements specific to your branding, a menu, or some buttons. We will call this bar the navigation bar.

**Position the navigation bar according to the content of the page.** You can position the navigation bar so that it remains at the top of the screen when the user scrolls down, or you can leave it at the very top so as not to obstruct the content. Try to see what works best for you.

**Be careful to choose a material for your navigation bar.** In case it is positioned in a fixed position, please choose a solid color or apply a translucent effect.
> Here’s an example of translucent effect in CSS:
> ```scss
> .nav {
> 	background: rgba(255, 255, 255, .5); // Make sure background is transparent
> 	-webkit-backdrop-filter: saturate(180%) blur(20px);
> 	backdrop-filter: saturate(180%) blur(20px);
> }
> ```

**Avoid crowding a navigation bar with too many controls.** In general, a navigation bar should contain no more than your logo, important links, and one or two buttons.

**Give text-titled buttons and links enough room.** If your navigation bar includes multiple text buttons or links, the text of those elements may appear to run together, making them indistinguishable. Add separation by inserting a fixed space item between the elements.

**Think of all screen sizes.** Always make sure that your navigation bar is displayed as well on mobile as on computer. We recommend the hamburger menu when the screen becomes too small to display the entire navigation template, so keep only the logo, the hamburger and possibly the buttons.

**You can include a contact button.** Your users might want to contact you. If it’s a common thing (like contact sales for example), you might want to add a contact button on the right of the navigation bar.

**Use only top-level links or categories.** Regardless of navigation style, it’s essential that the path through content is logical, predictable, and easy to follow. Never mix page links and links to other pages. In general, you should never propose links to the same page, people know how to scroll. When it is too long, separate the content into several pages. 