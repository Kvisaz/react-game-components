import React from "react";
import styles from "./LoadingContent.module.css";

interface LoadingContentProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export const LoadingContent = ({
  isLoading,
  children,
}: LoadingContentProps) => {
  return isLoading ? <div className={styles.loader} /> : children;
};
