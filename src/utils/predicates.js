export const isEmptyString = string => string.trim() === "";

export const isPositiveResult = result => result !== -1 && !Number.isNaN(result);
