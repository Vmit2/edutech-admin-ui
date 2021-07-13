export function findTreeNode(id_user, node ){
    var reduce = [].reduce;
    function runner(result, node){
        if(result || !node) return result;
        return node.id_user === id_user && node || //is this the proper node?
            runner(null, node.childs) || //process this nodes childs
            reduce.call(Object(node), runner, result);  //maybe this is some ArrayLike Structure
    }
    return runner(null, node);
}

// var target = findTreeNode("52126f7d", objects);
// target.childs = childs;