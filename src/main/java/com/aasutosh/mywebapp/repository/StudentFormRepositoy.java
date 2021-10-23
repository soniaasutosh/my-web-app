package com.aasutosh.mywebapp.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.aasutosh.mywebapp.model.StudentForm;

public interface StudentFormRepositoy extends CrudRepository<StudentForm, Integer>  {

	//StudentForm findByStudentId(Integer studentId);
	
	Optional<StudentForm> findByStudentId(Integer studentId);

}
