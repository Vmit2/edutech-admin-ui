// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import React from "react";
import FilterBar from "../../../components/FilterBar";
import TextInput from "../../../components/TextInput/TextInput";

const useStyles = makeStyles((theme) => ({
  containerFilterBar: {
    marginTop: 30,
    marginBottom: 30,
  },
}));
function UsersFilterBar({ value, onChange, onBlur }) {
  const classes = useStyles();
  const classNames = clsx(classes.containerFilterBar);
  return (
    <div className={classNames}>
      <FilterBar>
        <TextInput
          errorText=""
          name="name"
          placeholder="Search Users"
          type="string"
          // hintText="vimit"
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          endIcon={<SearchIcon />}
        />
      </FilterBar>
    </div>
  );
}

UsersFilterBar.propTypes = {};

export default UsersFilterBar;
