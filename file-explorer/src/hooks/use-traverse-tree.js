const useTraverseTree = () => {
    function insertNode(tree, folderId, item, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            })
            return tree;
        }
        let lastestNode=[]
        lastestNode = tree.items.map((node) => {
            return insertNode(node, folderId, item, isFolder)
        })

        return {...tree,items:lastestNode}
    }

    const deleteNode = ()=>{};
    const updateNode = ()=>{};

    return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;