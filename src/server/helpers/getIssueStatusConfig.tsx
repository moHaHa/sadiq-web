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
      color: "#e74c3c55", // Red for unresolved issues
      tag: (
        <div
          className="inline-block"
          style={{
            color: "#e74c3c",
            padding: "4px 8px",
            borderRadius: "4px",
            background: "#fdecea",
          }}
        >
          مفتوح <div className="i-solar:clock-circle-linear" />
        </div>
      ),
    },
    inProgress: {
      label: "قيد العمل",
      color: "#f39c1255", // Orange for ongoing issues
      tag: (
        <div
          className="inline-block"
          style={{
            color: "#f39c12",
            padding: "4px 8px",
            borderRadius: "4px",
            background: "#fff4e5",
          }}
        >
          قيد العمل <div className="i-svg-spinners:pulse-multiple" />
        </div>
      ),
    },
    resolved: {
      label: "تم الحل",
      color: "#2ecc7155", // Green for resolved issues
      tag: (
        <div
          className="inline-block"
          style={{
            color: "#2ecc71",
            padding: "4px 8px",
            borderRadius: "4px",
            background: "#eafaf1",
          }}
        >
          تم الحل <div className="i-solar:check-read-linear" />
        </div>
      ),
    },
  };

  return config[status];
};
