import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  progress: number;
  width: number;
  colorBg: string;
  colorBar: string;
  colorText: string;
}

export const ProgressBar = ({
  progress = 0,
  width = 100,
  colorBg = "#e6e6e6",
  colorBar = "#60c25a",
  colorText,
}: ProgressBarProps) => {
  width = width < 0 ? 0 : width > 100 ? 100 : width;
  progress = progress < 0 ? 0 : progress > 100 ? 100 : progress;

  const inlineStyles: { [key: string]: React.CSSProperties } = {
    progressBar: {
      width: `${width}%`,
      backgroundColor: colorBg,
    },
    progressBarText: {
      color: colorText,
    },
    progressBarFill: {
      backgroundColor: colorBar,
      width: `${progress}%`,
    },
  };

  return (
    <div className={styles.progressBar} style={inlineStyles.progressBar}>
      <div
        className={styles.progressBar__text}
        style={inlineStyles.progressBarText}
      >
        {progress}%
      </div>
      <div
        className={styles.progressBar__fill}
        style={inlineStyles.progressBarFill}
      ></div>
    </div>
  );
};
