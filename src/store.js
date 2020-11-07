import localStore from './utils/LocalStorageStore';

export const store = localStore({
    identifier: 'gun',
    ifNull: {
        'teams': [],
    }
})

