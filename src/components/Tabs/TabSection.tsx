interface ITabSectionProps {
  label: string;
  children: any;
}

const TabSection = ({ label, children }: ITabSectionProps) => ({ ...children });

export default TabSection;
