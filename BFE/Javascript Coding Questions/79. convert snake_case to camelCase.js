/* Do you prefer snake_case or camelCase ?

Anyway, please create a function to convert snake_case to camcelCase.


snakeToCamel('snake_case') 
// 'snakeCase'
snakeToCamel('is_flag_on') 
// 'isFlagOn'
snakeToCamel('is_IOS_or_Android') 
// 'isIOSOrAndroid'
snakeToCamel('_first_underscore') 
// '_firstUnderscore'
snakeToCamel('last_underscore_') 
// 'lastUnderscore_'
snakeToCamel('_double__underscore_') 
// '_double__underscore_'
contiguous underscore __, leading underscore _a, and trailing underscors a_ should be kept untouched. */

/**
 * @param {string} str
 * @return {string}
 */
function snakeToCamel(str) {
  return str.replace(
    /([^_])_([^_])/g,
    (_, before, after) => before + after.toUpperCase(),
  )
}
