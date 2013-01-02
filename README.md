# Web Font Viewer

A simple tool to allow developers, designers, and even producers to visualize the chosen fonts for a project. A little set up by a developer will allow designers to tweak and pass back info to a developer for font implementation. The example is using TypeKit.

## Setup

Fork the project and create a new branch from develop. This new branch will serve as the branch you will use for a particular project. The concept being that you can create a branch for each project you may have.

Edit the method of loading your fonts in index.html. Whether you are using Typekit, Google Fonts, typography.com or custom fonts you will be loading these in the head of the index.

### Edit the CSS

Create a class for each of the different fonts you will be using and add these to style.css. For example:

	.tk-futura-pt-book-italic
	{
		font-family: "futura-pt",sans-serif;
		font-style: italic;
		font-weight: 400;
	}

You can see this in action in style.css where we have 6 different variations of the same font. Copy all of these classes and then you can add this to the JavaScript in the index file.

### Edit the HTML/JavaScript

The `fonts` variable contains this list of classes so that we can apply the style to the overall container.

The `prefix` variable is so we can safely remove a class from an element based on a prefix. So you can see that in the example we've prefixed all the font declarations with "tk-futura". You will want to do the same and edit this variable appropriately.

You should also change the class of the `<div id="container">` to be the first element in the `fonts` array. This will, of course, set the default font when the page loads.

## Usage

Simple. Place your files somewhere accessible to your localhost. Open the index page in a browser and tinker with the controls. Better yet, in your office you can pass around the URL and allow others to see from their machine. (Check out [this tutorial](http://www.bigspaceship.com/2012/05/team-development-tip-virtualhost/ "Team Development Tip: VirtualHost") on setting up Virtual Hosts if you're feeling ambitious.)

## Advanced

You can click the cog to open a modal window that will present you with a JSON object that describes the current state of the text. This can be passed to a developer and s/he will know what to do with it.

The index file has lorem ipsum but feel free to change this as you see fit. The user can change the text as needed on the fly but if you'd like to start with a particular text, by all means, change it.

## Versions

### 1.1
* Changed Name
* Added screenshot for WP

### 1.1
* Cleaned JS
* Added Google fonts example
* Keeping Typekit as the main example

### 1.0
* added ability to have user change text

### User can modify the following attributes
* fontColor
* bgColor
* size
* face
* lineHeight
* align
* transform
* smoothing (webkit only)
* letterSpacing
* rotation
* spacing (between paragraphs)
* width (of overall container)