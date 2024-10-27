import styles from "./GameBoard.module.css";

interface GameBoardProps {
  rows: number;
  columns: number;
}

export const GameBoard = ({ rows, columns }: GameBoardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {Array.from({ length: rows }, (_, row) => {
          return (
            <div className={styles.row} key={"gameBoard_row_" + String(row)}>
              {Array.from({ length: columns }, (_, column) => {
                return (
                  <div
                    onClick={() => {
                      console.log(
                        "Clicked on cell! Row: " +
                          (row + 1) +
                          ". Column: " +
                          (column + 1) +
                          "."
                      );
                    }}
                    className={styles.cell}
                    key={
                      "gameBoard_row_" +
                      String(row) +
                      "_column_" +
                      String(column)
                    }
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
