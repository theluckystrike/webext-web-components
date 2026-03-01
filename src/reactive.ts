/**
 * Reactive Store — Simple reactive state management for web components
 */
export class ReactiveStore<T extends Record<string, unknown>> {
    private state: T;
    private listeners = new Map<string, Set<(value: unknown) => void>>();

    constructor(initialState: T) { this.state = { ...initialState }; }

    /** Get a value */
    get<K extends keyof T>(key: K): T[K] { return this.state[key]; }

    /** Set a value and notify listeners */
    set<K extends keyof T>(key: K, value: T[K]): void {
        this.state[key] = value;
        this.listeners.get(key as string)?.forEach((fn) => fn(value));
    }

    /** Subscribe to changes */
    on<K extends keyof T>(key: K, callback: (value: T[K]) => void): () => void {
        const k = key as string;
        if (!this.listeners.has(k)) this.listeners.set(k, new Set());
        this.listeners.get(k)!.add(callback as any);
        return () => this.listeners.get(k)?.delete(callback as any);
    }

    /** Get entire state */
    getState(): T { return { ...this.state }; }

    /** Update multiple values */
    update(partial: Partial<T>): void {
        Object.entries(partial).forEach(([key, value]) => this.set(key as keyof T, value as T[keyof T]));
    }

    /** Persist state to chrome.storage */
    async save(storageKey: string = '__reactive_state__'): Promise<void> {
        await chrome.storage.local.set({ [storageKey]: this.state });
    }

    /** Load state from chrome.storage */
    async load(storageKey: string = '__reactive_state__'): Promise<void> {
        const result = await chrome.storage.local.get(storageKey);
        if (result[storageKey]) this.update(result[storageKey] as Partial<T>);
    }
}
