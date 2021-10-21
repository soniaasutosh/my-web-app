package com.aasutosh.mywebapp.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class HealthCheckController {

	@GetMapping(value = "ping")
	public String ping() {
		return "ok ! Application is up.";
	}

	@GetMapping(value = "hello")
	public String hello(@RequestParam(value = "name" ,required = false) String nameParam,
						@RequestParam(value = "extra", required = false) String extra) {
		return "Hello " + ((nameParam == null || nameParam.isEmpty()) ? "buddy" : nameParam) + " !" + " :::: "+extra;
	}
	
	
	@PostMapping(value = "ping")
	public String ping(@RequestBody Object data) {
		return "ok ! Application is up. "+data;
	}

}
