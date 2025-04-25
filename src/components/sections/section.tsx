interface SectionProps {
  children: React.ReactNode;
  title: string;
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col items-start gap-12">
      <p className="text-xs text-white-darkest tracking-widest uppercase">
        {title}
      </p>
      {children}
    </div>
  );
};

export default Section;
