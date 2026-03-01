/**
 * Base Element — Custom element base class with Shadow DOM
 */
export abstract class BaseElement extends HTMLElement {
    protected shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    /** Override to return HTML template */
    abstract template(): string;

    /** Override to return CSS styles */
    styles(): string { return ''; }

    /** Render the component */
    render(): void {
        this.shadow.innerHTML = `<style>${this.styles()}</style>${this.template()}`;
        this.afterRender();
    }

    /** Called after render — override for event binding */
    protected afterRender(): void { }

    /** Query within shadow DOM */
    $(selector: string): HTMLElement | null { return this.shadow.querySelector(selector); }

    /** Query all within shadow DOM */
    $$(selector: string): HTMLElement[] { return Array.from(this.shadow.querySelectorAll(selector)); }

    /** Get attribute with default */
    attr(name: string, defaultValue: string = ''): string { return this.getAttribute(name) || defaultValue; }

    /** Emit custom event */
    emit(eventName: string, detail?: unknown): void {
        this.dispatchEvent(new CustomEvent(eventName, { detail, bubbles: true, composed: true }));
    }

    connectedCallback(): void { this.render(); }

    /** Register this component */
    static register(tagName: string, elementClass: typeof BaseElement): void {
        if (!customElements.get(tagName)) customElements.define(tagName, elementClass as any);
    }
}
