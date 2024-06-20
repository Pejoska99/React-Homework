import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  
  return <div className="mainContainer">{children}</div>;
};