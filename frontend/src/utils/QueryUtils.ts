import type { PathParams, QueryParams } from "../types/types";
import { ArrayUtils } from "./ArrayUtils";

export class QueryUtils {
  static createQueryString(params: QueryParams): string {
    const entries = Object.entries(params)
      .filter(
        ([_, value]) =>
          value !== null &&
          value !== undefined &&
          !(typeof value === "string" && value === "") &&
          !(Array.isArray(value) && value.length === 0),
      )
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${encodeURIComponent(key)}=${encodeURIComponent(
            value.join(","),
          )}`;
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(
          String(value),
        )}`;
      });

    return !ArrayUtils.isNullOrEmpty(entries) ? "?" + entries.join("&") : "";
  }

  static createPath = ({ path, key = "", queryParams = {} }: PathParams) => {
    key = key !== "" ? key.toString() + "/" : "";
    queryParams =
      typeof queryParams === "object"
        ? QueryUtils.createQueryString(queryParams)
        : queryParams;
    return `${path}${key}${queryParams}`;
  };
}
