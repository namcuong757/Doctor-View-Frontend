package net.javaguides.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Account;
import net.javaguides.springboot.model.Appointment;
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
	List<Appointment> findByDate(String date);
}
