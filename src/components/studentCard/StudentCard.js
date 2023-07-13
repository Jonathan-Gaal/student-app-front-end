import "./StudentCard.scss";

const StudentCard = ({ student }) => {
  // console.log(student);
  const { firstName, lastName, pic, company, skill, email } = student;
  const studentGrades = [...student.grades];
  // console.log(studentGrades);

  const calculateStudentGradeAverages = (studentGrades) => {
    const studentGradesTotal = studentGrades?.reduce((acc, curr) => {
      return (acc += Number(curr));
    }, 0);
    const studentGradesAverage = studentGradesTotal / studentGrades.length;
    return studentGradesAverage?.toFixed(2);
  };

  // console.log(calculateStudentGradeAverages(studentGrades));

  return (
    <div className="studentCard">
      <div className="studentCard__profileImage">
        <img src={`${pic}`} alt="student profile" />
      </div>
      <div className="studentCard__info">
        <div className="studentCard__name">{`${firstName} ${lastName}`} </div>
        <div className="studentCard__detail"> {`${email}`} </div>
        <div className="studentCard__detail"> Company: {`${company}`} </div>
        <div className="studentCard__detail"> Skill: {`${skill}`}</div>
        <div className="studentCard__detail">
          {" "}
          Average: {calculateStudentGradeAverages(studentGrades)}%{" "}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
