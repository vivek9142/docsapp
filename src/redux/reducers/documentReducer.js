import DocumentActions from '../actions/documentActions'; 
const initialState = {
    documents:[
        {
            id: '66fkn',
            title: 'Document Importance',
            desc: 'Documents containing all the required documents.It is required at each point of time'
          },
        {
            id: 'cvb9y',
            title: 'Read and Edit Pages intro',
            desc: 'Read and Edit functionality is implemented in these pages'
        }
    ]
};

const documentReducer = (state=initialState,action) => {
    switch(action.type) {
        case DocumentActions.CREATE_DOCUMENT:
            const docs = state.documents;
            docs.push(action.payload);
            return {documents:docs};

        case DocumentActions.UPDATE_DOCUMENT:
            const updatedData = state.documents.map(item => item.id === action.payload.document.id ? action.payload.document : item );
            return {documents: updatedData};

        case DocumentActions.DELETE_DOCUMENT:
            const updatedList = state.documents.filter(item => item.id !== action.payload.id);
            return {documents:updatedList};
        default:
            return state;
    }
}

export default documentReducer;