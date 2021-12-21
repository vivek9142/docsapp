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
        },{
            id: '12y0r',
            title: 'Lorem',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
          },
          {
            id: 'l5qdq',
            title: 'lorem ipsum',
            desc: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          },
          {
            id: '5z93x',
            title: 'Where odes lorem came from?',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. '
          },
          {
            id: 'kseg7',
            title: 'Lorem para',
            desc: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" '
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