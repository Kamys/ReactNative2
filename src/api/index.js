const faculties = [
    {id: 1, label: 'Faculties 1'},
    {id: 2, label: 'Faculties 2'},
    {id: 3, label: 'Faculties 3'},
]

const specialties = {
    1: [
        {id: 1, label: 'Specialties 1.1'},
        {id: 2, label: 'Specialties 1.2'},
        {id: 3, label: 'Specialties 1.3'},
        {id: 4, label: 'Specialties 1.4'},
        {id: 5, label: 'Specialties 1.5'},
        {id: 6, label: 'Specialties 1.6'},
    ],
    2: [
        {id: 1, label: 'Specialties 2.1'},
        {id: 2, label: 'Specialties 2.2'},
        {id: 3, label: 'Specialties 2.3'},
        {id: 4, label: 'Specialties 2.4'},
        {id: 5, label: 'Specialties 2.5'},
        {id: 6, label: 'Specialties 2.6'},
    ],
    3: [
        {id: 1, label: 'Specialties 3.1'},
        {id: 2, label: 'Specialties 3.2'},
        {id: 3, label: 'Specialties 3.3'},
        {id: 4, label: 'Specialties 3.4'},
        {id: 5, label: 'Specialties 3.5'},
        {id: 6, label: 'Specialties 3.6'},
    ]
}

const getFaculties = () => faculties;
const getSpecialties = facultiesId => specialties[facultiesId];

export default {getFaculties, getSpecialties}