var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
const port= 2450;
grtOrLess = "";
statecity=[];
customers = [
  {
    custId: 1,
    name: "ABC",
    password: "abc1234",
    role: "admin",
    email: "abc@gmail.com"
  },
  {
    custId: 2,
    name: "Willie",
    password: "willie1234",
    role: "student",
    email: "willie@gmail.com"
  },
  {
    custId: 3,
    name: "Jack",
    password: "jack1234",
    role: "faculty",
    email: "jack@gmail.com"
  },
  {
    custId: 4,
    name: "James",
    password: "james1234",
    role: "student",
    email: "james@gmail.com"
  },
  {
    custId: 5,
    name: "Harry",
    password: "harry1234",
    role: "faculty",
    email: "harry@gmail.com"
  },
  {
    custId: 6,
    name: "Tia",
    password: "tia1234",
    role: "student",
    email: "tia@gmail.com"
  },
  {
    custId: 7,
    name: "Aditya",
    password: "aditya123",
    role: "faculty",
    email: "aditya@gmail.com"
  },
  {
    custId: 8,
    name: "Sonu",
    password: "sonu1234",
    role: "student",
    email: "sonu@gmail.com"
  },
  {
    custId: 9,
    name: "Ellie",
    password: "ellie1234",
    role: "student",
    email: "ellie@gmail.com"
  },
  {
    custId: 10,
    name: "Gia",
    password: "gia1234",
    role: "faculty",
    email: "gia@gmail.com"
  }
];
courses = [
  {
    courseId: 1,
    name: "ANGULAR",
    code: "ANG97",
    description: "All fundamentals of Angular 7",
    faculty: ["Daniel", "Jack"],
    students: ["Sam"]
  },
  {
    courseId: 2,
    name: "JAVASCRIPT",
    code: "JS124",
    description: "Intoduction to javascript",
    faculty: ["Aditya"],
    students: ["James", "Joy", "Monu", "Rita"]
  },
  {
    courseId: 3,
    name: "REACT",
    code: "RCT56",
    description: "React Javascript library",
    faculty: ["Jack", "Gia"],
    students: ["Raima", "Rita", "Sonu", "James"]
  },
  {
    courseId: 4,
    name: "BOOTSTRAP",
    code: "BS297",
    description: "Bootstrap Designing Framework",
    faculty: [],
    students: ["James", "Tia", "Ellie"]
  },
  {
    courseId: 5,
    name: "CSS",
    code: "CS365",
    description: "Basic stylesheet language",
    faculty: [],
    students: ["James", "Rita", "Monica"]
  },
  {
    courseId: 6,
    name: "REST AND MICROSERVICES",
    code: "RM392",
    description: "Introduction to Microservices",
    faculty: [],
    students: ["Sam"]
  },
  {
    courseId: 7,
    name: "NODE",
    code: "ND725",
    description: "Introduction to Node",
    faculty: ["Sonia"],
    students: ["Saransh", "Shrey", "Monica"]
  }
];
faculties = [
  { id: 5, name: "Daniel", courses: ["ANGULAR"] },
  { id: 4, name: "Sonia", courses: ["NODE"] },
  { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
  { id: 2, name: "Gia", courses: ["REACT"] },
  { id: 1, name: "Aditya", courses: ["ANGULAR"] }
];
classes = [
  {
    classId: 1,
    course: "REACT",
    time: "07:45",
    endTime: "08:45",
    topic: "Redux",
    facultyName: "Jack"
  },
  {
    classId: 2,
    course: "ANGULAR",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Jack"
  },
  {
    classId: 3,
    course: "JAVASCRIPT",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Aditya"
  }
];
students = [
  {
    id: 16,
    name: "Willie",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "NODE"]
  },
  {
    id: 15,
    name: "Tia",
    dob: "30-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 14,
    name: "Apoorv",
    dob: "31-August-1998",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 13,
    name: "Joy",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 12,
    name: "Rachel",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 11,
    name: "Monica",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["CSS", "NODE"]
  },
  {
    id: 10,
    name: "Monu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 9,
    name: "Sonu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["REACT"]
  },
  {
    id: 8,
    name: "Raima",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["REACT"]
  },
  {
    id: 7,
    name: "Rita",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "REACT", "CSS"]
  },
  {
    id: 6,
    name: "Shrey",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["NODE"]
  },
  {
    id: 5,
    name: "Saransh",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: ["NODE"]
  },
  {
    id: 4,
    name: "Sanya",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 3,
    name: "James",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
  },
  {
    id: 2,
    name: "Sam",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "REST AND MICROSERVICES"]
  },
  {
    id: 1,
    name: "Ellie",
    dob: "12-June-1992",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["BOOTSTRAP"]
  }
];
app.post("/login", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var cust = customers.find(function(item) {
    return item.email === email && item.password === password;
  });
  console.log(cust);
  var custRec= {
    name:cust.name,
    email: cust.email,
    role: cust.role
  }
  res.send(custRec);
});








