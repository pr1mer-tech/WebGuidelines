# Navigation
Navigation is a central concept of the web. Each URL represents a document, and it is common to move from page to page. For most web sites, we recommend associating each screen with a URL in order to preserve the state the user is in. Avoid designing your site entirely on a single page (unless you only have one screen) without changing the associated URL dynamically. Within your website, navigation should feel natural and familiar, and shouldn’t dominate the interface or draw focus away from content. On the web, there are multiple styles of navigation as it’s common to jump from page to page.

## Hierarchical Navigation
Make one choice per screen until you reach a destination. To go to another destination, you must retrace your steps or start over from the beginning and make different choices.
![](https://developer.apple.com/design/human-interface-guidelines/ios/images/NavigationHierarchical-Graphic_2x.png)

## Flat Navigation
Switch between multiple content categories. This website uses this navigation style.
![](https://developer.apple.com/design/human-interface-guidelines/ios/images/NavigationFlat-Graphic_2x.png)
## Content-Driven or Experience-Driven Navigation
Move freely through content, or the content itself defines the navigation. If you don’t know which navigation style you need to use, there are good chances you fall into this category.
![](https://developer.apple.com/design/human-interface-guidelines/ios/images/NavigationExperienceDriven-Graphic_2x.png)
Some websites combine multiple navigation styles. For example, a website that uses flat navigation may implement hierarchical navigation within each category.

**Always provide a clear path.** People should always know where they are in your website and how to get to their next destination. Regardless of navigation style, it’s essential that the path through content is logical, predictable, and easy to follow. In general, give people one path to each screen. If they need to see a screen in multiple contexts, consider using an action sheet, alert, popover, or modal view.

**Design an information structure that makes it fast and easy to get to content.** Organize your information structure in a way that requires a minimum number of taps, click, and screens.