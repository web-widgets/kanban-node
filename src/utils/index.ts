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
    "id",
];
export function getCardFields(card) {
    return Object.keys(card)
        .filter(key => cardFields.includes(key))
        .reduce((acc, key) => {
            acc[key] = card[key];
            return acc;
        }, {});
}

export const STEP = 100_000_000;