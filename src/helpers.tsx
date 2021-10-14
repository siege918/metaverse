import React from 'react';
import { TabId } from './browser/Browser';
import { EventTrigger } from './browser/EventTrigger';
import { NavTrigger } from './browser/NavTrigger';
import CommonProps from './CommonProps';

export function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const get = (value: any, path: string, defaultValue: any) =>
  String(path)
    .split('.')
    .reduce((acc, v) => {
      try {
        return acc[v] === undefined ? defaultValue : acc[v];
      } catch (e) {
        return defaultValue;
      }
    }, value);

const PARSE_REGEX = /<(?<type>[a-zA-Z]*)=(?<parameter>[^>]*)>(?<contents>[^<]*)<\/>/gm;

export const parseText = (val: string, props: CommonProps) => {
    const splitString = val.split(PARSE_REGEX);

    const output = [];

    let counter = 0;

    while (counter < splitString.length - 1) {
        output.push(splitString[counter]);

        const type = splitString[counter + 1];
        const args = splitString[counter + 2].split(';');
        const body = splitString[counter + 3];

        switch (type) {
          case 'E':
            output.push(
              <EventTrigger {...props} eventName={args[0]} key={`${type}:${args.join('')}`}>
                {body}
              </EventTrigger>
            )
            break;
          case 'N':
            output.push(
              <NavTrigger {...props} tabId={(args[0] as unknown) as TabId} pageId={args[1]} key={`${type}:${args.join('')}`}>
                {body}
              </NavTrigger>
            );
            break;
        }

        counter += 4;
    }

    output.push(splitString[counter]);

    return output;
}

export const getAssetLink = (fileName: string) => `${process.env.PUBLIC_URL}/${fileName}`;