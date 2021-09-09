import { TabId } from "./browser/Browser";
import { BrowserListener } from "./BrowserListener";
import { Flags, FlagMap } from "./Flags";
import ChatEventListener from "./chat/ChatEventListener";

export default interface CommonProps {
    FlagMap: FlagMap;
    setFlag: (flag: Flags, val: boolean) => void;
    setBrowserListener: (BrowserListener: BrowserListener) => void;
    navigateBrowser: (tabId: TabId, pageId: string) => void;
    setChatEventListener: (ChatEventListener: ChatEventListener) => void;
    triggerChatEvent: (eventKey: string) => void;
}