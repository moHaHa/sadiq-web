import { IssueStatus } from "../types/issueStatus.type";

export const getIssueStatusConfig = (
  status: IssueStatus
): {
  label: string;
  color: string;
  tag: JSX.Element;
} => {
  const config: Record<
    IssueStatus,
    { label: string; color: string; tag: JSX.Element }
  > = {
    open: {
      label: "مفتوح",
      color: "#e74c3c", // Red for unresolved issues
      tag: (
        <span
          style={{
            color: "#e74c3c",
            padding: "4px 8px",
            borderRadius: "4px",
            background: "#fdecea",
          }}
        >
          مفتوح
        </span>
      ),
    },
    inProgress: {
      label: "قيد العمل",
      color: "#f39c12", // Orange for ongoing issues
      tag: (
        <span
          style={{
            color: "#f39c12",
            padding: "4px 8px",
            borderRadius: "4px",
            background: "#fff4e5",
          }}
        >
          قيد العمل
        </span>
      ),
    },
    resolved: {
      label: "تم الحل",
      color: "#2ecc71", // Green for resolved issues
      tag: (
        <span
          style={{
            color: "#2ecc71",
            padding: "4px 8px",
            borderRadius: "4px",
            background: "#eafaf1",
          }}
        >
          تم الحل
        </span>
      ),
    },
  };

  return config[status];
};
