import styles from './Text.module.css';

interface TextProps {
    text: string;
    fontSize?: string;
    className?: string;
}

export const Text = ({text, className, fontSize}: TextProps) => {
    return <span className={`${styles.text} ${className || ''}`} style={{fontSize}}>{text}</span>;
}