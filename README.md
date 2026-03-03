# webext-web-components

A collection of reusable Web Components for Chrome extension popup and options pages.

## Features

- Shadow DOM encapsulation
- Customizable via CSS custom properties
- Lightweight (~5KB total)
- No framework dependencies
- TypeScript support

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

## License

MIT
