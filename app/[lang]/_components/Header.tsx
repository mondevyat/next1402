import React from 'react'
import { getDictionary } from '../dictionaries';

interface Props {
  lang: string,
};

export default async function Header({ lang }: Props) {
  const dict = await getDictionary(lang) as Dict;

  return (
    <div>{dict.components.header}</div>
  )
}
