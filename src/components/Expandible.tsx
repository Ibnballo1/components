import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const Expandible = ({ children, maxChar = 100 }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  const text = isExpand ? children : children.substring(0, maxChar);
  return (
    <div>
      {text}...{" "}
      <button onClick={() => setIsExpand(!isExpand)}>
        {isExpand ? "less" : "more"}
      </button>
    </div>
  );
};

export default Expandible;
