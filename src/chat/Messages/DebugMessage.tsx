import { BrowserManager } from '../../BrowserManager';
import { Flag, FlagManager } from '../../FlagManager';
import Message, { MessageType } from "./Message";

export default class UserMessage extends Message {
    type =  MessageType.DEBUG;

    render() {
        return (<>
            <div><a href="#" onClick={() => { this.props.setFlag(Flag.HasUnlockedMetaverseTracker, true) }}>Click here to unlock the Metaverse tracker</a></div>
        </>);
    }
}