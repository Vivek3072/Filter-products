import { ReactNode, useState } from "react";
import "./FilterSelector.scss";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

interface Props {
  children: ReactNode
}

const MockFilterSelector: React.FC<Props> = ({ children }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="filter-selector">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {checked ? (
        <MdCheckBox className="checkbox" />
      ) : (
        <MdCheckBoxOutlineBlank className="checkbox" />
      )}
      {children}
    </div>
  );
};

export default MockFilterSelector;
