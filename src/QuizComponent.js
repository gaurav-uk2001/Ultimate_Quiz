import React, { useState, useEffect } from 'react';
import './QuizComponent.css';

const questionsData = {

  "General Knowledge": [
      { "question": "What is the capital of France?", "options": ["Paris", "London", "Berlin", "Madrid"], "answer": "Paris" },
      { "question": "Who invented the telephone?", "options": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], "answer": "Alexander Graham Bell" },
      { "question": "What is the largest ocean on Earth?", "options": ["Atlantic", "Indian", "Arctic", "Pacific"], "answer": "Pacific" },
      { "question": "Which country is known as the Land of the Rising Sun?", "options": ["China", "Japan", "Thailand", "South Korea"], "answer": "Japan" },
      { "question": "What is the smallest continent?", "options": ["Europe", "Australia", "Antarctica", "Asia"], "answer": "Australia" },
      { "question": "What is the longest river in the world?", "options": ["Amazon", "Nile", "Yangtze", "Mississippi"], "answer": "Nile" },
      { "question": "Which planet is known as the Blue Planet?", "options": ["Earth", "Mars", "Neptune", "Uranus"], "answer": "Earth" },
      { "question": "What is the currency of the United States?", "options": ["Euro", "Dollar", "Yen", "Pound"], "answer": "Dollar" },
      { "question": "Who wrote 'Romeo and Juliet'?", "options": ["Mark Twain", "Jane Austen", "William Shakespeare", "Charles Dickens"], "answer": "William Shakespeare" },
      { "question": "What is the hardest natural substance on Earth?", "options": ["Gold", "Diamond", "Iron", "Quartz"], "answer": "Diamond" },
      { "question": "Which gas do plants absorb from the atmosphere?", "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], "answer": "Carbon Dioxide" },
      { "question": "What is the largest mammal in the world?", "options": ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"], "answer": "Blue Whale" },
      { "question": "What is the main ingredient in guacamole?", "options": ["Tomato", "Avocado", "Onion", "Pepper"], "answer": "Avocado" },
      { "question": "Which is the largest desert in the world?", "options": ["Sahara", "Gobi", "Antarctic", "Arabian"], "answer": "Antarctic" },
      { "question": "Who painted the Mona Lisa?", "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], "answer": "Leonardo da Vinci" },
      { "question": "What is the main language spoken in Brazil?", "options": ["Spanish", "Portuguese", "French", "English"], "answer": "Portuguese" },
      { "question": "How many continents are there?", "options": ["5", "6", "7", "8"], "answer": "7" },
      { "question": "What is the freezing point of water?", "options": ["0°C", "32°F", "100°C", "212°F"], "answer": "0°C" },
      { "question": "Which element has the chemical symbol 'O'?", "options": ["Osmium", "Oxygen", "Gold", "Oganesson"], "answer": "Oxygen" },
      { "question": "Who is known as the father of modern physics?", "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], "answer": "Albert Einstein" }
  ],
  "Movies": [
      { "question": "Who directed 'Inception'?", "options": ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"], "answer": "Christopher Nolan" },
      { "question": "Which movie won Best Picture in 2020?", "options": ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"], "answer": "Parasite" },
      { "question": "Who played the Joker in 'The Dark Knight'?", "options": ["Joaquin Phoenix", "Heath Ledger", "Jack Nicholson", "Jared Leto"], "answer": "Heath Ledger" },
      { "question": "What is the highest-grossing film of all time?", "options": ["Titanic", "Avatar", "Star Wars: The Force Awakens", "Avengers: Endgame"], "answer": "Avatar" },
      { "question": "In which movie does Tom Hanks play a stranded astronaut?", "options": ["Cast Away", "Apollo 13", "Gravity", "Interstellar"], "answer": "Cast Away" },
      { "question": "What is the name of the hobbit played by Elijah Wood?", "options": ["Samwise", "Frodo", "Gandalf", "Bilbo"], "answer": "Frodo" },
      { "question": "Which animated movie features a talking snowman named Olaf?", "options": ["Frozen", "Toy Story", "Shrek", "Zootopia"], "answer": "Frozen" },
      { "question": "What year was the original 'Jurassic Park' released?", "options": ["1990", "1993", "1995", "1997"], "answer": "1993" },
      { "question": "Which film features a young girl named Matilda?", "options": ["The BFG", "Matilda", "Willy Wonka", "Harry Potter"], "answer": "Matilda" },
      { "question": "Who directed 'Pulp Fiction'?", "options": ["Quentin Tarantino", "Martin Scorsese", "Ridley Scott", "Tim Burton"], "answer": "Quentin Tarantino" },
      { "question": "Which movie features a character named Jack Dawson?", "options": ["Titanic", "The Great Gatsby", "Inception", "Catch Me If You Can"], "answer": "Titanic" },
      { "question": "What is the name of the princess in 'The Princess Bride'?", "options": ["Buttercup", "Zelda", "Leia", "Fiona"], "answer": "Buttercup" },
      { "question": "Which film is about a boy who never grows up?", "options": ["The Lion King", "Finding Neverland", "Peter Pan", "Toy Story"], "answer": "Peter Pan" },
      { "question": "In which movie does a character say 'I'll be back'?", "options": ["The Terminator", "Predator", "Die Hard", "RoboCop"], "answer": "The Terminator" },
      { "question": "What is the name of the fictional African country in 'Black Panther'?", "options": ["Wakanda", "Narnia", "Hogwarts", "Elbonia"], "answer": "Wakanda" },
      { "question": "Which film features a time machine called the DeLorean?", "options": ["Back to the Future", "The Time Machine", "Terminator", "Looper"], "answer": "Back to the Future" },
      { "question": "Who voices the character of Woody in 'Toy Story'?", "options": ["Tom Hanks", "Tim Allen", "Robin Williams", "Jim Carrey"], "answer": "Tom Hanks" },
      { "question": "What is the highest-grossing animated film?", "options": ["Frozen II", "The Lion King", "Toy Story 4", "Frozen"], "answer": "Frozen II" },
      { "question": "Which film features a secret agent named James Bond?", "options": ["Mission Impossible", "The Bourne Identity", "Casino Royale", "John Wick"], "answer": "Casino Royale" },
      { "question": "Who plays the character of Hermione Granger in the Harry Potter series?", "options": ["Emma Watson", "Emma Stone", "Natalia Dyer", "Maisie Williams"], "answer": "Emma Watson" }
  ],
  "Science": [
      { "question": "What planet is known as the Red Planet?", "options": ["Mars", "Earth", "Venus", "Jupiter"], "answer": "Mars" },
      { "question": "What is the chemical symbol for water?", "options": ["H2O", "O2", "CO2", "NaCl"], "answer": "H2O" },
      { "question": "What gas do plants release during photosynthesis?", "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], "answer": "Oxygen" },
      { "question": "What is the powerhouse of the cell?", "options": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"], "answer": "Mitochondria" },
      { "question": "Which element is most abundant in the universe?", "options": ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"], "answer": "Hydrogen" },
          { "question": "What part of the plant conducts photosynthesis?", "options": ["Roots", "Stems", "Leaves", "Flowers"], "answer": "Leaves" },
{ "question": "What is the speed of light?", "options": ["300,000 km/s", "150,000 km/s", "600,000 km/s", "1,000,000 km/s"], "answer": "300,000 km/s" },
{ "question": "What is the process of converting a solid directly into a gas?", "options": ["Evaporation", "Sublimation", "Condensation", "Freezing"], "answer": "Sublimation" },
{ "question": "What is the largest organ in the human body?", "options": ["Heart", "Skin", "Liver", "Lungs"], "answer": "Skin" },
{ "question": "What type of bond involves the sharing of electron pairs?", "options": ["Ionic", "Covalent", "Metallic", "Hydrogen"], "answer": "Covalent" },
{ "question": "What is the boiling point of water at sea level?", "options": ["100°C", "90°C", "120°C", "80°C"], "answer": "100°C" },
{ "question": "What is the primary gas found in the Earth's atmosphere?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], "answer": "Nitrogen" },
{ "question": "What is the chemical formula for table salt?", "options": ["KCl", "NaCl", "MgO", "CaCO3"], "answer": "NaCl" },
{ "question": "What part of the atom contains protons and neutrons?", "options": ["Electron cloud", "Nucleus", "Shell", "Orbital"], "answer": "Nucleus" },
{ "question": "What is the study of living organisms called?", "options": ["Chemistry", "Biology", "Physics", "Geology"], "answer": "Biology" },
{ "question": "Which organ is responsible for pumping blood throughout the body?", "options": ["Brain", "Lungs", "Heart", "Kidneys"], "answer": "Heart" },
{ "question": "What type of energy is stored in food?", "options": ["Kinetic", "Potential", "Chemical", "Thermal"], "answer": "Chemical" },
{ "question": "Which scientist is known for the theory of relativity?", "options": ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"], "answer": "Albert Einstein" },
{ "question": "What is the most common type of star in the universe?", "options": ["Red giant", "Supernova", "White dwarf", "Main sequence"], "answer": "Main sequence" },
{ "question": "What is the main component of the sun?", "options": ["Oxygen", "Hydrogen", "Helium", "Carbon"], "answer": "Hydrogen" },
{ "question": "What is the process of cell division called?", "options": ["Mitosis", "Meiosis", "Fission", "Fusion"], "answer": "Mitosis" },
{ "question": "Which structure in the brain regulates body temperature?", "options": ["Cerebellum", "Hypothalamus", "Cortex", "Brainstem"], "answer": "Hypothalamus" },
{ "question": "What is the term for an animal that only eats plants?", "options": ["Carnivore", "Omnivore", "Herbivore", "Detritivore"], "answer": "Herbivore" },
{ "question": "What type of electromagnetic radiation is used in microwaves?", "options": ["Infrared", "Visible light", "Radio waves", "Microwaves"], "answer": "Microwaves" }
],
"Computers": [
{ "question": "What does CPU stand for?", "options": ["Central Processing Unit", "Control Processing Unit", "Central Programming Unit", "Computer Personal Unit"], "answer": "Central Processing Unit" },
{ "question": "What is the most used programming language in 2023?", "options": ["Python", "JavaScript", "C++", "Java"], "answer": "JavaScript" },
{ "question": "What does HTML stand for?", "options": ["HyperText Markup Language", "HighText Machine Language", "HyperLink and Text Markup Language", "HyperText Markup Logic"], "answer": "HyperText Markup Language" },
{ "question": "Which company developed the Windows operating system?", "options": ["Apple", "Google", "Microsoft", "IBM"], "answer": "Microsoft" },
{ "question": "What is a computer's main memory called?", "options": ["RAM", "ROM", "Cache", "SSD"], "answer": "RAM" },
{ "question": "What does the acronym URL stand for?", "options": ["Uniform Resource Locator", "Universal Resource Locator", "User Resource Locator", "Unified Resource Locator"], "answer": "Uniform Resource Locator" },
{ "question": "Which of the following is an operating system?", "options": ["Google", "Firefox", "Linux", "Microsoft Office"], "answer": "Linux" },
{ "question": "What is the primary function of an operating system?", "options": ["To browse the internet", "To manage hardware and software resources", "To run applications", "To store data"], "answer": "To manage hardware and software resources" },
{ "question": "Which of the following is NOT a programming language?", "options": ["Python", "Java", "HTML", "C++"], "answer": "HTML" },
{ "question": "What does VPN stand for?", "options": ["Virtual Private Network", "Variable Public Network", "Virtual Public Network", "Virtual Protected Network"], "answer": "Virtual Private Network" },
{ "question": "What is the function of a compiler?", "options": ["To execute code", "To convert source code into machine code", "To debug code", "To optimize performance"], "answer": "To convert source code into machine code" },
{ "question": "What is cloud computing?", "options": ["Storing data on a local computer", "Accessing computing services over the internet", "Running software on a physical server", "Using a personal computer"], "answer": "Accessing computing services over the internet" },
{ "question": "What does GUI stand for?", "options": ["Graphical User Interface", "General User Interface", "Graphical Unique Interface", "General Unique Interface"], "answer": "Graphical User Interface" },
{ "question": "Which of these is a type of malware?", "options": ["Firewall", "Spyware", "Router", "Antivirus"], "answer": "Spyware" },
{ "question": "What does SQL stand for?", "options": ["Structured Query Language", "Standard Query Language", "Sequential Query Language", "Structured Question Language"], "answer": "Structured Query Language" },
{ "question": "What is the main purpose of a firewall?", "options": ["To provide internet access", "To protect a network from unauthorized access", "To speed up connections", "To manage user accounts"], "answer": "To protect a network from unauthorized access" },
{ "question": "Which of the following is a type of database?", "options": ["SQL", "HTML", "CSS", "JavaScript"], "answer": "SQL" },
{ "question": "What does IoT stand for?", "options": ["Internet of Things", "Integration of Technology", "Interconnected Objects", "Internet of Technology"], "answer": "Internet of Things" },
{ "question": "What is phishing?", "options": ["A method to catch fish", "A cyber attack to steal sensitive information", "A security protocol", "A type of programming"], "answer": "A cyber attack to steal sensitive information" },
{ "question": "What is a byte?", "options": ["A unit of digital information", "A type of computer virus", "A programming language", "A computer hardware component"], "answer": "A unit of digital information" }
],
"Mathematics": [
{ "question": "What is 5 + 5?", "options": ["10", "12", "11", "15"], "answer": "10" },
{ "question": "What is the square root of 64?", "options": ["8", "6", "9", "10"], "answer": "8" },
{ "question": "What is the value of π (pi)?", "options": ["3.14", "3.16", "3.12", "3.10"], "answer": "3.14" },
{ "question": "What is 12 x 12?", "options": ["144", "156", "128", "132"], "answer": "144" },
{ "question": "What is 15% of 200?", "options": ["30", "25", "35", "20"], "answer": "30" },
{ "question": "What is the perimeter of a square with a side length of 4?", "options": ["16", "12", "10", "14"], "answer": "16" },
{ "question": "What part of the plant conducts photosynthesis?", "options": ["Roots", "Stems", "Leaves", "Flowers"], "answer": "Leaves" },
{ "question": "What is the speed of light?", "options": ["300,000 km/s", "150,000 km/s", "600,000 km/s", "1,000,000 km/s"], "answer": "300,000 km/s" },
{ "question": "What is the process of converting a solid directly into a gas?", "options": ["Evaporation", "Sublimation", "Condensation", "Freezing"], "answer": "Sublimation" },
{ "question": "What is the largest organ in the human body?", "options": ["Heart", "Skin", "Liver", "Lungs"], "answer": "Skin" },
{ "question": "What type of bond involves the sharing of electron pairs?", "options": ["Ionic", "Covalent", "Metallic", "Hydrogen"], "answer": "Covalent" },
{ "question": "What is the boiling point of water at sea level?", "options": ["100°C", "90°C", "120°C", "80°C"], "answer": "100°C" },
{ "question": "What is the primary gas found in the Earth's atmosphere?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], "answer": "Nitrogen" },
{ "question": "What is the chemical formula for table salt?", "options": ["KCl", "NaCl", "MgO", "CaCO3"], "answer": "NaCl" },
{ "question": "What part of the atom contains protons and neutrons?", "options": ["Electron cloud", "Nucleus", "Shell", "Orbital"], "answer": "Nucleus" },
{ "question": "What is the study of living organisms called?", "options": ["Chemistry", "Biology", "Physics", "Geology"], "answer": "Biology" },
{ "question": "Which organ is responsible for pumping blood throughout the body?", "options": ["Brain", "Lungs", "Heart", "Kidneys"], "answer": "Heart" },
{ "question": "What type of energy is stored in food?", "options": ["Kinetic", "Potential", "Chemical", "Thermal"], "answer": "Chemical" },
{ "question": "Which scientist is known for the theory of relativity?", "options": ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"], "answer": "Albert Einstein" },
{ "question": "What is the most common type of star in the universe?", "options": ["Red giant", "Supernova", "White dwarf", "Main sequence"], "answer": "Main sequence" },
{ "question": "What is the main component of the sun?", "options": ["Oxygen", "Hydrogen", "Helium", "Carbon"], "answer": "Hydrogen" },
{ "question": "What is the process of cell division called?", "options": ["Mitosis", "Meiosis", "Fission", "Fusion"], "answer": "Mitosis" },
{ "question": "Which structure in the brain regulates body temperature?", "options": ["Cerebellum", "Hypothalamus", "Cortex", "Brainstem"], "answer": "Hypothalamus" },
{ "question": "What is the term for an animal that only eats plants?", "options": ["Carnivore", "Omnivore", "Herbivore", "Detritivore"], "answer": "Herbivore" },
{ "question": "What type of electromagnetic radiation is used in microwaves?", "options": ["Infrared", "Visible light", "Radio waves", "Microwaves"], "answer": "Microwaves" }
],
"Computers": [
{ "question": "What does CPU stand for?", "options": ["Central Processing Unit", "Control Processing Unit", "Central Programming Unit", "Computer Personal Unit"], "answer": "Central Processing Unit" },
{ "question": "What is the most used programming language in 2023?", "options": ["Python", "JavaScript", "C++", "Java"], "answer": "JavaScript" },
{ "question": "What does HTML stand for?", "options": ["HyperText Markup Language", "HighText Machine Language", "HyperLink and Text Markup Language", "HyperText Markup Logic"], "answer": "HyperText Markup Language" },
{ "question": "Which company developed the Windows operating system?", "options": ["Apple", "Google", "Microsoft", "IBM"], "answer": "Microsoft" },
{ "question": "What is a computer's main memory called?", "options": ["RAM", "ROM", "Cache", "SSD"], "answer": "RAM" },
{ "question": "What does the acronym URL stand for?", "options": ["Uniform Resource Locator", "Universal Resource Locator", "User Resource Locator", "Unified Resource Locator"], "answer": "Uniform Resource Locator" },
{ "question": "Which of the following is an operating system?", "options": ["Google", "Firefox", "Linux", "Microsoft Office"], "answer": "Linux" },
{ "question": "What is the primary function of an operating system?", "options": ["To browse the internet", "To manage hardware and software resources", "To run applications", "To store data"], "answer": "To manage hardware and software resources" },
{ "question": "Which of the following is NOT a programming language?", "options": ["Python", "Java", "HTML", "C++"], "answer": "HTML" },
{ "question": "What does VPN stand for?", "options": ["Virtual Private Network", "Variable Public Network", "Virtual Public Network", "Virtual Protected Network"], "answer": "Virtual Private Network" },
{ "question": "What is the function of a compiler?", "options": ["To execute code", "To convert source code into machine code", "To debug code", "To optimize performance"], "answer": "To convert source code into machine code" },
{ "question": "What is cloud computing?", "options": ["Storing data on a local computer", "Accessing computing services over the internet", "Running software on a physical server", "Using a personal computer"], "answer": "Accessing computing services over the internet" },
{ "question": "What does GUI stand for?", "options": ["Graphical User Interface", "General User Interface", "Graphical Unique Interface", "General Unique Interface"], "answer": "Graphical User Interface" },
{ "question": "Which of these is a type of malware?", "options": ["Firewall", "Spyware", "Router", "Antivirus"], "answer": "Spyware" },
{ "question": "What does SQL stand for?", "options": ["Structured Query Language", "Standard Query Language", "Sequential Query Language", "Structured Question Language"], "answer": "Structured Query Language" },
{ "question": "What is the main purpose of a firewall?", "options": ["To provide internet access", "To protect a network from unauthorized access", "To speed up connections", "To manage user accounts"], "answer": "To protect a network from unauthorized access" },
{ "question": "Which of the following is a type of database?", "options": ["SQL", "HTML", "CSS", "JavaScript"], "answer": "SQL" },
{ "question": "What does IoT stand for?", "options": ["Internet of Things", "Integration of Technology", "Interconnected Objects", "Internet of Technology"], "answer": "Internet of Things" },
{ "question": "What is phishing?", "options": ["A method to catch fish", "A cyber attack to steal sensitive information", "A security protocol", "A type of programming"], "answer": "A cyber attack to steal sensitive information" },
{ "question": "What is a byte?", "options": ["A unit of digital information", "A type of computer virus", "A programming language", "A computer hardware component"], "answer": "A unit of digital information" }
],
"Mathematics": [
{ "question": "What is 5 + 5?", "options": ["10", "12", "11", "15"], "answer": "10" },
{ "question": "What is the square root of 64?", "options": ["8", "6", "9", "10"], "answer": "8" },
{ "question": "What is the value of π (pi)?", "options": ["3.14", "3.16", "3.12", "3.10"], "answer": "3.14" },
{ "question": "What is 12 x 12?", "options": ["144", "156", "128", "132"], "answer": "144" },
{ "question": "What is 15% of 200?", "options": ["30", "25", "35", "20"], "answer": "30" },
{ "question": "What is the perimeter of a square with a side length of 4?", "options": ["16", "12", "10", "14"], "answer": "16" },
{ "question": "What is the formula for the area of a triangle?", "options": ["1/2 × base × height", "base × height", "2 × base + height", "base + height"], "answer": "1/2 × base × height" },
{ "question": "What is the value of 9 squared?", "options": ["81", "72", "90", "99"], "answer": "81" },
{ "question": "What is 7 x 8?", "options": ["56", "54", "64", "48"], "answer": "56" },
{ "question": "What is the next prime number after 7?", "options": ["8", "9", "11", "10"], "answer": "11" },
{ "question": "What is the sum of angles in a triangle?", "options": ["180°", "360°", "90°", "270°"], "answer": "180°" },
{ "question": "What is 100 divided by 4?", "options": ["25", "20", "30", "40"], "answer": "25" },
{ "question": "What is the greatest common divisor of 12 and 16?", "options": ["2", "4", "8", "6"], "answer": "4" },
{ "question": "What is the decimal equivalent of 1/4?", "options": ["0.25", "0.50", "0.75", "0.10"], "answer": "0.25" },
{ "question": "If a triangle has sides of length 3, 4, and 5, what type of triangle is it?", "options": ["Scalene", "Isosceles", "Equilateral", "Right"], "answer": "Right" },
{ "question": "What is the value of 2 cubed?", "options": ["6", "8", "4", "10"], "answer": "8" },
{ "question": "What is the circumference of a circle with a radius of 7?", "options": ["44", "14", "21", "28"], "answer": "44" },
{ "question": "What is 20% of 150?", "options": ["30", "25", "20", "35"], "answer": "30" },
{ "question": "What is the formula for the area of a rectangle?", "options": ["length × width", "length + width", "2 × (length + width)", "length - width"], "answer": "length × width" },
{ "question": "How many degrees are in a right angle?", "options": ["90°", "180°", "360°", "45°"], "answer": "90°" },
{ "question": "What is the value of 10 factorial (10!)?", "options": ["3628800", "100", "1000", "720"], "answer": "3628800" },
{ "question": "What is the next number in the sequence: 2, 4, 8, 16?", "options": ["20", "24", "32", "30"], "answer": "32" },
{ "question": "What is 50 minus 12?", "options": ["38", "42", "48", "36"], "answer": "38" },
{ "question": "What is the hypotenuse of a right triangle with legs of 3 and 4?", "options": ["5", "6", "7", "8"], "answer": "5" },
{ "question": "If x = 3, what is the value of 2x + 4?", "options": ["10", "12", "8", "14"], "answer": "10" },
{ "question": "What is the term for a number that can only be divided by 1 and itself?", "options": ["Composite", "Prime", "Even", "Odd"], "answer": "Prime" }
],
"Sports": [
{ "question": "Who won the FIFA World Cup in 2018?", "options": ["France", "Brazil", "Germany", "Argentina"], "answer": "France" },
{ "question": "How many players are on a basketball team?", "options": ["5", "6", "7", "8"], "answer": "5" },
{ "question": "Which sport is known as 'the beautiful game'?", "options": ["Basketball", "Football (Soccer)", "Cricket", "Tennis"], "answer": "Football (Soccer)" },
{ "question": "Which country hosted the 2020 Summer Olympics?", "options": ["Tokyo", "Rio de Janeiro", "London", "Beijing"], "answer": "Tokyo" },
{ "question": "In tennis, what is the term for a score of 40-40?", "options": ["Deuce", "Advantage", "Game point", "Set point"], "answer": "Deuce" },
{ "question": "What is the length of a marathon?", "options": ["42.195 km", "26.2 miles", "30 km", "20 km"], "answer": "42.195 km" },
{ "question": "Which sport is known for the Tour de France?", "options": ["Swimming", "Cycling", "Running", "Rowing"], "answer": "Cycling" },
{ "question": "How many minutes are in a standard football (soccer) match?", "options": ["90", "80", "60", "120"], "answer": "90" },
{ "question": "Which sport uses a bat and ball and is played on a diamond?", "options": ["Cricket", "Baseball", "Softball", "Tennis"], "answer": "Baseball" },
{ "question": "What is the highest possible break in snooker?", "options": ["147", "150", "100", "120"], "answer": "147" },
{ "question": "In which sport would you perform a slam dunk?", "options": ["Football", "Basketball", "Volleyball", "Rugby"], "answer": "Basketball" },
{ "question": "Which country is famous for the sport of sumo wrestling?", "options": ["China", "Japan", "South Korea", "Mongolia"], "answer": "Japan" },
{ "question": "What is the term for scoring three runs in one hit in baseball?", "options": ["Home run", "Triple", "Double", "Single"], "answer": "Triple" },
{ "question": "What type of race is the Tour de France?", "options": ["Running", "Cycling", "Swimming", "Triathlon"], "answer": "Cycling" },
{ "question": "Which sport is known as 'the king of sports'?", "options": ["Football (Soccer)", "Cricket", "Basketball", "Tennis"], "answer": "Football (Soccer)" },
{ "question": "Which athlete is known as 'the fastest man alive'?", "options": ["Usain Bolt", "Carl Lewis", "Jesse Owens", "Michael Johnson"], "answer": "Usain Bolt" },
{ "question": "In which sport do teams compete for the Stanley Cup?", "options": ["Basketball", "Football", "Hockey", "Baseball"], "answer": "Hockey" },
{ "question": "What is the main objective in the game of golf?", "options": ["To score touchdowns", "To hit a ball into a series of holes", "To score runs", "To score points by shooting"], "answer": "To hit a ball into a series of holes" },
{ "question": "Which country has won the most Rugby World Cups?", "options": ["New Zealand", "South Africa", "Australia", "England"], "answer": "New Zealand" },
{ "question": "Which sport is known for the phrase 'home run'?", "options": ["Cricket", "Baseball", "Softball", "Football"], "answer": "Baseball" },
{ "question": "What is the term for a player who scores a touchdown in American football?", "options": ["Quarterback", "Wide receiver", "Running back", "Kicker"], "answer": "Running back" }
]
};

function QuizComponent({ settings, finishQuiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(settings.timer * 60);
  
  const selectedCategoryQuestions = questionsData[settings.category];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    // Stop the timer when it reaches 0
    if (timer <= 0) {
      finishQuiz(score);  // Finish quiz if time runs out
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, score, finishQuiz]);

  const handleAnswer = (selectedOption) => {
    if (selectedCategoryQuestions[currentQuestionIndex].answer === selectedOption) {
      setScore(score + 1);
    }
    
    // Proceed to next question or finish the quiz
    if (currentQuestionIndex < settings.questionCount - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz(score);  // Call finishQuiz when all questions are answered
    }
  };

  return (
    <div className="quiz-card">
      <h3>{selectedCategoryQuestions[currentQuestionIndex].question}</h3>
      {selectedCategoryQuestions[currentQuestionIndex].options.map((option) => (
        <button key={option} onClick={() => handleAnswer(option)} className="option-button">
          {option}
        </button>
      ))}
      <div className="timer">
        Time Left: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}
      </div>
    </div>
  );
}

export default QuizComponent;



