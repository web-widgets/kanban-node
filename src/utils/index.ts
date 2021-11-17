export const cardFields = [
    "label",
    "description",
    "status",
    "progress",
    "start_date",
    "end_date",
    "users",
    "color",
    "sprint",
    "type",
    "column",
    "attached",
    "id",
];
export function getCardFields(card: Record<string, any>) {
    return Object.keys(card)
        .filter(key => cardFields.includes(key))
        .reduce((acc, key) => {
            acc[key] = card[key];
            return acc;
        }, {});
}

export const INDEX_STEP = 100_000_000;