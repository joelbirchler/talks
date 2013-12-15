This project uses [GitHub Pages](http://pages.github.com/) to generate slideshows from yaml. You can see the a list of the various slideshows here: http://joelbirchler.github.io/talks/

# Creating a Presentation

The content for a slideshow is written in yaml and located in the `_data` folder. You also need to create an html file in the root with a [front-matter](http://jekyllrb.com/docs/frontmatter/) that describes the talk. Like this:

	---
	layout: default
	title: Function Oriented JavaScript
	slides: function-oriented-js
	---

The `layout` property should be `default` for slideshows. The `title` will appear in the browser titlebar, and `slides` should be the name of the yml file you created in `_data` without the extension.

The slideshow yaml is an array of slides. Each slide can have the following properties:
	
	* `title`: Titled-styled text
	* `heading`: Heading-styled text
	* `text`: Body text
	* `bullets`: An array of text for bullets
	* `code`: The text or array of scripts to display. Script files should be placed in `_includes`.
	* `style`: The style of the slide. See list below.