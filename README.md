# netlify-cms-widget-inventory

A widget that lets you add inventory key/value pairs (like size & quantity for example) to netlify cms. Useful for inventory needs. I made this pretty customized for the project I'm working on, but feel free to reach out if you need help implementing this to your own project.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-inventory
```

```js
import <name> from 'netlify-cms-widget-inventory'

CMS.registerWidget('inventory', InventoryControl, InventoryPreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-inventory@^1.0.0"></script>

<script>
  CMS.registerWidget("inventory", InventoryControl, InventoryPreview);
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
fields:
  - { name: <fieldname>, label: <fieldlabel>, widget: inventory }
```
