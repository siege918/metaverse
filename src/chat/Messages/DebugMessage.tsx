import { TabId } from '../../browser/Browser';
import { Flags } from '../../Flags';
import Message, { MessageType } from "./Message";

export default class DebugMessage extends Message<{}> {
    type =  MessageType.DEBUG;

    render() {
        return (<>
            <div><a href="#" onClick={() => { this.props.setFlag(Flags.HasUnlockedMetaverseTracker, true) }}>Click here to unlock the Metaverse tracker</a></div>
            <div><a href="#" onClick={() => { this.props.navigateBrowser(TabId.Tracker, '') }}>Click here to navigate to the Metaverse tracker</a></div>
        </>);
    }
}