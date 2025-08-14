export interface Work {
    key: string;
    title: string;
    first_publish_date: string;
    authors: Author[];
    type: Type;
    description: string;
    covers: number[];
    lc_classifications: string[];
    dewey_number: string[];
    subjects: string[];
    first_sentence: Created;
    subject_times: string[];
    identifiers: Identifiers;
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

export interface Identifiers {
    wikidata: string[];
}
