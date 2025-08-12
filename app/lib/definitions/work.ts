export interface Work {
    description: string;
    title: string;
    covers: number[];
    subjects: string[];
    key: string;
    authors: Author[];
    type: Type;
    latest_revision: number;
    revision: number;
    created: Created;
    last_modified: Created;
}

export interface Author {
    author: Type;
    type: Type;
}

export interface Type {
    key: string;
}

export interface Created {
    type: string;
    value: Date;
}
