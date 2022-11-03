import TableHeader from "../../shared/tables/TableHeader";
import styles from "./ScoreList.module.css";

interface Props {
  scores: Record<string, number[]>;
}

const mapScores = (scores: Props["scores"]): number[][] => {
  const scoreArr = Object.values(scores);
  const scoresQty = scoreArr[0].length;
  const playersQty = scoreArr.length;
  console.log(scoreArr, scoresQty, playersQty);
  let arr: number[][] = [[]];
  try {
    for (let i = 0; i < scoresQty; i++) {
      arr[i] = [];
      for (let j = 0; j < playersQty; j++) {
        // scoreArr[j] es el score del primer jugador, como son 4, i va de 0 a 3
        arr[i][j] = scoreArr[j][i];
      }
    }
    return arr;
  } catch (ex) {
    console.log(ex);
    return [[]];
  }
};

const ScoreList: React.FC<Props> = ({ scores }) => {
  const mappedScores = mapScores(scores);
  return (
    <div className={styles.container}>
      <div>
        <h1>Players Scores</h1>
      </div>
      <table>
        <tbody>
          <tr>
            {Object.keys(scores || {}).map((key) => {
              return <TableHeader label={key} key={key} />;
            })}
          </tr>
          {mappedScores.map((values, idx) => {
            return (
              <tr key={idx}>
                {values.map((finalValue, idx) => (
                  <td key={idx}>{finalValue}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreList;
