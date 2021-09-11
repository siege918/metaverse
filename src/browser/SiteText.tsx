import React from "react";
import CommonProps from "../CommonProps";
import { get, parseText } from "../helpers";

export type SiteTextProps = {
    textId: string;
} & CommonProps;

export class SiteText extends React.Component<SiteTextProps> {
    render() {
        const { LocaleStrings, textId } = this.props;

        const out = get(LocaleStrings, textId, '');

        return parseText(out, this.props);
    }
}