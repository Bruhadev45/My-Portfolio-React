
interface RenderModelProps {
  children: any;
  className?: string;
}

const Layout = ({ children, className }: RenderModelProps) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark 
    ${className}`}>
      {children}
    </div>
  );
}

export default Layout;