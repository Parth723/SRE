import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateStudentDto {
    
    @IsString({ message: "First name must be a string" })
    @IsNotEmpty({ message: "First name is required" })
    firstName: string;

    @IsString({ message: "Last name must be a string" })
    @IsNotEmpty({ message: "Last name is required" })
    lastName: string;

    @IsString({ message: "Class must be a string" })
    @IsNotEmpty({ message: "Class is required" })
    class: string;

    @IsString({ message: "Division name must be a string" })
    @IsNotEmpty({ message: "Division name is required" })
    division: string;

    @IsNumber( {}, {message: "Age must be a number" })
    @IsNotEmpty({ message: "Age is required" })
    @IsPositive({ message: "Enter a positive number"})
    age: number;
}