# Employee Manager - Frontend

**This repository is frontend part of Employee Manager application.**\
Frontend part of Employee Manager application is integrated with [employee-manager_backend](https://github.com/saszotek/employee-manager_backend) repository. Application allows you to create a new account using register page or log in with an existing one. After logging in, user can manage registered employees. Access to management functions is based on assigned role of that account:
- Admin - delete, update, view employee details,
- Moderator - update, view employee details,
- User - view employee details.
Main page containing listed users includes server-side pagination to prevent overloading the page with content. Search button lets you filter users by surname to list desired employees. There is also possibility of deleting a user or updating its personal data. Input validation is made with [Yup library](https://github.com/jquense/yup).

## Live version

**Live demo:** *offline*

## Technologies

- Vue
- Vue Router
- Axios
- Yup validation
- CSS
