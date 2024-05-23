interface Props {
  children: string;
  maxChar?: number;
}

const Expandible = ({ children, maxChar = 100 }: Props) => {
  return <div>{children}</div>;
};

export default Expandible;
