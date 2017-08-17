# Ember-ted-button

This addon is a TED-styled button component, intended for use in TED apps using [ember-ted-shed](https://github.com/tedconf/ember-ted-shed).

## Disclaimer

work in progress! subject to change

## Installation

```
ember install ember-ted-button
```

This addon depends on `ember-ted-shed` and `ember-cli-sass` for styling:

```
ember install ember-ted-shed
ember install ember-cli-sass
```

```
// app.scss
@import 'ember-ted-shed/colors;
@import 'ember-ted-shed/borders;
```

## Usage

Basic usage (defaults to light theme):

```hbs
{{ted-button text="Save"}}
```

Dark theme:
{{ted-button text="Save" theme="dark"}}

Template block usage for custom markup:

```hbs
{{#ted-button}}
  <em>any</em> markup can go here!
{{/ted-button}}

```

Disabled button:

```hbs
{{ted-button 
  text="can't click this" 
  theme="dark" 
  classNames="m-l:1"}}
```

![](/tests/dummy/public/ted-button.png)

If you need to customize, you can add your own [shed.css](http://tedconf.github.io/shed-css/) class names:

```hbs
{{#ted-button text="Danger!" classNames="bg:red"}}
```


## Contributing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

##3 Running

* `ember serve`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

### Creating a new release and publishing to npm

* Make sure you have write access on npm. Ask an existing collaborator to grant you access if you don't.
* `npm version $TYPE -m "message about this version"` where $TYPE indicates the semver release type, eg. `patch`, `major` or `minor`. see the [npm-version docs](https://docs.npmjs.com/cli/version) and (semver docs)[http://semver.org/] if you're not sure which applies
* `npm publish`
* `git push --tags`
* document the changes by [creating a new release](https://github.com/tedconf/ember-ted-button/releases)

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
