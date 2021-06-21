export const search = (term, node, nodeArray) => {
  let newArray = nodeArray;
  let newObj = null;
  const currentId = node.id;
  if (term === currentId) {
    newArray.push(node);
    const found = {
      id: currentId,
      isMatchedSelf: true,
      matchedSelfId: currentId,
      pathIds: [currentId],
      ...node,
    };
    return (newObj = found);
  } else if (Array.isArray(node.childs)) {
    node.childs.forEach((child) => {
      const childResult = search(term, child, newArray);
      if (
        childResult &&
        (childResult.isMatchedSelf || childResult.isMatchedChild)
      ) {
        return (newObj = currentId
          ? {
              id: currentId,
              selected: childResult.isMatchedSelf
                ? currentId
                : childResult.selected,
              isMatchedChild: true,
              matchedChild: childResult,
              pathIds: [currentId, ...childResult.pathIds],
              matchedSelfId: childResult.matchedSelfId,
            }
          : {
              ...childResult,
            });
      }
    });
  }
  return newObj;
};
