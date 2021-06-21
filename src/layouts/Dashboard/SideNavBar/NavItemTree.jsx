import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import React from "react";
import { matchPath, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import useNavItemGroups from "./useNavItemGroups";

function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth;

  if (item.children) {
    const match = matchPath({ path: item.href }, pathname);
    // const isOpen = !!match;

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.children,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function NavItemTree() {
  const location = useLocation();
  const { navItemGroups } = useNavItemGroups();
  return (
    <>
      {navItemGroups.map((group) => (
        <List
          key={group.key}
          subheader={
            <ListSubheader disableGutters disableSticky>
              {group.subheader}
            </ListSubheader>
          }
        >
          {renderNavItems({
            items: group.children,
            pathname: location.pathname,
          })}
        </List>
      ))}
    </>
  );
}

export default NavItemTree;
