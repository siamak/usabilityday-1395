# [👾💜 UsabilityDay 1395 — Tehran, Iran.](http://usabilityday.ir)

![UsabilityDay 1395](https://raw.githubusercontent.com/siamak/usabilityday-1395/master/cover.png)

[**UsabilityDay.ir**](http://usabilityday.ir) an event for User Interface, User Experience Designers at November 10th 2016 in Tehran, Iran. Designed, Developed by [**Siamak Mokhtari**](http://siamak.us).

> Build static site with React, CSS Modules, React Router, Babel 6, SCSS, PostCSS, Express, Webpack, Webpack Isomorphic.

## 🔫 Features
- ES6.
- Hot Reloading.
- ESLint rules based on Airbnb's Javascript Styleguide.
- Every route is completely rendered into a `.html` page with `renderToString`.
- Deferred script loading, so the browser can render the html without waiting for the `js` bundle first.
- Hash is added to every asset's filename, so you can cache all assets forever.
- Title, Meta and other SEO tags with [react-helmet](https://github.com/nfl/react-helmet).
- SEO friendly, no JavaScript required to view a page.

## 🔨 How to Use
First clone project with git and install the node modules and run the dev server:

```bash
$ git clone https://github.com/siamak/usabilityday-1395.git
$ npm install
$ npm start
```

Open [http://localhost:3000](http://localhost:3000).

## 🎑 Build
Generate all the static files with `npm run build`. Then upload the contents of the `build/` folder to your hosting solution of choice. Finish!

## 👋 Contribution
Contributions are welcome. Please submit PRs or just file an issue if you see something broken or in
need of improving.

## 🍀 License
This software is released under the [MIT License](http://siamak.mit-license.org).

```
The MIT License (MIT)

Copyright (c) 2016 Siamak Mokhtari s.mokhtari75@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
