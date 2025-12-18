export class Pokemon {
    name: string;
    url: string;
    id?: number;
    height?: number;
    weight?: number;
    baseExperience?: number;
    types?: string[];
    abilities?: string[];
    sprite?: string | null;
    stats?: {
        name: string;
        baseStat: number;
    }[];

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }

    get imageUrl(): string {
        return this.sprite ?? this.getDefaultImageUrl();
    }

    private getDefaultImageUrl(): string {
        if (this.id) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
        }
        // Extract ID from URL if available
        const matches = this.url.match(/\/pokemon\/(\d+)\//);
        if (matches && matches[1]) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${matches[1]}.png`;
        }
        return '';
    }
}
