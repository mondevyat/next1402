import React from 'react'

interface Props {
  params: {
    lang: string,
  },
};

export default function CategoryPage({ params: { lang } }: Props) {
  return (
    <div>CategoryPage {lang}</div>
  )
}
