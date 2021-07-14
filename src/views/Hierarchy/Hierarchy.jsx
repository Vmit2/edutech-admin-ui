import React, { useState } from "react";
import FilledCircleCount from "../../components/FilledCircleCount/FilledCircleCount";
import ListSummaryBar from "../../components/ListSummaryBar/ListSummaryBar";
import MLMTree from "../../components/MLMTree";
import { useDistributersRootList } from "../../hooks/api/useDistributersRootList";
import { search } from "../../hooks/useSearchDist";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";
import HierarchyFilterBar from "./HierarchyFilterBar";
import { urlParamsToApi } from "./urlParamsToApi";
import { useUrlParams } from "./useUrlParams";
import ListPagination from "../../components/ListPagination";
import { parsePage, parsePageSize } from "../../utils/url/parsePage";
import { urlParamsToApiForChildTree } from "./ChildTree/urlParamsToApiForChildTree";
import { useUrlParamsForChildTree } from "./ChildTree/useUrlParamsForChildTree";
import { useDistributersChildList } from "../../hooks/api/useDistributersChildList";

const users = [
  {
    id: "1",
    salutation: "Mr.",
    first_name: "Vimit",
    middle_name: "Vilas",
    last_name: "Athawale",
    email: "vimitrocks@gmail.com",
    referral_code: "QWERTY1234567",
    childs: [
      {
        id: "11",
        salutation: "Mr.",
        first_name: "Vikas",
        middle_name: "Kumar",
        last_name: "Gupta",
        email: "vikas@gmail.com",
        referral_code: "QWERTY1234568",
        childs: [
          {
            id: "111",
            salutation: "Mr.",
            first_name: "Vimit",
            middle_name: "Vilas",
            last_name: "Athawale",
            email: "vimitrocks@gmail.com",
            referral_code: "QWERTY1234567",
            childs: [
              {
                id: "1111",
                salutation: "Mr.",
                first_name: "Vikas",
                middle_name: "Kumar",
                last_name: "Gupta",
                email: "vikas@gmail.com",
                referral_code: "QWERTY1234568",
                childs: [],
              },
              {
                id: "1112",
                salutation: "Mr.",
                first_name: "Vishal",
                middle_name: "Kumar",
                last_name: "Gupta",
                email: "vikas@gmail.com",
                referral_code: "QWERTY1234569",
                childs: [],
              },
              {
                id: "1113",
                salutation: "Mr.",
                first_name: "Vikas",
                middle_name: "Kumar",
                last_name: "Gupta",
                email: "vikas@gmail.com",
                referral_code: "QWERTY1234561",
                childs: [],
              },
            ],
          },
        ],
      },
      {
        id: "12",
        salutation: "Mr.",
        first_name: "Vishal",
        middle_name: "Kumar",
        last_name: "Gupta",
        email: "vikas@gmail.com",
        referral_code: "QWERTY1234569",
        childs: [
          {
            id: "121",
            salutation: "Mr.",
            first_name: "Vikas",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY1234568",
            childs: [],
          },
          {
            id: "122",
            salutation: "Mr.",
            first_name: "Vishal",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY1234569",
            childs: [],
          },
          {
            id: "123",
            salutation: "Mr.",
            first_name: "Vikas",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY1234561",
            childs: [],
          },
        ],
      },
      {
        id: "13",
        salutation: "Mr.",
        first_name: "Vikas",
        middle_name: "Kumar",
        last_name: "Gupta",
        email: "vikas@gmail.com",
        referral_code: "QWERTY1234561",
        childs: [
          {
            id: "131",
            salutation: "Mr.",
            first_name: "Vikas",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY1234568",
            childs: [],
          },
          {
            id: "132",
            salutation: "Mr.",
            first_name: "Vishal",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY1234569",
            childs: [],
          },
          {
            id: "133",
            salutation: "Mr.",
            first_name: "Vikas",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY1234561",
            childs: [],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    salutation: "Mr.",
    first_name: "Mayur",
    middle_name: " ",
    last_name: "Kharat",
    email: "mayur@gmail.com",
    referral_code: "QWERTY2234567",
    childs: [
      {
        id: "21",
        salutation: "Mr.",
        first_name: "Vikas",
        middle_name: "Kumar",
        last_name: "Gupta",
        email: "vikas@gmail.com",
        referral_code: "QWERTY2234568",
        childs: [
          {
            id: "211",
            salutation: "Mr.",
            first_name: "Vimit",
            middle_name: "Vilas",
            last_name: "Athawale",
            email: "vimitrocks@gmail.com",
            referral_code: "QWERTY2234567",
            childs: [
              {
                id: "2111",
                salutation: "Mr.",
                first_name: "Vikas",
                middle_name: "Kumar",
                last_name: "Gupta",
                email: "vikas@gmail.com",
                referral_code: "QWERTY2234568",
                childs: [],
              },
              {
                id: "2112",
                salutation: "Mr.",
                first_name: "Vishal",
                middle_name: "Kumar",
                last_name: "Gupta",
                email: "vikas@gmail.com",
                referral_code: "QWERTY2234569",
                childs: [],
              },
              {
                id: "2113",
                salutation: "Mr.",
                first_name: "Vikas",
                middle_name: "Kumar",
                last_name: "Gupta",
                email: "vikas@gmail.com",
                referral_code: "QWERTY2234562",
                childs: [],
              },
            ],
          },
        ],
      },
      {
        id: "22",
        salutation: "Mr.",
        first_name: "Vishal",
        middle_name: "Kumar",
        last_name: "Gupta",
        email: "vikas@gmail.com",
        referral_code: "QWERTY2234569",
        childs: [
          {
            id: "221",
            salutation: "Mr.",
            first_name: "Vikas",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY2234568",
            childs: [],
          },
          {
            id: "222",
            salutation: "Mr.",
            first_name: "Vishal",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY2234569",
            childs: [],
          },
          {
            id: "223",
            salutation: "Mr.",
            first_name: "Vikas",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY2234562",
            childs: [],
          },
        ],
      },
      {
        id: "23",
        salutation: "Mr.",
        first_name: "Vikas",
        middle_name: "Kumar",
        last_name: "Gupta",
        email: "vikas@gmail.com",
        referral_code: "QWERTY2234562",
        childs: [
          {
            id: "231",
            salutation: "Mr.",
            first_name: "Vikas",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY2234568",
            childs: [],
          },
          {
            id: "232",
            salutation: "Mr.",
            first_name: "Vishal",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY2234569",
            childs: [],
          },
          {
            id: "233",
            salutation: "Mr.",
            first_name: "Vikas",
            middle_name: "Kumar",
            last_name: "Gupta",
            email: "vikas@gmail.com",
            referral_code: "QWERTY2234562",
            childs: [],
          },
        ],
      },
    ],
  },
];

const Hierarchy = ({ ...props }) => {
  const title = "Distributers Hierarchy";
  const [searchValue, setValue] = useState("initial text");
  const [expanded, setExpanded] = useState(['26']);
  const [selected, setSelected] = useState([]);
  const [found, setFound] = useState(-1);

  // const distributersHierarchy = useHierarchy({
  //   params: urlParamsToApi(urlParams),
  // });
  // const { urlParams, setUrlParam } = useUrlParams();

  const { urlParams, setUrlParam } = useUrlParams({
    parseUrlParams: (searchParams) => ({
      page: parsePage(searchParams),
      size: parsePageSize(searchParams),
    }),
  });

  const distributersDetails = useDistributersRootList({
    params: urlParamsToApi(urlParams),
  });

  const handleToggle = (event, nodeIds) => {
    useUrlParamsForChildTree.setUrlParamForChild("id", nodeIds[0]);
    setExpanded(nodeIds);
    setFound("");
    // if(nodeIds[0] !== 26){
      // setUrlParamForChild("id", nodeIds[0]);
    // }
  };
  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    setFound("");
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    const nodeTree = {
      childs: users,
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
  setUrlParam("size", 10);
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
          totalCount={1} //{distributersDetails.count}
        />
        <MLMTree
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
          expanded={expanded}
          selected={selected}
          // treeItems={users}
          treeItems={distributersDetails.data ? distributersDetails.data : []}
          first_item = {distributersDetails.data ? distributersDetails.data : []}
          found={found}
          // showChild = {{"id":expanded[0],"childs":childTreeList.data}}
        />

        <ListPagination
          currentPage={1} //{urlParams.page}
          totalPages={1} //{distributersDetails.totalPages}
          onChange={(_, newPage) => setUrlParam("page", newPage)}
        />
      </DashboardPage>
    </div>
  );
};

export default Hierarchy;
