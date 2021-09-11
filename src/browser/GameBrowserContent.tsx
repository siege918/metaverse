import { TabId } from "./Browser";
import { BrowserContent } from "./BrowserContent";
import { SiteText } from "./SiteText";

export class GameBrowserContent extends BrowserContent {
    protected TAB_ID = TabId.Games;

    renderSite() {
        return (
            <div className="Website Game-Website">
                <SiteText {...this.props} textId='DEBUG.TestEvent' />
            </div>
        );
    }
}