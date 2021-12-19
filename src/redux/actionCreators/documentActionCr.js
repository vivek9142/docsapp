import DocumentActions from '../actions/documentActions'; 

const addDocument = (doc) => {
    const id = Math.random().toString(36).substr(2, 5);
    return (
        {type:DocumentActions.CREATE_DOCUMENT,payload:{id, ...doc}}
        );
};

const updateDocument = (document) => {
    return ({type:DocumentActions.UPDATE_DOCUMENT,payload:{document:document}});
};

const deleteDocument = (id) => {
    return ({type:DocumentActions.DELETE_DOCUMENT,payload:{id}});
}

export {addDocument,updateDocument,deleteDocument};