import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { ActiveStatus } from "../../../config/constants";
import { getUserStatusLabel } from "../../../utils/format/getUserStatusLabel";
import DesktopFilterMenu from "../../Filters/DesktopFilterMenu";
import { useDesktopFilter } from "../useDesktopFilter";
import StatusFilterOptions from "./StatusFilterOptions";

function DesktopStatusFilter({ value, onApply }) {
  const activeStatusName = useMemo(
    () => (value !== ActiveStatus.BOTH ? getUserStatusLabel(value) : ""), // intentionally ignore 'both' value
    [value]
  );

  const {
    isOpen,
    selectedValue,
    handleCancel,
    handleApply,
    openMenu,
    updateSelectedValue,
  } = useDesktopFilter({
    value,
    onApply: (newValues) => onApply(newValues),
  });
  return (
    <>
      <DesktopFilterMenu
        title="Status"
        onApply={(newValues) => handleApply(newValues[0])}
        onCancel={handleCancel}
      >
        <StatusFilterOptions
          selectedKey={selectedValue}
          onChange={updateSelectedValue}
        />
      </DesktopFilterMenu>
    </>
  );
}

DesktopStatusFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onApply: PropTypes.func.isRequired,
};

export default DesktopStatusFilter;
