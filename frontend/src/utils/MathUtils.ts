export class MathUtils {
  static lerp = (start: number, end: number, t: number) => {
    return start + (end - start) * t;
  };

  static clamp = (value: number, min: number, max: number) => {
    return Math.min(Math.max(value, min), max);
  };
}
