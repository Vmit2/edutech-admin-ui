import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FilledCircleCount from "../../components/FilledCircleCount/FilledCircleCount";
import ListSummaryBar from "../../components/ListSummaryBar/ListSummaryBar";
import MLMTree from "../../components/MLMTree";
import {
  useChildDistributers,
  useRootDistributers
} from "../../hooks/api/useDistributersRootList";
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
    // if (expanded && expanded.includes(nodeIds)) {
    //   const temp = expanded.filter((id) => id !== nodeIds);
    //   setExpanded(temp);
    //   dispatch(expandTreeNode(temp));
    // } else {
    //   let temp = [nodeIds, ...expanded];
    //   setExpanded(temp);
    //   dispatch(expandTreeNode(temp));
    // }
    setExpanded(nodeIds);
    setFound("");
    // if(nodeIds[0] !== 26){
      // setUrlParamForChild("id", nodeIds[0]);
    // }
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
      // childs: users,
    };
    let arr = [];
    const foundPath = search(searchValue, nodeTree, arr);
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
          count={1} //{distributersDetails.currentPage}
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

        {/* <ListPagination
          currentPage={1} //{urlParams.page}
          totalPages={1} //{distributersDetails.totalPages}
          // onChange={(_, newPage) => setUrlParam("page", newPage)}
        /> */}
      </DashboardPage>
    </div>
  );
};

export default Hierarchy;
