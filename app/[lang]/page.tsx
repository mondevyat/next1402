import React from 'react'
import { getDictionary } from './dictionaries'

interface Props {
    params: {
        lang: string;
    },
};

export async function generateMetadata({ params: { lang }}: Props) {
    const dict = await getDictionary(lang) as Dict;

    return {
        title: dict.messages.hi,
        description: dict.messages.hi,
    }
}

export default async function UnknownPage({
    params: {
        lang,
    }
}: Props) {
    const dict = await getDictionary(lang) as Dict;

    return (
        <div>{dict.messages.hi}</div>
    )
}
