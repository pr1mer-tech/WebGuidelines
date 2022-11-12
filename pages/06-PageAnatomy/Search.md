# Search
When your website has a lot of content, it can be a good idea to have an internal search engine. A search bar allows people to search through a large collection of values by typing text into a field. A search bar can be displayed alone, or in a navigation bar. It’s always a good idea to display the search bar inside the navigation bar as it's always accessible.

**Differentiate the search bar from a simple input.** Differentiate between the two in your components. Try for example to add a magnifying glass next to the text field to make it discernible.

**Enable the Clear button.** Most search bars include a Clear button that erases the contents of the field.

**If necessary, provide hints and context in a search bar.** A search bar's field can contain placeholder text—like “Search Clothing, Shoes and Accessories” or simply “Search”—as a reminder of the context being searched. A succinct, one-line prompt with appropriate punctuation can also appear directly above a search bar to provide guidance.

**Make your search system fast and accurate.** No one wants to spend hours searching for information. If someone makes a typo or searches for a synonym, make sure that your system can still find the right result.
> We’re not asking you to become Google, but please have a decent search engine. Algolia or other front-end libraries such as Fuse or OrionSearch’s SearchKit are now handling theses things very well, so consider using them.

**Where possible, add the most obvious results when the user types.** And for more advanced search results, let the user access the full results by hiting `Enter`. For example, if a user is looking for the city of London and starts typing "lon", display "London" directly below it.
![](/Capture%20d%E2%80%99e%CC%81cran%202020-10-11%20a%CC%80%2013.58.07.png)