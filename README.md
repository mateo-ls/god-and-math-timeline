# The God and Math Timeline

## Table of Contents

* [Project description](#project-description)
* [Contributing](#contributing)
  * [Third party software you need to download and install](#third-party-software-you-need-to-download-and-install)
  * [Downloading the project and building it](#downloading-the-project-and-building-it)
  * [Writing your article](#writing-your-article)
  * [Adding your article](#adding-your-article)
     * [Formatting quotes](#formatting-quotes)
     * [Formatting footnotes](#formatting-footnotes)
  * [Adding metadata](#adding-metadata)
  * [Rebuilding the project](#rebuilding-the-project)
  * [Creating a request to add your changes to the main project](#creating-a-request-to-add-your-changes-to-the-main-project)
  

## Project description
[Back to top](#table-of-contents)

This project was initially started by Joseph Stewart and Mark Nguyen for BBST465 - God and Math at Biola University, taught by Dr. Jason Wilson in the Spring of 2019. The purpose of this project is to outline the historical development of the integration of math and faith and present it in an aesthetically pleasing way while remaining academically credible. The project is a series of essays highlighting historical figures who have had some influence or who's ideas represent a larger philosophy of their era. These essays aim to describe what these figures believed as well as what social, historical, and personal factors might have influenced them to believe that way.

**NOTE: When you first pick up this project, email the repository owner (<joseph.william.stewart@biola.edu> as of Spring 2019) so they can transfer ownership of the project to you**

## Contributing

### Third party software you need to download and install
[Back to top](#table-of-contents)

In order to download and build this project you will need to install the following.

* [git](https://git-scm.com/downloads)
  * Used for downloading the project from GitHub
* [Node](https://nodejs.org/en/download/)
  * Used for building the project so you can see it
* [Atom](https://atom.io/)
  * A fancy text-editor used for adding the article to the project


### Downloading the project and building it
[Back to top](#table-of-contents)

In order to download this project and see it, you are going to need to run some terminal or command prompt commands. Once you download and install both [git](https://git-scm.com/downloads) and [Node](https://nodejs.org/en/download/), follow the following steps.

1. Open Command Prompt if you are on Windows, or Terminal if you are on mac
2. Type `cd Desktop` and press enter
3. Type `git clone https://github.com/josephdangerstewart/god-and-math-timeline.git` and press enter
4. Type `cd god-and-math-timeline` and press enter
5. Type `npm install` and press enter. This may take a minute to run
6. Type `npm run build` and press enter.
7. Once that is done, open the folder on your Desktop called god-and-math-timeline and go into the sub-folder called "build" (Note: this folder will only appear once `npm run build` is done).
8. In that folder, open the file "timeline-build.html" in your browser of choice
9. That's it! You've built the project! That wasn't so bad was it?

### Writing your article
[Back to top](#table-of-contents)

Once you've built the project, the next step is to pick an article to write that would fit in the timeline. This will mostly be historical figures but do not feel as if you need to limit yourself. Dr. Wilson suggested to me that I write an article about generic "priests". Once you pick a historical figure (or historical people group), break down the article into three sections:

1. Who are they?
   1. Who is this person and why are they notable?
   2. What did they accomplish in their life?
   3. What is the historical context of the time they lived in?
   4. What major events happened in their life that may have shaped their theological and mathematical beliefs?
2. What is math and truth to them?
   1. What do they believe about the ontological status of math and truth?
   2. Why might they believe that?
   3. How did this belief affect other areas of their life?
3. What is the relationship between spirituality and mathematics to them?
   1. What did they believe about spirituality and theology?
   2. How does their theological/spiritual beliefs shape their beliefs on math?
   3. How does their mathematical beliefs shape their spiritual/theological beliefs?
   4. What practical implications did that have in the way they lived?
  
Once you know what you're going to write about and the structure of the article. Write it first in whatever you typically use to write essays (Word, Google Docs, Pages, etc). Make sure to include footnotes and, if you can and if it's relevant, quotes.

### Adding your article
[Back to top](#table-of-contents)

Once you're article is done and you're happy with it, the next step is to copy it into the format that this project uses, [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Markdown is a simple plaintext language for writing rich-text content to be used on the web. It gets translated directly to [HTML](https://en.wikipedia.org/wiki/HTML). You don't need to be an expert in Markdown in order to contribute to this project, but you do need to know how to format your article using it.

First, you need to open the project in Atom. Open atom and click "Open a Project".

![atom-tutorial-1](https://res.cloudinary.com/josephdangerstewart/image/upload/v1555705055/god-and-math/atom_picture.png)

Then once the project is open, right click on the "articles" folder and click "New File"

![atom-tutorial-2](https://res.cloudinary.com/josephdangerstewart/image/upload/v1555705216/god-and-math/atom_picture_2.png)

Name the file _your-historical-figure_.md, so if you were doing Kepler, the article would be called kepler.md

![atom-tutorial-3](https://res.cloudinary.com/josephdangerstewart/image/upload/v1555705259/god-and-math/atom_picture_3.png)

Then add the three section headings using two hashtags like so.

![atom-tutorial-4](https://res.cloudinary.com/josephdangerstewart/image/upload/v1555705460/god-and-math/atom_picture_4.png)

Then copy and paste each section under its heading and format quotes and footnotes accordingly

#### Formatting quotes
[Back to top](#table-of-contents)

Format quotes using the '>' character. So if you have the following quote

> Number is the ruler of forms and ideas, and the cause of gods and daemons.

From pythagoras, you would add it to the article like so

```
> Number is the ruler of forms and ideas, and the cause of gods and daemons.
_Pythagoras_
```

Put the name of the person who said the quote between two underscores directly under the quote itself.

#### Formatting footnotes
[Back to top](#table-of-contents)

Format footnote links using the following format. If I have the following sentence

"He also famously began a school in Croton in which he taught number theory, music, geometry, and astronomy which according to some scholars was more like a cult than a school."

That I obtained from the following source

"Naifeh, CiCi. Pythagoras. Wichita State University, www.math.wichita.edu/history/Men/pythagoras.html."

I would add the footnote like so.

```
He also famously began a school in Croton in which he taught number theory, music, geometry, and astronomy which according to some scholars was more like a cult than a school.[^1]

... the rest of the article
... at the end of the article

[^1]: Naifeh, CiCi. Pythagoras. Wichita State University, www.math.wichita.edu/history/Men/pythagoras.html.
```

For each following footnote, increase the number by one. So the next footnote would be

```
Some idea that I did not come up with.[^2]

... the rest of the article
... at the end of the article

[^1]: Naifeh, CiCi. Pythagoras. Wichita State University, www.math.wichita.edu/history/Men/pythagoras.html.
[^2]: Some source from some genius somewhere
```

### Adding metadata
[Back to top](#table-of-contents)

Once the article is copied over using the Markdown format, you must add the meta information used by the timeline itself. At the top of the article add the following header information.

```
---
title: <Title that appears in the timeline element, should be descriptive and short>
subtitle: <Subtitle that appears in the timeline element and at the top of the article, should be the name of the historical figure>
date: <Date that the historical figure lived>
icon: <icon that appears in the timeline>
heroUrl: <Link to the image that appears at the top of the article>
who: <Short (one sentence) description of who this historical figure is>
ontology: <Short (one sentence) description of what this historical figure thought about the status of math and truth>
theology: <Short (one sentence) description of what this historical figure thought about the relationship between math and theology>
---
```

Example

```
---
title: Math and Mysticism... Mathticism
subtitle: Pythagoras
date: 570 BC - 495 BC
icon: GiTriangleTarget
heroUrl: https://res.cloudinary.com/josephdangerstewart/image/upload/v1555083351/god-and-math/Bronnikov_gimnpifagoreizev.jpg
who: A greek mathematician famous for the Pythagorean theorem and developments in music theory
ontology: Math has a very real ontological existence, existing in some realm with causal power
theology: Studying math was a form of worship to Apollo and partially how one could achieve the best possible reincarnation
era: classical
---
```

For the icon, pick an icon that makes sense for the historical figure from [this website](https://react-icons.netlify.com/#/icons/fa) and simply put the name of the icon.

### Rebuilding the project
[Back to top](#table-of-contents)

Now that you've added your article, make sure that everything runs correctly and it was correctly added to the project. Follow the following steps to rebuild the project with your article added.

1. Open Command Prompt if you are on Windows or Terminal if you are on Mac
2. Type `cd Desktop/god-and-math-timeline` and press enter (Note: Do not do this if you are still using the same window that you used to build initially)
3. Type `npm run build` and press enter
4. Open build/timline-build.html in your browser of choice (or reload the page if you have it open still)

If everything works then awesome! You are ready to add it to the main project!

### Creating a request to add your changes to the main project
[Back to top](#table-of-contents)

If you do not have a github account, you must make one in order to create a pull request. Once you make a github account, follow the following steps

1. Open Command Prompt if you are on Windows or Terminal if you are on Mac
2. Type `cd Desktop/god-and-math-timeline` and press enter (Note: Do not do this if youa re still using the same window)
3. Type `git checkout master` and press enter
4. Type `git checkout -b add-my-historical-figure-article` (if you were doing Kepler, you would type `git checkout -b add-kepler-article`) and press enter
5. Type `git config --global user.email <your-email>` (if your email was jondoe@example.com, you would type `git config --global user.email jondoe@example.com`. This only needs to be done once) and press enter
6. Type `git config --global user.name <your-name>` (if your name was Jon Doe, you would type `git config --global user.name Jon Doe`. This only needs to be done once) and press enter
7. Type `git add .` and press enter
8. Type `git commit -m "Added article for <my-historical-figure>"` (if you were doing Kepler, you would type `git commit -m "Added article for Kepler`) and press enter
9. Type `git push origin add-my-historical-figure-article` (if you were doing Kepler, you would type `git push origin add-kepler-article`) and press enter
10. Go into your browser and go to the repository page (this page) and click on the "Pull requests tab" (or go to this [link](https://github.com/josephdangerstewart/god-and-math-timeline/pulls))
11. Click "New pull request"
12. Click the drop down that says "compare: master" and find your branch (it should be called `add-my-historical-figure-article` so if you were doing Kepler it would be `add-kepler-article`)
13. Click "Create pull request"

And that's it! You're done! Your article will be reviewed and if it is acceptable, merged into the final project. Thank you for contributing!
