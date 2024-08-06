import {Text} from "../Text/index";

interface ArticleProps {
  hText: string;
  list: Array<string>;
}

export const ArticleTest = ({ hText, list }: ArticleProps) => {
  return (
    <article>
      <h1><Text text={hText} /></h1>
      <ol>
        {list.map((text, i) => (
          <li key={"ArticleTest" + i}><Text text={text} /></li>
        ))}
      </ol>
    </article>
  );
};