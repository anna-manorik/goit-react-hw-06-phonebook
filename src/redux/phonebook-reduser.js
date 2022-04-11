import { createStore } from 'redux';

const pbReduser = (state = {}, { type, payload }) => {
switch(type){
    case 'ADD_CONTACT':
        console.log('add contact', payload);
        break;

    case 'DELETE_CONTACT':
        console.log('delete contact', payload);
        break;

    default:
        return state;

}


};

const store = createStore(pbReduser);

export default store;


