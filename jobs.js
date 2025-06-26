const jobs = [
  {
    "id": 1,
    "title": "Marketing Executive 1",
    "company": "Company 1 Pvt Ltd",
    "location": "City 2",
    "type": "Part Time",
    "salary": "31000 INR/month",
    "category": "Marketing",
    "description": "This is a detailed description for job position 1. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 2 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 2,
    "title": "Financial Analyst 2",
    "company": "Company 2 Pvt Ltd",
    "location": "City 3",
    "type": "Full Time",
    "salary": "32000 INR/month",
    "category": "Finance",
    "description": "This is a detailed description for job position 2. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 3 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 3,
    "title": "Software Engineer 3",
    "company": "Company 3 Pvt Ltd",
    "location": "City 4",
    "type": "Part Time",
    "salary": "33000 INR/month",
    "category": "Technology",
    "description": "This is a detailed description for job position 3. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 4 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 4,
    "title": "Marketing Executive 4",
    "company": "Company 4 Pvt Ltd",
    "location": "City 5",
    "type": "Full Time",
    "salary": "34000 INR/month",
    "category": "Marketing",
    "description": "This is a detailed description for job position 4. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 5 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 5,
    "title": "Financial Analyst 5",
    "company": "Company 5 Pvt Ltd",
    "location": "City 1",
    "type": "Part Time",
    "salary": "35000 INR/month",
    "category": "Finance",
    "description": "This is a detailed description for job position 5. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 1 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 6,
    "title": "Software Engineer 6",
    "company": "Company 6 Pvt Ltd",
    "location": "City 2",
    "type": "Full Time",
    "salary": "36000 INR/month",
    "category": "Technology",
    "description": "This is a detailed description for job position 6. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 2 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 7,
    "title": "Marketing Executive 7",
    "company": "Company 7 Pvt Ltd",
    "location": "City 3",
    "type": "Part Time",
    "salary": "37000 INR/month",
    "category": "Marketing",
    "description": "This is a detailed description for job position 7. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 3 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 8,
    "title": "Financial Analyst 8",
    "company": "Company 8 Pvt Ltd",
    "location": "City 4",
    "type": "Full Time",
    "salary": "38000 INR/month",
    "category": "Finance",
    "description": "This is a detailed description for job position 8. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 4 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 9,
    "title": "Software Engineer 9",
    "company": "Company 9 Pvt Ltd",
    "location": "City 5",
    "type": "Part Time",
    "salary": "39000 INR/month",
    "category": "Technology",
    "description": "This is a detailed description for job position 9. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 5 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 10,
    "title": "Marketing Executive 10",
    "company": "Company 10 Pvt Ltd",
    "location": "City 1",
    "type": "Full Time",
    "salary": "40000 INR/month",
    "category": "Marketing",
    "description": "This is a detailed description for job position 10. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 1 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 11,
    "title": "Financial Analyst 11",
    "company": "Company 11 Pvt Ltd",
    "location": "City 2",
    "type": "Part Time",
    "salary": "41000 INR/month",
    "category": "Finance",
    "description": "This is a detailed description for job position 11. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 2 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 12,
    "title": "Software Engineer 12",
    "company": "Company 12 Pvt Ltd",
    "location": "City 3",
    "type": "Full Time",
    "salary": "42000 INR/month",
    "category": "Technology",
    "description": "This is a detailed description for job position 12. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 3 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 13,
    "title": "Marketing Executive 13",
    "company": "Company 13 Pvt Ltd",
    "location": "City 4",
    "type": "Part Time",
    "salary": "43000 INR/month",
    "category": "Marketing",
    "description": "This is a detailed description for job position 13. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 4 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 14,
    "title": "Financial Analyst 14",
    "company": "Company 14 Pvt Ltd",
    "location": "City 5",
    "type": "Full Time",
    "salary": "44000 INR/month",
    "category": "Finance",
    "description": "This is a detailed description for job position 14. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 5 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 15,
    "title": "Software Engineer 15",
    "company": "Company 15 Pvt Ltd",
    "location": "City 1",
    "type": "Part Time",
    "salary": "45000 INR/month",
    "category": "Technology",
    "description": "This is a detailed description for job position 15. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 1 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 16,
    "title": "Marketing Executive 16",
    "company": "Company 16 Pvt Ltd",
    "location": "City 2",
    "type": "Full Time",
    "salary": "46000 INR/month",
    "category": "Marketing",
    "description": "This is a detailed description for job position 16. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 2 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 17,
    "title": "Financial Analyst 17",
    "company": "Company 17 Pvt Ltd",
    "location": "City 3",
    "type": "Part Time",
    "salary": "47000 INR/month",
    "category": "Finance",
    "description": "This is a detailed description for job position 17. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 3 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 18,
    "title": "Software Engineer 18",
    "company": "Company 18 Pvt Ltd",
    "location": "City 4",
    "type": "Full Time",
    "salary": "48000 INR/month",
    "category": "Technology",
    "description": "This is a detailed description for job position 18. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 4 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 19,
    "title": "Marketing Executive 19",
    "company": "Company 19 Pvt Ltd",
    "location": "City 5",
    "type": "Part Time",
    "salary": "49000 INR/month",
    "category": "Marketing",
    "description": "This is a detailed description for job position 19. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 5 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  },
  {
    "id": 20,
    "title": "Financial Analyst 20",
    "company": "Company 20 Pvt Ltd",
    "location": "City 1",
    "type": "Full Time",
    "salary": "50000 INR/month",
    "category": "Finance",
    "description": "This is a detailed description for job position 20. Responsibilities include handling various tasks, team collaboration, and ensuring timely delivery.",
    "requirements": [
      "Bachelor's Degree in related field",
      "Minimum 1 years of experience",
      "Strong communication skills",
      "Problem-solving mindset"
    ]
  }
];