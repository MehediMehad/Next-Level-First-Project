import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRouter } from '../modules/user/user.route';
import { AcademicSemesterRouters } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRouters } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRouters } from '../modules/academicDepartment/academicDepartment.route';
import { CourseRoutes } from '../modules/Course/course.route';
import { FacultyRoutes } from '../modules/Faculty/faculty.route';
import { AdminRoutes } from '../modules/Admin/admin.route';

const router = Router();

const modulesRouter = [
    {
        path: '/users',
        route: UserRouter
    },
    {
        path: '/students',
        route: StudentRoutes
    },
    {
        path: '/faculties',
        route: FacultyRoutes
    },
    {
        path: '/admins',
        route: AdminRoutes
    },
    {
        path: '/academic-semesters',
        route: AcademicSemesterRouters
    },
    {
        path: '/academic-faculties',
        route: AcademicFacultyRouters
    },
    {
        path: '/academic-departments',
        route: AcademicDepartmentRouters
    },
    {
        path: '/courses',
        route: CourseRoutes
    }
];

modulesRouter.forEach((route) => router.use(route.path, route.route));

export default router;
