package com.aasutosh.mywebapp.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aasutosh.mywebapp.model.StudentForm;
import com.aasutosh.mywebapp.repository.StudentFormRepositoy;

@RestController
public class StudenFromController {
	
	Logger logger = LoggerFactory.getLogger(StudenFromController.class);
	
	@Autowired
	private StudentFormRepositoy studentFormRepositoy;
	
	@PostMapping(value = "/student-form")
	private void saveStudentFrom(@RequestBody StudentForm form ) {
		logger.info("called saveStudentFrom ::: "+ form);
		
		studentFormRepositoy.save(form);

	}
	
	@GetMapping(value = "/student-form")
	private ResponseEntity<?> getStudentFromData() {
		logger.info("called getStudentFromData ::: ");
		
		return new ResponseEntity<>(studentFormRepositoy.findAll(), HttpStatus.OK);

	}
}
