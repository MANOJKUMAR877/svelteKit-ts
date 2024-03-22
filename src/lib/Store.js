import { writable } from 'svelte/store';

// Initial data
const initialData = [
    { id: 1, text: 'Manojkumar' },
    { id: 2, text: 'Akhil' },
    { id: 3, text: 'Hari' }
];

// Create a writable store
export const dataStore = writable(initialData);


