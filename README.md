# STFW.info

The repo of [stfw.info](https://stfw.info)

## Development

### Requirement

- Node.JS
- Gulp
- Project Dependenciess
  - gulp-htmlmin
  - gulp-htmlclean

```bash
npm install gulp -g
npm install
```

### Running

Simply run in project root dictionary:

```
gulp
```

The compressed html will automatically output in `public/` ~~and the minified css will automatically output in `public/css/msui.min.css`~~.
The gulp webserver will listen on `http://localhost:8080`. The broswer will automatically open the html.

```
gulp build
```

The gulp will only compress the html and automatically output in `public/`.

Started using remote css and js files, deleted automatic actions in order to integrate Travis CI.

### Project Structure

| Directory/File | Description                        |      |
| -------------- | ---------------------------------- | ---- |
| Public         | Production Environment             |      |
| ├── fonts      | Roboto Fonts                       |      |
| ├── icons      | Material Design Icons              |      |
| ├── js         | `mdui.min.js`                      |      |
| source         | Raw project                        |      |
| ├── css        | The raw css without minified       |      |
| ├── index.html | The raw html file without minified |      |
| gulpfile.js    | Gulp tasks definition              |      |
| package.json   | Package Information                |      |

## Travis.CI

You should configure the Travis.CI with the ENV below:

- `GitHubEMail`: Your E-Mail address for GitHub
- `GitHubUser`: Your Username at GitHub
- `GitHubKEY`: Personal access tokens for GitHub

Those ENV will help Travis.CI configure the git and deploy the `public` dictionary's contents to your repo's `build` branch.

> You should disable `Display value in build log` in Travis.CI console to avoid the leak of your token!
