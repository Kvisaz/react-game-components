import styles from "./ImageCaption.module.css";

interface ImageCaptionProps {
  src: string;
  caption: string;
}

export const ImageCaption = ({ src, caption }: ImageCaptionProps) => {
  return (
    <figure className={styles.box}>
      <img src={src} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};
