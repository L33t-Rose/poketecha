import { writable } from 'svelte/store';

const alt = {identifier:'',ifNull:{}}

export default function localStorageStore(init=alt) {
    if (typeof init !== "object") {
        throw 'Object not provided'
    }
    
    let identifier = init['identifier'];

    if (!localStorage[identifier]) {
        localStorage.setItem(identifier, JSON.stringify(init['ifNull']));
    }
        

    const { subscribe, set, update } = writable(JSON.parse(localStorage[identifier]));
    

    return { identifier,subscribe, set, update }

}