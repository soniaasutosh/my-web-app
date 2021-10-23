package com.aasutosh.mywebapp.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping(value = "/student-form/{studentId}")
	private ResponseEntity<?> getStudentFromData(@PathVariable("studentId") Integer studentId) {
		logger.info("called getStudentFromData ::: "+studentId);
		
		//return new ResponseEntity<>(studentFormRepositoy.findByStudentId(studentId), HttpStatus.OK);

		return studentFormRepositoy
					.findByStudentId(studentId)
					.map(d->new ResponseEntity<>(d, HttpStatus.OK))
					.orElse(new ResponseEntity("Wrong id !!!!", HttpStatus.NOT_FOUND));
	}
	
	@PutMapping(value = "/student-form/{id}")
	private ResponseEntity<?> updateStudentFromData(@PathVariable("id") Integer id,@RequestBody StudentForm form ) {
		logger.info("called updateStudentFromData ::: "+id);
		return studentFormRepositoy
					.findById(id).map(data -> new ResponseEntity<>(studentFormRepositoy.save(form), HttpStatus.OK))
					.orElse(new ResponseEntity("Wrong id !!!!", HttpStatus.NOT_FOUND));
	}
}
