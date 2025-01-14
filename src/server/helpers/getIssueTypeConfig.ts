import { IssueType } from "../types/issueType.type";

export const getIssueTypeConfig = (
  type: IssueType
): {
  arWord: string;
  color: string;
  icon: string;
} => {
  const config: Record<
    IssueType,
    { arWord: string; color: string; icon: string }
  > = {
    violation: {
      arWord: "انتهاك",
      color: "#e74c3c", // Red for critical issues
      icon: "⚠️", // Warning icon
    },
    corruption: {
      arWord: "فساد",
      color: "#f39c12", // Orange for warning
      icon: "💰", // Money bag icon
    },
    serviceIssue: {
      arWord: "مشكلة في الخدمة",
      color: "#3498db", // Blue for service-related issues
      icon: "🔧", // Wrench icon
    },
    suggestion: {
      arWord: "اقتراح",
      color: "#2ecc71", // Green for positive suggestions
      icon: "💡", // Light bulb icon
    },
  };

  return config[type];
};