app.post("/register", function(req, res) {
  const cust = {
    custId:customers.length+1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    
  };
  const st ={
    id: students.length+1,
    name: req.body.name,
  }
  const facul ={
    id: faculties.length+1,
    name: req.body.name,
  }
  if(cust.role==="student"){
    students.unshift(st);
  }
  else if(cust.role==="faculty"){
    faculties.unshift(facul);
  }  
  customers.unshift(cust);
  var customerRes= {
    name: req.body.name,
    role: "student" || "faculty",
    email: req.body.email,
  }
  res.send(customerRes);
});

app.get("/getStudentNames", function(req, res) {
  let studentNames = [];
  for(let i = 0; i<students.length;i++){
    studentNames.push(students[i].name)
  }
  console.log(studentNames)
  res.send(studentNames);
});

app.get("/getFacultyNames", function(req, res) {
  let facultyNames = [];
  for(let i = 0; i<faculties.length;i++){
    facultyNames.push(faculties[i].name)
  }
  res.send(facultyNames);
});

app.get("/getCourses", function(req, res) {
  res.send(courses);
});

app.put('/putCourse', (req, res) => {
  const { courseId, name, code, description, faculty, students } = req.body;

  const course = courses.find(course => course.courseId === courseId);
  if (course) {
    course.name = name;
    course.code = code;
    course.description = description;
    course.faculty = faculty;
    course.students = students;
  } else {
    courses.push({
      courseId: courseId,
      name: name,
      code: code,
      description: description,
      faculty: faculty,
      students: students
    });
  }

  res.json({
    courseId: courseId,
    name: name,
    code: code,
    description: description,
    faculty: faculty,
    students: students
  });
});



app.get('/getStudents', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  
  const courses = req.query.course ? req.query.course.split(',') : null;
  
  const startIndex = (page - 1) * 3;
  const endIndex = startIndex + 2;
  
  let filteredData = students;
  if (courses) {
    filteredData = students.filter(student => {
      return student.courses.some(course => courses.includes(course));
    });
  }
  
  const totalNum = filteredData.length;
  
  const items = filteredData.slice(startIndex, endIndex + 1);
  
  const response = {
    page: page,
    items: items,
    totalItems: items.length,
    totalNum: totalNum
  };
  
  res.json(response);
});





app.get('/getFaculties', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let filteredFaculties = faculties;

  if (req.query.course) {
    const courses = req.query.course.split(',');
    filteredFaculties = filteredFaculties.filter(faculty => {
      return courses.every(course => faculty.courses.includes(course));
    });
  }

  const totalNum = filteredFaculties.length;
  const totalItems = Math.ceil(totalNum / itemsPerPage);
  const items = filteredFaculties.slice(startIndex, endIndex);

  const response = {
    page,
    totalItems,
    totalNum,
    items
  };

  res.json(response);
});

app.post('/postStudentDetails', (req, res) => {
  const { name, dob, gender, about } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    dob,
    gender,
    about,
    courses: []
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
});


app.get('/getStudentDetails/:name', (req, res) => {
  const name = req.params.name;
  const student = students.find(s => s.name === name);

  if (student) {
    res.status(200).json(student);
  } else {
    res.status(500).json({ error: `Student with name ${name} not found` });
  }
});

app.get('/getStudentCourse/:name', (req, res) => {
  const studentName = req.params.name;
  const student = students.find(student => student.name === studentName);
  
  if (!student) {
    return res.status(500).json({ error: 'Student not found' });
  }
  
  const course = courses.filter(course => student.courses.includes(course.name));
  
  res.json(course);
});

app.get('/getStudentClass/:name', (req, res) => {
  const { name } = req.params;
  const student = students.find(student => student.name === name);

  if (!student) {
    return res.status(500).json({ error: 'Student not found' });
  }
  const classArr = classes.filter(c => student.courses.includes(c.course));
  res.json(classArr);
  
  
});

app.get('/getFacultyCourse/:name', (req, res) => {
  const facultyName = req.params.name;
  const faculty = faculties.find(f => f.name.toLowerCase() === facultyName.toLowerCase());
  if (!faculty) {
    res.status(404).send(`Faculty ${facultyName} not found.`);
    return;
  }

  const facultyCourses = courses.filter(c => faculty.courses.includes(c.name));
  res.send(facultyCourses);
});

app.get('/getFacultyClass/:name', (req, res) => {
  const facultyName = req.params.name;
  const facultyClasses = classes.filter(cls => cls.facultyName === facultyName);
  res.json(facultyClasses);
});

app.post('/postClass', (req, res) => {
  const { course, time, endTime, topic, facultyName } = req.body;

  const newClass = {
    classId: classes.length+1,
    course,
    time,
    endTime,
    topic,
    facultyName,
  };
  classes.push(newClass);

  res.json(newClass);
});

app.put('/postClass/:classId', (req, res) => {
  const classId = parseInt(req.params.classId);
  const updatedClass = req.body;

  const classToUpdate = classes.find(cls => cls.classId === classId);

  if (!classToUpdate) {
    return res.status(404).send('Class not found');
  }

  classToUpdate.course = updatedClass.course;
  classToUpdate.time = updatedClass.time;
  classToUpdate.endTime = updatedClass.endTime;
  classToUpdate.topic = updatedClass.topic;
  classToUpdate.facultyName = updatedClass.facultyName;

  res.send(classToUpdate);
});





app.listen(port, () => console.log(`Node app listening on port ${port}!`));
