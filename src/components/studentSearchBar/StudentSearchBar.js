import React from "react";
import { useState } from "react";
import "./studentSearchBar.scss";

const StudentSearchBar = ({
  studentMasterData,
  filteredStudentData,
  setFilteredStudentData,
}) => {
  const [searchStudentName, setSearchStudentName] = useState("");

  function filterStudentNamesByStudentSearchBarInput(
    searchStudentName,
    filteredStudentData
  ) {
    return filteredStudentData.filter((student) => {
      const { firstName, lastName } = student;
      const studentFullName = `${(firstName, lastName)}`.toLocaleLowerCase();
      studentFullName.match(searchStudentName.toLowerCase());
    });
  }

  function filterStudentsByName(
    studentNameTextFromStudentSearchBar,
    filteredStudentData
  ) {
    const studentNameOptions = studentNameTextFromStudentSearchBar.split(" ");

    function nameStartsWithOption(student) {
      const { firstName, lastName } = student;

      for (let option of studentNameOptions) {
        const lowerCaseOption = option.toLowerCase();
        const [lowerCaseFirstName, lowerCaseLastName] = [
          firstName.toLowerCase(),
          lastName.toLowerCase(),
        ];

        if (
          lowerCaseFirstName.startsWith(lowerCaseOption) ||
          lowerCaseLastName.startsWith(lowerCaseOption)
        )
          return student;
      }
    }

    return filteredStudentData.filter(nameStartsWithOption);
  }

  function filterStudentsByFirstOrLastName(
    studentNameTextFromStudentSearchBar,
    filteredStudentData
  ) {
    return filteredStudentData.filter((student) => {
      if (
        student.firstName
          .toLowerCase()
          .match(studentNameTextFromStudentSearchBar.toLowerCase()) ||
        student.lastName
          .toLowerCase()
          .match(studentNameTextFromStudentSearchBar.toLowerCase())
      ) {
        return student;
      }
    });
  }

  const handleSearchbarTextChange = (e) => {
    const searchStudentName = e.target.value;
    const studentsThatMatchStudentSearchInputString = searchStudentName.length
      ? filterStudentNamesByStudentSearchBarInput(
          searchStudentName,
          studentMasterData
        )
      : studentMasterData;
    setFilteredStudentData(studentsThatMatchStudentSearchInputString);
    setSearchStudentName(searchStudentName);
  };

  //courtesy of Jan
  const handleSearchbarTextChange2 = (e) => {
    const searchStudentName = e.target.value;
    const studentsThatWillResultFromStudentFilter = searchStudentName.length
      ? filterStudentsByName(searchStudentName, filteredStudentData)
      : studentMasterData;
    setFilteredStudentData(studentsThatWillResultFromStudentFilter);
    setSearchStudentName(searchStudentName);
  };

  return (
    <div className="studentSearchBar">
      <input
        type="text"
        id="searchStudentName"
        value={searchStudentName}
        className="studentSearchBar__Input"
        placeholder="Search by name"
        onChange={handleSearchbarTextChange2}></input>
    </div>
  );
};

export default StudentSearchBar;
