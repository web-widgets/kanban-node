export const cardFields = [
    "label",
    "status",
    "description",
    "progress",
    "start_date",
    "end_date",
    "users",
    "cover",
    "image",
    "sprint",
    "column",
    "attachment",
    "type",
    "id",
    "_id",
];
export function getCardFields(card) {
    return Object.keys(card)
        .filter(key => cardFields.includes(key))
        .reduce((acc, key) => {
            acc[key] = card[key];
            return acc;
        }, {});
}