package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "accounts")
public class Account {
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "id")
	    private long id;

	    @Column(name = "first_name")
	    private String firstName;

	    @Column(name = "last_name")
	    private String lastName;

	    @Column(name = "email_id")
	    private String emailId;

	    @Column(name = "phone")
	    private String phone;

	    @Column(name = "password")
	    private String password;

	    @Column(name = "gender")
	    private String gender;

	    @Column(name = "age")
	    private int age;

	    @Column(name = "birthday")
	    private String birthday;

	    @Column(name = "details")
	    private String details;

	    @Column(name = "type")
	    private String type;
	/****************************************************/
		@Column(name = "subtype")
		private String subtype;
	/****************************************************/

	    public Account() {
	        // Default constructor required by JPA
	    }

	/****************************************************/
	    public Account(String firstName, String lastName, String emailId, String phone, String password,
	                String gender, int age, String birthday, String details, String type, String subtype)
		{
	        this.firstName = firstName;
	        this.lastName = lastName;
	        this.emailId = emailId;
	        this.phone = phone;
	        this.password = password;
	        this.gender = gender;
	        this.age = age;
	        this.birthday = birthday;
	        this.details = details;
	        this.type = type;
			this.subtype = subtype;
	    }
	/****************************************************/

	    // Getters and setters (including the ID getter)
	    
	    public long getId() {
	        return id;
	    }

	    public void setId(long id) {
	        this.id = id;
	    }

	    public String getFirstName() {
	        return firstName;
	    }

	    public void setFirstName(String firstName) {
	        this.firstName = firstName;
	    }

	    public String getLastName() {
	        return lastName;
	    }

	    public void setLastName(String lastName) {
	        this.lastName = lastName;
	    }

	    public String getEmailId() {
	        return emailId;
	    }

	    public void setEmailId(String emailId) {
	        this.emailId = emailId;
	    }

	    public String getPhone() {
	        return phone;
	    }

	    public void setPhone(String phone) {
	        this.phone = phone;
	    }

	    public String getPassword() {
	        return password;
	    }

	    public void setPassword(String password) {
	        this.password = password;
	    }

	    public String getGender() {
	        return gender;
	    }

	    public void setGender(String gender) {
	        this.gender = gender;
	    }

	    public int getAge() {
	        return age;
	    }

	    public void setAge(int age) {
	        this.age = age;
	    }

	    public String getBirthday() {
	        return birthday;
	    }

	    public void setBirthday(String birthday) {
	        this.birthday = birthday;
	    }

	    public String getDetails() {
	        return details;
	    }

	    public void setDetails(String details) {
	        this.details = details;
	    }

	    public String getType() {
	        return type;
	    }

	    public void setType(String type) {
	        this.type = type;
	    }

	/****************************************************/
		public String getSubtype() {
			return subtype;
		}

		public void setSubtype(String subtype) {
			this.subtype = subtype;
		}
	/****************************************************/
}
