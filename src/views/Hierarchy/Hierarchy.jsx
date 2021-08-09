import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FilledCircleCount from "../../components/FilledCircleCount/FilledCircleCount";
import ListSummaryBar from "../../components/ListSummaryBar/ListSummaryBar";
import MLMTree from "../../components/MLMTree";
import {
  useChildDistributers,
  useRootDistributers,
} from "../../hooks/api/useDistributersRootList";
import { useTreeState } from "../../hooks/redux/useTreeState";
import { search } from "../../hooks/useSearchDist";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";
import HierarchyFilterBar from "./HierarchyFilterBar";
import { urlParamsToApi } from "./urlParamsToApi";
import { useUrlParams } from "./useUrlParams";

const Hierarchy = ({ ...props }) => {
  const title = "Distributers Hierarchy";
  const [searchValue, setValue] = useState("initial text");
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);
  const [found, setFound] = useState(-1);
  const dispatch = useDispatch();
  const { tree } = useTreeState();
  useRootDistributers();

  const { urlParams, setUrlParams } = useUrlParams();
  useChildDistributers(urlParamsToApi(urlParams));

  const setUrlParam = (key, value) => {
    if (urlParams[key] === value) {
      return;
    }

    setUrlParams({
      [key]: value,
    });
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
    setFound("");
  };
  const handleSelect = (event, nodeIds) => {
    setUrlParam("id", nodeIds);
    setSelected(nodeIds);
    setFound("");
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    const nodeTree = {
      childs: tree,
    };
    let arr = [];
    const foundPath = search(searchValue, nodeTree, arr);
    console.log("foundPath ", foundPath);
    if (foundPath && foundPath.pathIds) {
      setSelected(foundPath.selected);
      setFound(foundPath.matchedSelfId);
      setExpanded(foundPath.pathIds);
    } else if (!foundPath) {
      setFound("");
    }
  };

  return (
    <div className="">
      <DashboardPage documentTitle={title} pageTitle={title}>
        <HierarchyFilterBar
          value={searchValue}
          onBlur={onBlur}
          onChange={onChange}
        />
        <ListSummaryBar
          count={1}
          legend={
            <>
              <FilledCircleCount
                label="Distributer"
                size="small"
                variant="blue"
              />
              <FilledCircleCount label="User" size="small" variant="red" />
            </>
          }
          totalCount={1}
        />
        <MLMTree
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
          expanded={expanded}
          selected={selected}
          found={found}
        />
      </DashboardPage>
    </div>
  );
};

export default Hierarchy;
