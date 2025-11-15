import i18n from "../features/lang/i18n";

export class DateUtils {
  static formatDateTimeNumeric = (dateStr: string, locale = i18n.language) =>
    new Date(dateStr).toLocaleString(locale, {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

  static formatDateNumeric = (dateStr: string, locale = i18n.language) =>
    new Date(dateStr).toLocaleString(locale, {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
}
