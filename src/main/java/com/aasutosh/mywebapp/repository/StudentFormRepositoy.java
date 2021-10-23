package com.aasutosh.mywebapp.repository;

import org.springframework.data.repository.CrudRepository;

import com.aasutosh.mywebapp.model.StudentForm;

public interface StudentFormRepositoy extends CrudRepository<StudentForm, Integer>  {

}
