import { useEffect, useState } from "react";

export function useDesktopArrayFilter({ value, onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState(() => [...value]);

  // This is a controlled component, keep the selected values up-to-date with parent state.
  useEffect(() => {
    setSelectedValues([...value]);
  }, [value]);

  const handleCancel = () => {
    setIsOpen(false);
    setSelectedValues([...value]);
  };

  const handleApply = () => {
    const newValues = [...selectedValues];

    setIsOpen(false);
    setSelectedValues(newValues);

    onApply(newValues);
  };

  const handleClear = () => {
    setSelectedValues([]);
  };

  return {
    isOpen,
    selectedValues,
    handleCancel,
    handleApply,
    handleClear,
    openMenu: () => setIsOpen(true),
    updateSelectedValues: (newValues) => setSelectedValues(newValues),
  };
}
