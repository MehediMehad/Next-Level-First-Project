import express from 'express';
import { AcademicSemesterControllers } from './academic.semester.controller';
import validateRequest from '../../Middleware/validateRequest';
import { AcademicSemesterValidation } from './academic.semester.validation';
const router = express.Router();

router.post(
    '/create-academic-semester',
    validateRequest(
        AcademicSemesterValidation.createAcademicSemesterValidationSchema
    ),
    AcademicSemesterControllers.createAcademicSemester
);

export const AcademicSemesterRouters = router;