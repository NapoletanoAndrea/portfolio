export class ObjectUtils {
  static isEmptyOrNull = (obj: Record<any, any> | undefined | null) =>
    !obj || Object.keys(obj).length === 0;
}
