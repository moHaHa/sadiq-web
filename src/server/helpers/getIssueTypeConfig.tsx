import { ReactNode } from "react";
import CorruptionIcon from "~/components/@icons/CorruptionIcon/CorruptionIcon";
import ServiceIssueIcon from "~/components/@icons/ServiceIssueIcon/ServiceIssueIcon";
import SuggestionIcon from "~/components/@icons/SuggestionIcon/SuggestionIcon";
import ViolationIcon from "~/components/@icons/ViolationIcon/ViolationIcon";
import { IssueType } from "../types/issueType.type";

export const getIssueTypeConfig = (
  type: IssueType
): {
  arWord: string;
  arFullWord: string;
  color: string;
  icon: string | ReactNode;
} => {
  const config: Record<
    IssueType,
    {
      arWord: string;
      arFullWord: string;
      color: string;
      icon: string | ReactNode;
    }
  > = {
    violation: {
      arWord: "انتهاك",
      arFullWord: "بلاغ عن انتهاك ",
      color: "#e74c3c", // Red for critical issues
      icon: <ViolationIcon />, // Warning icon
    },
    corruption: {
      arWord: "فساد",
      arFullWord: "بلاغ عن فساد ",
      color: "#f39c12", // Orange for warning
      icon: <CorruptionIcon />, // Money bag icon
    },
    serviceIssue: {
      arFullWord: "بلاغ عن مشكلة خدمية ",
      arWord: "خدمات",
      color: "#3498db", // Blue for service-related issues
      icon: <ServiceIssueIcon />, // Wrench icon
    },
    suggestion: {
      arWord: "اقتراح",
      arFullWord: " اقتراح",
      color: "#2ecc71", // Green for positive suggestions
      icon: <SuggestionIcon />, // Light bulb icon
    },
  };

  return config[type];
};
