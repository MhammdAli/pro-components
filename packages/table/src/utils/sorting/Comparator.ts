export function _defaultComparator(
    valueA: any,
    valueB: any,
    accentedCompare: boolean = false
): number {
    const valueAMissing = valueA == null;
    const valueBMissing = valueB == null;

    // this is for aggregations sum and avg, where the result can be a number that is wrapped.
    // if we didn't do this, then the toString() value would be used, which would result in
    // the strings getting used instead of the numbers.
    if (valueA && valueA.toNumber) {
        valueA = valueA.toNumber();
    }

    if (valueB && valueB.toNumber) {
        valueB = valueB.toNumber();
    }

    if (valueAMissing && valueBMissing) {
        return 0;
    }

    if (valueAMissing) {
        return -1;
    }

    if (valueBMissing) {
        return 1;
    }

    function doQuickCompare<T>(a: T, b: T): number {
        return a > b ? 1 : a < b ? -1 : 0;
    }

    if (typeof valueA !== "string") {
        return doQuickCompare(valueA, valueB);
    }

    if (!accentedCompare) {
        return doQuickCompare(valueA, valueB);
    }

    try {
        // using local compare also allows chinese comparisons
        return valueA.localeCompare(valueB);
    } catch (e) {
        // if something wrong with localeCompare, eg not supported
        // by browser, then just continue with the quick one
        return doQuickCompare(valueA, valueB);
    }
}
