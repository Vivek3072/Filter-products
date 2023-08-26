import { ReactNode } from "react";
import "./FilterSelector.scss";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const FilterSelector = ({
  children,
  checked,
  handleChange,
}: {
  children: ReactNode;
  checked: boolean;
  handleChange: () => void;
}) => {
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

export default FilterSelector;
