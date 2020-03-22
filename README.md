# netlify-cms-widget-inventory

Overview of what your widget does.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-inventory
```

```js
import <name> from 'netlify-cms-widget-inventory'

CMS.registerWidget('inventory', <name>Control, <name>Preview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-inventory@^1.0.0"></script>

<script>
  CMS.registerWidget('inventory', <name>Control, <name>Preview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
fields:
  - { name: <fieldname>, label: <fieldlabel>, widget: inventory }
```
