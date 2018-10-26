import { PointerType } from "../pointers/constants";

const faculties = [
    {id: 1, label: 'Faculties 1', type: PointerType.FACULTIES},
    {id: 2, label: 'Faculties 2', type: PointerType.FACULTIES},
    {id: 3, label: 'Faculties 3', type: PointerType.FACULTIES},
]

const specialty = {
    1: [
        {id: 1, label: 'Specialty 1.1', type: PointerType.SPECIALTIES},
        {id: 2, label: 'Specialty 1.2', type: PointerType.SPECIALTIES},
        {id: 3, label: 'Specialty 1.3', type: PointerType.SPECIALTIES},
    ],
    2: [
        {id: 1, label: 'Specialty 2.1', type: PointerType.SPECIALTIES},
        {id: 2, label: 'Specialty 2.2', type: PointerType.SPECIALTIES},
        {id: 3, label: 'Specialty 2.3', type: PointerType.SPECIALTIES},
    ],
    3: [
        {id: 1, label: 'Specialty 3.1', type: PointerType.SPECIALTIES},
        {id: 2, label: 'Specialty 3.2', type: PointerType.SPECIALTIES},
        {id: 3, label: 'Specialty 3.3', type: PointerType.SPECIALTIES},
    ]
}

const courses = {
    1: [
        {id: 1, label: 'Courses 1.1.1', type: PointerType.COURSES},
        {id: 2, label: 'Courses 1.2.2', type: PointerType.COURSES},
        {id: 3, label: 'Courses 1.3.3', type: PointerType.COURSES},
    ],
    2: [
        {id: 1, label: 'Courses 2.1.1', type: PointerType.COURSES},
        {id: 2, label: 'Courses 2.2.2', type: PointerType.COURSES},
        {id: 3, label: 'Courses 2.3.3', type: PointerType.COURSES},
    ],
    3: [
        {id: 1, label: 'Courses 3.1.1', type: PointerType.COURSES},
        {id: 2, label: 'Courses 3.2.2', type: PointerType.COURSES},
        {id: 3, label: 'Courses 3.3.3', type: PointerType.COURSES},
    ]
}

const getFaculties = () => faculties;
const getSpecialty = facultiesId => specialty[facultiesId];
const getCourses = specialtyId => courses[specialtyId];

export default {getFaculties, getSpecialty, getCourses}