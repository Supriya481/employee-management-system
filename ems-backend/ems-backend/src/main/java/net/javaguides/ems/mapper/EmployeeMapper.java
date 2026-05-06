package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

public class EmployeeMapper {

    // Convert Employee entity → EmployeeDto
    public static EmployeeDto mapToEmployeeDto(Employee employee) {

        Long departmentId = null;

        // Null-safe access
        if (employee.getDepartment() != null) {
            departmentId = employee.getDepartment().getId();
        }

        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                departmentId   // USE THIS
        );
    }

    // Convert EmployeeDto → Employee entity
    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        Employee employee = new Employee();
        employee.setId(employeeDto.getId());
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        return employee;
    }
}
