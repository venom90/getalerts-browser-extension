# react-webextension-boilerplate

This is a boilerplate to aim on bootstrap a [WebExtensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) application with `React.js` easily.

Following is some benefits when you use this boilerplate:
* Lightweight boilerplate and easy to understand and config
* Support Hot Reload and source map to develop easily
* `React@16` and `Webpack2` supported

## Getting Statred

### Setup

```sh
$ git clone https://github.com/shopback/react-webextension-boilerplate
$ cd react-webextension-boilerplate
$ yarn install
```

> `extension` folder contain some static assets, like extension icon and manifest

### Development

Run following command to start develop a browser extension:

```sh
$ yarn start
```

After webpack bundle successfully, you will see `build-dev` folder will be created in the root folder. This folder is a temporary extension for development.  Now, you can open your modern browser and load it.

> You can change the `build-dev` in `config/paths` file.

When development, you can change the `popup` and `background` scripts, `webpack` will reload the extension automatically instead of reload it manually.   
Above mechanism is work well on Chrome and Firefox currently.

### Production

Run following command to get your extension to production ready:

```sh
$ yarn run build
```

The final result will be writed to `build-prod` folder. Same as development, you can config the output path in `config/paths` file.

### Testing

### TODO

- [ ] Write a basic example for `background` and `content` scripts
- [ ] Create test boilerplate with `enzyme` and `jest`
- [ ] Improve webpack config
- [ ] Improve webpack custom message
- [ ] Redux or Mobx
- [ ] CI