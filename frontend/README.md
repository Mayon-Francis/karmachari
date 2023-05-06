# Karmachari Job Portal

### [Backend Repo](https://github.com/Techlance-io/karmachari-backend)

## Getting Started

### Make sure you run the backend server first.

```bash
git clone <url of your forked repo>
cd karmachari
npm install
npm run dev
```

## Routes

- `/` - Home
- `/grievances` - Grievances

### Student

- `/student/register` - Student Registration
- `/student/register/status` - Student Registration Status
- `/student` - Student Login
- `/student/dashboard` - Student Dashboard (Showing All Jobs By COmpanies and Profile Details) 

### School

- `/school/register` - School Registration
- `/school/login` - School Login 
- `/school/dashboard` - School Dashboard (Showing All Jobs By Companies and Applications for Each Job)
- `/school/dashboard/students` - School Students (Showing All Students)

### Company

- `/company/register` - Company Registration
- `/company/login` - Company Login
- `/company/dashboard` - Company Dashboard (Showing All Jobs By a Company and Applications for Each Job)

### Commission

- `/commission/register` - Commission Registration
- `/commission/login` - Commission Login
- `/commission/dashboard` - Commission Dashboard (Showing List of All Jobs and Selected Students)
- `/commission/dashboard/schools` - Commission Dashboard (Showing List of All Schools)
- `/commission/dashboard/companies` - Commission Dashboard (Showing List of All Companies)

### Admin

- `/admin/login` - Admin Login 
- `/admin/dashboard` - Admin Dashboard (Showing List of All Jobs and Selected Students)
- `/admin/dashboard/students` - Admin Dashboard (Showing List of All Students)
- `/admin/dashboard/commissioners` - Admin Dashboard (Showing List of All Commissioners)
- `/admin/dashboard/schools` - Admin Dashboard (Showing List of All Schools)
- `/admin/dashboard/companies` - Admin Dashboard (Showing List of All Companies)
