# webext-web-components — Web Components for Chrome Extensions
> **Built by [Zovo](https://zovo.one)** | `npm i webext-web-components`

Shadow DOM base class, reactive state store, custom elements, and event helpers.

```typescript
import { BaseElement, ReactiveStore } from 'webext-web-components';
class MyPanel extends BaseElement {
  template() { return '<h1>Hello</h1>'; }
  styles() { return 'h1 { color: blue; }'; }
}
BaseElement.register('my-panel', MyPanel);
```
MIT License
