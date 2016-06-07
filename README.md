# CoderFaire Tennessee Website

## Developing Locally

Perhaps beforehand, you'll want to use [rbenv](https://github.com/rbenv/rbenv) to set up an environment:

    rbenv install 2.3.0

Then:

1. `git clone git@github.com:CoderFaire/coderfaire-tennessee.git`
2. `cd coderfaire-tennessee/`
3. `gem install bundler`
4. `bundle install`

Now, you're ready to make modifications and you can test them by running the site in the local web server:

    bundle exec jekyll serve

You may now load the site in a web browser at <http://localhost:4000/>.
