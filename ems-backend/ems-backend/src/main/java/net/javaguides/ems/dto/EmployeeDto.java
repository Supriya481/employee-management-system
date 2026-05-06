package net.javaguides.ems.dto;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto
{
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Long departmentId;
}
