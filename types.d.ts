type Dictionaries = {
    [key: string]: () => Promise<
        { [key: string]: string } |
        { messages: { [key: string]: string } }
    >;
};

type Dict = {
    [key: string]: {
        [key: string]: string,
    },
};