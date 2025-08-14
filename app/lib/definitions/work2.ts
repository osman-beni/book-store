export interface Work2 {
    description: Created;
    links: Link[];
    title: string;
    covers: number[];
    subject_places: string[];
    subjects: string[];
    subject_people: string[];
    key: string;
    authors: Author[];
    excerpts: Excerpt[];
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
    value: string;
}

export interface Excerpt {
    comment: string;
    author: Type;
    excerpt: string;
}

export interface Link {
    title: string;
    url: string;
    type: Type;
}
