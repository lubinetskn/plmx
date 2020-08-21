/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import React, {useEffect, useRef} from 'react';
import {isEmpty} from 'lodash';

// Filter array by string and number values
// TODO: add support for objects and arrays

export const filterTableData = (data: any[], filter: any) => {
  if (filter === '' || undefined) return data;
  const res = data.filter(item => {
    const keys: any[] = Object.keys(item);

    for (let i = 0; i < keys.length; i++) {
      if (
        (typeof item[keys[i]] === 'string' || 'number') &&
        item[keys[i]].toString().toUpperCase().includes(filter.toUpperCase())
      ) {
        return true;
      }
    }
    return false;
  });
  return res;
};
export const searchRender = ({value}: {value: string}) => {
  return <span>{value}</span>;
};

export const getHighlightedText = <T,>(value: T, filter: string, color: string): T | JSX.Element => {
  if (typeof value === 'string') {
    const parts: String[] = value.split(new RegExp(`(${filter})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={4 + index} style={part.toLowerCase() === filter.toLowerCase() ? {color, fontWeight: 600} : {}}>
            {part}
          </span>
        ))}
      </span>
    );
  }
  if (typeof value === 'number') {
    const parts: String[] = value.toString().split(new RegExp(`(${filter})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={4 + index} style={part.toLowerCase() === filter.toLowerCase() ? {color, fontWeight: 600} : {}}>
            {part}
          </span>
        ))}
      </span>
    );
  }
  return value;
};

export const usePrevious = <T extends {}>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export function insert<T>(array: T[], index: number, item: T): T[] {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

export function getModalStyle() {
  return {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
  };
}

export const transformForSelect = (arr: any) => {
  const newArray = arr
    .filter((item: any) => !isEmpty(item))
    .map((item: any) => {
      return {
        value: item.id,
        label: `${item.first_name} ${item.last_name}`,
      };
    });
  return newArray;
};

export const transformFioForSelectFromObj = (Obj: any) => {
  const temp = [];
  for (const [key, value] of Object.entries(Obj)) {
    temp.push({
      value: key,
      //@ts-ignore
      label: `${value.first_name} ${value.last_name}`,
    });
  }

  return temp;
};

export const transformForSelectFromObj = (Obj: any) => {
  const temp = [];

  for (const [key, value] of Object.entries(Obj)) {
    temp.push({
      value: key,
      label: value,
    });
  }

  return temp;
};

export const transformForSelectName = (arr: any) => {
  const newArray = arr.map((item: any) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  return newArray;
};

export const transpile = (obj: any): {value: string; label: unknown}[] => {
  return transformForSelectFromObj(obj);
};

export const transpileWithFio = (obj: any): {value: string; label: {last_name: string; first_name: string}}[] => {
  // @ts-ignore
  return transformFioForSelectFromObj(obj);
};
