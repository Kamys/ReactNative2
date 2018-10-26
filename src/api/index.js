import { PointerType } from "../pointers/constants";

const faculties = [
    {id: 1, label: 'Faculties 1', type: PointerType.FACULTIES},
    {id: 2, label: 'Faculties 2', type: PointerType.FACULTIES},
    {id: 3, label: 'Faculties 3', type: PointerType.FACULTIES},
]

const specialties = {
    1: [
        {id: 1, label: 'Specialty 1.1', type: PointerType.SPECIALTIES},
        {id: 2, label: 'Specialty 1.2', type: PointerType.SPECIALTIES},
        {id: 3, label: 'Specialty 1.3', type: PointerType.SPECIALTIES},
        {id: 4, label: 'Specialty 1.4', type: PointerType.SPECIALTIES},
        {id: 5, label: 'Specialty 1.5', type: PointerType.SPECIALTIES},
        {id: 6, label: 'Specialty 1.6', type: PointerType.SPECIALTIES},
    ],
    2: [
        {id: 1, label: 'Specialty 2.1', type: PointerType.SPECIALTIES},
        {id: 2, label: 'Specialty 2.2', type: PointerType.SPECIALTIES},
        {id: 3, label: 'Specialty 2.3', type: PointerType.SPECIALTIES},
        {id: 4, label: 'Specialty 2.4', type: PointerType.SPECIALTIES},
        {id: 5, label: 'Specialty 2.5', type: PointerType.SPECIALTIES},
        {id: 6, label: 'Specialty 2.6', type: PointerType.SPECIALTIES},
    ],
    3: [
        {id: 1, label: 'Specialty 3.1', type: PointerType.SPECIALTIES},
        {id: 2, label: 'Specialty 3.2', type: PointerType.SPECIALTIES},
        {id: 3, label: 'Specialty 3.3', type: PointerType.SPECIALTIES},
        {id: 4, label: 'Specialty 3.4', type: PointerType.SPECIALTIES},
        {id: 5, label: 'Specialty 3.5', type: PointerType.SPECIALTIES},
        {id: 6, label: 'Specialty 3.6', type: PointerType.SPECIALTIES},
    ]
}

const getFaculties = () => faculties;
const getSpecialty = facultiesId => specialties[facultiesId];

export default {getFaculties, getSpecialty}