import { useEffect, useState } from "react";

export function useDesktopFilter({ value, onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  // This is a controlled component, keep the selected values up-to-date with parent state.
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleCancel = () => {
    setIsOpen(false);
    setSelectedValue(value);
  };

  const handleApply = () => {
    setIsOpen(false);
    setSelectedValue(selectedValue);
    onApply(selectedValue);
  };

  return {
    isOpen,
    selectedValue,
    handleCancel,
    handleApply,
    openMenu: () => setIsOpen(true),
    updateSelectedValue: (newValue) => {
      // setSelectedValue(newValue);
      onApply(newValue);
    },
  };
}
