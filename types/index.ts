
export interface DropDownItemProps {
    name: string;
    itemSelected: () => void;
}

export interface MediaPrice {
    amount: string;
    currency: string;
    formatted: string;
}

export interface Subtitles {
    closedCaptions: boolean;
    locale: {
        language: string;
        region: string;
    }
}

export interface Audios {
    language: string;
    region: string;
}

export interface MediaData {
    quality?: string;
    audios?: Audios[];
    availableSince?: number;
    link?: string;
    price?: MediaPrice;
    service: string;
    streamingType?: string;
    subtitles?: Subtitles[];
}