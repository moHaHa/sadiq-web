import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);

export type PeriodKey =
  | "thisDay"
  | "yesterday"
  | "thisWeek"
  | "lastWeek"
  | "thisMonth"
  | "last30Day"
  | "lastMonth"
  | "nextWeek"
  | "nextMonth"
  | "nextThreeMonth"
  | "thisYear"
  | "lastYear";
export function commonDays(): Record<
  PeriodKey,
  { start: string; end: string }
> {
  const today = dayjs();
  const yesterday = today.subtract(1, "day");
  const startOfCurrentWeek = today.startOf("week");
  const endOfCurrentWeek = today.endOf("week");
  const startOfLastWeek = startOfCurrentWeek.subtract(1, "week");
  const endOfLastWeek = startOfCurrentWeek.subtract(1, "day").endOf("day");
  const startOfCurrentMonth = today.startOf("month");
  const endOfCurrentMonth = today.endOf("month");
  const startOfLast30Days = today.subtract(30, "day").startOf("day");
  const startOfLastMonth = today.subtract(1, "month").startOf("month");
  const endOfLastMonth = today.subtract(1, "month").endOf("month");
  const startOfCurrentYear = today.startOf("year");
  const endOfCurrentYear = today.endOf("year");
  const startOfLastYear = today.subtract(1, "year").startOf("year");
  const endOfLastYear = today.subtract(1, "year").endOf("year");

  return {
    thisDay: {
      start: today.startOf("day").toISOString(),
      end: today.endOf("day").toISOString(),
    },
    yesterday: {
      start: yesterday.startOf("day").toISOString(),
      end: yesterday.endOf("day").toISOString(),
    },
    thisWeek: {
      start: startOfCurrentWeek.toISOString(),
      end: endOfCurrentWeek.toISOString(),
    },
    lastWeek: {
      start: startOfLastWeek.toISOString(),
      end: endOfLastWeek.toISOString(),
    },
    thisMonth: {
      start: startOfCurrentMonth.toISOString(),
      end: endOfCurrentMonth.toISOString(),
    },
    last30Day: {
      start: startOfLast30Days.toISOString(),
      end: today.endOf("day").toISOString(),
    },
    lastMonth: {
      start: startOfLastMonth.toISOString(),
      end: endOfLastMonth.toISOString(),
    },
    thisYear: {
      start: startOfCurrentYear.toISOString(),
      end: endOfCurrentYear.toISOString(),
    },
    lastYear: {
      start: startOfLastYear.toISOString(),
      end: endOfLastYear.toISOString(),
    },
    nextWeek: {
      start: today.endOf("day").toISOString(),
      end: today.add(1, "week").toISOString(),
    },
    nextMonth: {
      start: today.endOf("day").toISOString(),
      end: today.add(1, "month").toISOString(),
    },
    nextThreeMonth: {
      start: today.endOf("day").toISOString(),
      end: today.add(3, "month").toISOString(),
    },
  };
}

export function getPeriodKey(
  start: string | undefined,
  end: string | undefined
): PeriodKey | undefined {
  if (start == undefined || end == undefined) return undefined;
  const periods = commonDays();
  for (const key in periods) {
    if (
      periods[key as PeriodKey].start === start &&
      periods[key as PeriodKey].end === end
    ) {
      return key as PeriodKey;
    }
  }
  return undefined;
}
