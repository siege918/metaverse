import { TabId } from '../../browser/Browser';
import { Flags } from '../../Flags';
import Message, { MessageType } from "./Message";

export interface PlayerMessageProps {
    Text: string;
    UserName: string;
}

export default class PlayerMessage extends Message<PlayerMessageProps> {
    type =  MessageType.PLAYER;

    render() {
        return (
            <div className="UserMessage">
                <span className="UserName" style={{ color: "gray" }}>{this.props.UserName}</span>&nbsp;
                <span className="Text">{this.props.Text}</span>
            </div>
        );
    }
}