# SteelHacks.com

Website for SteelHacks

## Development

1. Install Ruby, probably through [rbenv](https://github.com/sstephenson/rbenv). Development is done against Ruby 2.1.2, but other versions probably work too.

2. Install dependencies using Bundler

   ```bash
   $ bundle install
   ```

3. Start the development server

   ```bash
   $ bundle exec jekyll serve --watch
   ```

## Deployment

Just push to the `gh-pages` branch on Github, and the rest is done automatically. Don't have the permissions to do that? Well, you probably shouldn't be deploying then. If you think I'm wrong, [get in touch](https://twitter.com/alexlafroscia).

If you want to do development, but don't have push access, please [fork the repo](https://help.github.com/articles/fork-a-repo/) and [submit a pull request](https://help.github.com/articles/using-pull-requests/), and I'll be happy to review your code.

## Technology

This site uses [Jekyll](http://jekyllrb.com) to perform a build of the assets into a static website. There are other tools like it, but Github supports this one natively and it gives you the ability to use Sass and CoffeeScript for free.

Because of the limitations of the Github Pages platform, we're unable to use anything more advanced like [Bower](http://bower.io) or [NPM](https://www.npmjs.com) for dependency management; at least not right now. If you need to download a library, it should go in the `vendor/` directory. However, use caution when selecting libraries and frameworks to use, as they're really not necessary for something this simple.
