package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import net.javaguides.springboot.model.Account;
import net.javaguides.springboot.repository.AccountRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class AccountController {

	@Autowired
	private AccountRepository accountRepository;
	
	
	@GetMapping("/accounts")
	public List<Account> getAllaccounts(){
		return accountRepository.findAll();
	}
	@GetMapping("/accounts/doctors")
	public List<Account> getAllDoctoraccounts(){
		String doctorType = "Doctor";
        return accountRepository.findByType(doctorType);
	}	
	
	
	@PostMapping("/accounts")
	public Account createaccount(@RequestBody Account account) {
		return accountRepository.save(account);
	}
	
	
	@GetMapping("/accounts/{id}")
	public ResponseEntity<Account> getaccountById(@PathVariable Long id)
	{
		Account account = accountRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("account not exist with id :" + id));
		return ResponseEntity.ok(account);
	}
	@GetMapping("/accounts/{name}")
	public ResponseEntity<Account> getaccountByName(@PathVariable String name)
	{
		Account account = accountRepository.findByName(name);
		if(account != null)
		{
			return ResponseEntity.ok(account);
		}
		else
		{
			throw new ResourceNotFoundException("Account not found with name " + name);
		}
		
	}
	@PutMapping("/accounts/{id}")
	public ResponseEntity<Account> updateaccount(@PathVariable Long id, @RequestBody Account accountDetails){
		Account account = accountRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("account not exist with id :" + id));
		
		account.setName(accountDetails.getName());
		account.setEmailId(accountDetails.getEmailId());
		
		Account updatedaccount = accountRepository.save(account);
		return ResponseEntity.ok(updatedaccount);
	}

	@DeleteMapping("/accounts/{id}")
	public String deleteaccount(@PathVariable Long id){
		Account account = accountRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("account not exist with id :" + id));
		
		accountRepository.delete(account);
		return "deleted";
	}





	@PostMapping("/accounts/login")
	public ResponseEntity<Account> login(String email, String password)
	{
		System.out.println(email + " " + password);
		List<Account> accountList = accountRepository.findByEmailIdAndPassword(email,password);
		System.out.println(accountList.size());
		if(accountList.size() != 1)
		{
			return ResponseEntity.ok(null);
		}
		else
		{
			return ResponseEntity.ok(accountList.get(0));
		}

	}
	
	
}
