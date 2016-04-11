# Nesper

**Nesper** [Nextzy + Casper] is a Ghost theme for Nextzy's blog, forked from the default theme named [Casper](https://github.com/TryGhost/Casper).

## Features

- [x] Syntax Highlighter with prism.js
- [x] Disqus Comment System
- [x] SCSS support with Gulp.js

## Development

- Install project dependencies

    ```
    npm install
    ```

- Gulp task for watch scss file

    ```
    gulp
    ```

- For anyone who want to use this theme, you must change disqus name at `partials/disqus.hbs` in line 17 to your name.

    ```
    // From
    s.src = '//nextzy.disqus.com/embed.js';
    
    // To
    s.src = '//YOUR_DISQUS_NAME.disqus.com/embed.js';
    ```

## Changelog

#### 1.2.2 (04/11/2016)

* Change background color for `pre`, `code` and `blockquote`

#### 1.2.0 - 1.2.1 (02/29/2016)

* Support SCSS built with gulp.js
* Add scss variables file for easy to customize.

#### 1.1.0 (02/28/2016)

* initial release version 1.0.0
* Add disqus comment system.
* Add prism.js for syntax highlighter.
* Edit some color schema, layout and spacing.
* Add tag in post footer.

## Copyright & License

Copyright (c) 2013-2016 Ghost Foundation - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
