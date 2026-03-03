# webext-web-components

[![npm version](https://img.shields.io/npm/v/webext-web-components)](https://npmjs.com/package/webext-web-components)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![CI Status](https://img.shields.io/github/actions/workflow/status/theluckystrike/webext-web-components/ci.yml?branch=main)](https://github.com/theluckystrike/webext-web-components/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/webext-web-components?style=social)](https://github.com/theluckystrike/webext-web-components)

> A collection of reusable Web Components for Chrome extension popup and options pages.

## Overview

**webext-web-components** is a collection of lightweight, reusable Web Components designed for Chrome extension popup and options pages. All components use Shadow DOM for encapsulation and are customizable via CSS custom properties.

Part of the [Zovo](https://zovo.one) developer tools family.

## Features

- ✅ **Shadow DOM** - Style encapsulation
- ✅ **CSS Custom Properties** - Easy theming
- ✅ **Lightweight** - ~5KB total
- ✅ **No Dependencies** - Pure vanilla JS
- ✅ **TypeScript** - Full type support
- ✅ **Framework Agnostic** - Works with React, Vue, etc.

## Installation

```bash
npm install webext-web-components
```

## Components

### `<ext-button>`

A styled button component with loading state.

```html
<ext-button>Click Me</ext-button>
<ext-button variant="primary">Primary</ext-button>
<ext-button variant="danger">Delete</ext-button>
<ext-button disabled>Disabled</ext-button>
<ext-button loading>Loading...</ext-button>
```

```javascript
import '@webext-web-components/ext-button';

const button = document.querySelector('ext-button');
button.addEventListener('click', () => {
  console.log('Clicked!');
});
```

### `<ext-card>`

A card container component.

```html
<ext-card>
  <h2 slot="header">Card Title</h2>
  <p>Card content goes here.</p>
  <div slot="footer">Footer content</div>
</ext-card>
```

### `<ext-modal>`

A modal dialog component.

```html
<ext-modal id="my-modal">
  <h2 slot="title">Confirm Action</h2>
  <p>Are you sure you want to proceed?</p>
  <div slot="actions">
    <ext-button variant="secondary" id="cancel">Cancel</ext-button>
    <ext-button variant="danger" id="confirm">Confirm</ext-button>
  </div>
</ext-modal>

<script>
const modal = document.getElementById('my-modal');
modal.open(); // Show modal
modal.close(); // Hide modal
</script>
```

### `<ext-tabs>`

Tab navigation component.

```html
<ext-tabs>
  <ext-tab label="Tab 1" active>
    <p>Content for tab 1</p>
  </ext-tab>
  <ext-tab label="Tab 2">
    <p>Content for tab 2</p>
  </ext-tab>
  <ext-tab label="Tab 3">
    <p>Content for tab 3</p>
  </ext-tab>
</ext-tabs>
```

### `<ext-input>`

Enhanced input with validation.

```html
<ext-input 
  label="Email" 
  type="email" 
  placeholder="Enter email"
  required
></ext-input>

<ext-input 
  label="Password" 
  type="password" 
  minlength="8"
></ext-input>
```

### `<ext-toggle>`

A toggle switch component.

```html
<ext-toggle label="Enable notifications"></ext-toggle>
<ext-toggle label="Dark mode" checked></ext-toggle>

<script>
const toggle = document.querySelector('ext-toggle');
toggle.addEventListener('change', (e) => {
  console.log('Enabled:', e.detail.checked);
});
</script>
```

### `<ext-select>`

Dropdown select component.

```html
<ext-select label="Choose option">
  <option value="a">Option A</option>
  <option value="b">Option B</option>
  <option value="c">Option C</option>
</ext-select>
```

## CSS Custom Properties

Customize component appearance:

```css
:root {
  /* Button colors */
  --ext-button-primary-bg: #4CAF50;
  --ext-button-primary-color: white;
  --ext-button-danger-bg: #f44336;
  
  /* Card styles */
  --ext-card-border-radius: 8px;
  --ext-card-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  /* Input styles */
  --ext-input-border-radius: 4px;
  --ext-input-focus-color: #2196F3;
  
  /* Modal styles */
  --ext-modal-overlay: rgba(0,0,0,0.5);
}
```

## TypeScript

```typescript
import '@webext-web-components/ext-button';

// Type definitions are included
const button = document.querySelector('ext-button');

// Events are typed
button.addEventListener('click', (e: Event) => {
  // Handle click
});
```

## Framework Integration

### React

```jsx
import '@webext-web-components/ext-button';

// Use as regular HTML elements
function MyComponent() {
  return <ext-button onClick={() => alert('Hi!')}>Click</ext-button>;
}
```

### Vue

```vue
<template>
  <ext-button @click="handleClick">Click Me</ext-button>
</template>

<script setup>
import '@webext-web-components/ext-button';

const handleClick = () => {
  console.log('Clicked!');
};
</script>
```

## Browser Support

- Chrome 80+
- Edge 80+
- Chromium-based browsers

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/web-component`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/web-component`
7. **Submit** a Pull Request

## Built by Zovo

Part of the [Zovo](https://zovo.one) developer tools family — privacy-first Chrome extensions built by developers, for developers.

## See Also

### Related Zovo Repositories

- [webext-skeleton-loader](https://github.com/theluckystrike/webext-skeleton-loader) - Loading placeholders
- [webext-data-table](https://github.com/theluckystrike/webext-data-table) - Data table component
- [chrome-extension-starter-mv3](https://github.com/theluckystrike/chrome-extension-starter-mv3) - Extension template
- [chrome-storage-plus](https://github.com/theluckystrike/chrome-storage-plus) - Type-safe storage

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions
- [Zovo Permissions Scanner](https://chrome.google.com/webstore/detail/zovo-permissions-scanner) - Check extension privacy grades

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT — [Zovo](https://zovo.one)

---

*Built by developers, for developers. No compromises on privacy.*
