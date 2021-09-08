import { TabId } from "./browser/Browser";

export type BrowserListener = (tabId: TabId, pageId: string) => void;

export class BrowserManager {
    private BrowserListener: BrowserListener = () => null;

    setListener(browserListener: BrowserListener) {
        this.BrowserListener = browserListener;
    }

    navigate(tabId: TabId, pageId: string) {
        this.BrowserListener(tabId, pageId);
    }
}