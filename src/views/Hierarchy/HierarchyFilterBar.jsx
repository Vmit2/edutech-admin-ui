import React from "react";
import FilterBar from "../../components/FilterBar";
import TextInput from "../../components/TextInput/TextInput";
import SearchIcon from "@material-ui/icons/Search";

function HierarchyFilterBar({ value, onChange, onBlur }) {
  return (
    <FilterBar>
      <TextInput
        errorText=""
        name="name"
        placeholder="Search Distributer"
        type="string"
        onBlur={onBlur}
        onChange={onChange}
        endIcon={<SearchIcon />}
      />
    </FilterBar>
  );
}

HierarchyFilterBar.propTypes = {};

export default HierarchyFilterBar;
