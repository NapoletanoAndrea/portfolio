export class StringUtils {
  static truncate = (str: string, max: number) =>
    str.length > max ? str.slice(0, max) + "..." : str;

  static isNullOrEmpty = (str: string | undefined | null) => !str || str === "";
}
