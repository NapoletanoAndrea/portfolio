export class ArrayUtils {
  static range(start: number, end: number): number[] {
    const length = Math.abs(end - start) + 1;
    const step = start <= end ? 1 : -1;

    return Array.from({ length }, (_, i) => start + i * step);
  }

  static isNullOrEmpty = (array: Array<any> | null | undefined) =>
    !array || array.length === 0;

  static createArrayAroundNumber(
    center: number,
    length: number,
    min: number,
    max: number,
  ): number[] {
    if (length <= 0) return [];

    // Always include the center number
    let half = Math.floor((length - 1) / 2);
    let start = center - half;
    let end = center + (length - 1 - half);

    // Adjust if start < min
    if (start < min) {
      const shift = min - start;
      start += shift;
      end += shift;
    }

    // Adjust if end > max
    if (end > max) {
      const shift = end - max;
      start -= shift;
      end -= shift;
    }

    // Clamp if still out of bounds
    start = Math.max(start, min);
    end = Math.min(end, max);

    // If the bounds make the array too short, adjust length
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }

    return result;
  }
}
