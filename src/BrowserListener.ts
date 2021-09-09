import { TabId } from "./browser/Browser";

export type BrowserListener = (tabId: TabId, pageId: string) => void;