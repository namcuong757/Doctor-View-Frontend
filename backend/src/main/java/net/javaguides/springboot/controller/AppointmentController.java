package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Appointment;

import net.javaguides.springboot.repository.AppointmentRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class AppointmentController {
		 @Autowired
		private AppointmentRepository appointmentRepository;
		
		
		@GetMapping("/appointments")
		public List<Appointment> getAllAppointment(){
			return appointmentRepository.findAll();
		}
		@GetMapping("/appointments/{date}")
		public List<Appointment> getAllAppointmentByDate(@PathVariable String date){
			return appointmentRepository.findByDate(date);
		}
		
		
		@PostMapping("/appintments")
		public Appointment createAppointment(@RequestBody Appointment appointment) {
			return appointmentRepository.save(appointment);
		}
		
		
		@GetMapping("/appintments/{id}")
		public ResponseEntity<Appointment> getAppointmentById(@PathVariable Long id) {
			Appointment appointment = appointmentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Appointment not exist with id :" + id));
			return ResponseEntity.ok(appointment);
		}
		
		 
		
		@PutMapping("/appintments/{id}")
		public ResponseEntity<Appointment> updateAppointment(@PathVariable Long id, @RequestBody Appointment appointmentDetails){
			Appointment appointment = appointmentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Appointment not exist with id :" + id));
			appointment.setDoctor_id(appointmentDetails.getDoctor_id());
			appointment.setDoctor_name(appointmentDetails.getDoctor_name());
			appointment.setFee(appointmentDetails.getFee());
			appointment.setPerson_id(appointmentDetails.getPerson_id());
			appointment.setPerson_name(appointmentDetails.getPerson_name());
			
			appointment.setTime(appointmentDetails.getTime());
			appointment.setDate(appointmentDetails.getDate());
			
			
			Appointment updatedappointmentDetails = appointmentRepository.save(appointment);
			return ResponseEntity.ok(updatedappointmentDetails);
		}
		
		
		@DeleteMapping("/appintments/{id}")
		public String deleteAppointment(@PathVariable Long id){
			Appointment appointment = appointmentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Appointment not exist with id :" + id));
			
			appointmentRepository.delete(appointment);
			return "deleted";
		}
		
		
	


}
