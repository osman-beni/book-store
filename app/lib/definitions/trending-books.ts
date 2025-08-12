export interface TrendingBooks {
    query: string;
    works: Work[];
    days: number;
    hours: number;
}

export interface Work {
    author_key: string[];
    author_name: string[];
    cover_edition_key?: string;
    cover_i?: number;
    ebook_access: EbookAccess;
    edition_count: number;
    first_publish_year?: number;
    has_fulltext: boolean;
    ia?: string[];
    ia_collection_s?: string;
    key: string;
    language?: string[];
    lending_edition_s?: string;
    lending_identifier_s?: string;
    public_scan_b: boolean;
    title: string;
    editions: Editions;
    subtitle?: string;
    id_project_gutenberg?: string[];
    id_librivox?: string[];
    id_standard_ebooks?: string[];
}

export enum EbookAccess {
    Borrowable = "borrowable",
    NoEbook = "no_ebook",
    Printdisabled = "printdisabled",
    Public = "public",
}

export interface Editions {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    docs: Doc[];
}

export interface Doc {
    key: string;
    title: string;
    cover_i?: number;
    language: Language[];
    ia?: string[];
    ebook_access: EbookAccess;
    has_fulltext: boolean;
    public_scan_b: boolean;
    providers?: Provider[];
    availability?: Availability;
    subtitle?: string;
    id_standard_ebooks?: string[];
    id_project_gutenberg?: string[];
}

export interface Availability {
    status: Status;
    available_to_browse: boolean;
    available_to_borrow: boolean;
    available_to_waitlist: boolean;
    is_printdisabled: boolean;
    is_readable: boolean;
    is_lendable: boolean;
    is_previewable: boolean;
    identifier: string;
    isbn: null | string;
    oclc: null;
    openlibrary_work: string;
    openlibrary_edition: string;
    last_loan_date: Date | null;
    num_waitlist: null | string;
    last_waitlist_date: Date | null;
    is_restricted: boolean;
    is_browseable: boolean;
    __src__: Src;
}

export enum Src {
    CoreModelsLendingGetAvailability = "core.models.lending.get_availability",
}

export enum Status {
    BorrowAvailable = "borrow_available",
    BorrowUnavailable = "borrow_unavailable",
    Open = "open",
    Private = "private",
}

export enum Language {
    Eng = "eng",
    Fre = "fre",
}

export interface Provider {
    access: Access;
    format: Format;
    price: null;
    url: string;
    provider_name: ProviderName;
}

export enum Access {
    OpenAccess = "open-access",
}

export enum Format {
    Epub = "epub",
    Web = "web",
}

export enum ProviderName {
    Gutenberg = "gutenberg",
    Ia = "ia",
    StandardEbooks = "standard_ebooks",
}
