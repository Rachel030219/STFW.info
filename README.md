# STFW.info

The repo of [stfw.info](https://stfw.info)

## Development

### Requirement

- Node.JS
- Gulp
- Project Dependenciess
  - gulp-htmlmin
  - gulp-htmlclean
  - gulp-uncss

```bash
npm install gulp -g
npm install
```

### Running

Simply run in project root directory:

```
gulp
```

The html will automatically output in `public/` and the minified css will automatically output in `public/css/msui.min.css`.
The gulp webserver will listen on `http://localhost:8080`. The broswer will automatically open the html.

### Project Structure

Directory/File | Description |
----------| ------------|
Public         | Production Environment |
 ├── fonts | Roboto Fonts |
 ├── icons     | Material Design Icons |
 ├── js     | `mdui.min.js` |
source         | Raw project |
 ├── css | The raw css without minified |
 ├── index.html | The raw html file without minified |
gulpfile.js  | Gulp tasks definition |
package.json | Package Information |

## Todo

- Using Travis.CI to make the building more easily.

