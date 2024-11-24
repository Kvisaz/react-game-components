import styles from "./GameBoard.module.css";

interface GameBoardProps {
  rows: number;
  columns: number;
}

interface GameBoardCell {
  row: number;
  column: number;
  clickHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const GameBoardCell = ({ row, column, clickHandler }: GameBoardCell) => (
  <div
    data-row={row + 1}
    data-column={column + 1}
    onClick={clickHandler}
    className={styles.cell}
  />
);

export const GameBoard = ({ rows, columns }: GameBoardProps) => {
  const clickOnCellHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const row = target.getAttribute("data-row");
    const column = target.getAttribute("data-column");
    console.log(`Clicked on cell! Row: ${row}. Column: ${column}.`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {Array.from({ length: rows }, (_, row) => (
          <div className={styles.row} key={`gameBoard_row_${row}`}>
            {Array.from({ length: columns }, (_, column) => (
              <GameBoardCell
                row={row}
                column={column}
                clickHandler={clickOnCellHandler}
                key={`gameBoard_row_${row}_column_${column}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
