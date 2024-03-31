# Launching

The launch experience has a significant impact on the way people feel about your website. Regardless of the device people are using or if they already visited your site, the launch experience should be fast and seamless.

When you're building a modern web experience, it's important to measure, optimize, and monitor if you're to get fast and stay fast. Performance plays a significant role in the success of any online venture, as high performing sites engage and retain users better than poorly performing ones. Sites should focus on optimizing for user-centric happiness metrics. Tools like Lighthouse highlight these metrics and help you take the right steps toward improving your performance. To "stay fast", set and enforce performance budgets to help your team work within the constraints needed to continue loading fast and keeping users happy after your site has launched.

**Optimize loading performances.** Time counts from the moment the user clicks on a link to your site until the page becomes interactive. It is crucial to optimize the performance of your site, by reducing the response time of your servers and especially by optimizing the content. Images and JavaScript content should be reduced to a minimum, i.e. only load what is strictly necessary: no need to load a large image to display only part of it or load unnecessary scripts. Make sure your website is ready as soon as the content is loaded. Don’t show a loading indicator telling that the user has to wait again.

**Avoid asking for setup information up front.** People expect websites to just work. Design your website for the majority of users and let the few that want a different configuration adjust settings to meet their needs. As much as possible, get setup information from device settings and context, or through an authentification service. If you must ask for setup information, prompt people to supply it the first time they open the website, and let them modify it later in your settings.

**Avoid showing agreements and disclaimers.** Do not display popups to request permission to use cookies or to accept your terms of services. By default, assume that the user refuses them, and let them make the choice passively (when registering or through a light and non-intrusive banner).

**Avoid hiding controls when the user is not logged in.** If the feature can work without logging in, let the user access it. Moreover, depending on your authentication system, this bad practice may lead to [CLS](https://web.dev/articles/cls) if the user suddenly gets logged in.

**Restore the previous state when the user comes back.** Don't make people retrace steps to reach their previous location in your website. Preserve and restore the state so they can continue where they left off. For example, when a previously logged in user opens your website, make sure he stays logged in.
