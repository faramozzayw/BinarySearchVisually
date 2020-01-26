export const isEmptyString = string => string.trim() === "";

export const isGoodResult = result => result !== -1 && !Number.isNaN(result);
