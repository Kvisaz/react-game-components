import styles from "./ProductCard.module.css";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <div className={styles.box}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{price}</p>
    </div>
  );
};
