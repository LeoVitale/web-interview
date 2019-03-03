import { API_ENDPOINT } from '../config';

export const users = (params = '') => fetch(`${API_ENDPOINT}/users${params}`).then(res => res.json());

export const appointments = (params = '') => fetch(`${API_ENDPOINT}/appointments${params}`).then(res => res.json());

export const availableSlots = (params = '') => fetch(`${API_ENDPOINT}/availableSlots${params}`).then(res => res.json());

export const familyMembers = (params = '') => fetch(`${API_ENDPOINT}/family-members${params}`).then(res => res.json());
