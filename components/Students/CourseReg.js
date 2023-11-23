import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import { loadStripe } from "@stripe/stripe-js";

const CourseRegistration = () => {
  const [courses, setCourses] = useState([]);
  const [showY1, setShowY1] = useState(true);
  const [showY2, setShowY2] = useState(false);
  const [showY3, setShowY3] = useState(false);
  const [showY4, setShowY4] = useState(false);

  const courseListY1S1 = ['Introduction to Programming', 'Mathematics for Computer Science', 'English Composition', 'Introduction to Psychology', 'Fundamentals of Design'];

  const courseListY1S2 = ['Data Structures', 'Calculus I', 'Introduction to Sociology', 'Web Development Basics', 'Critical Thinking'];
  
  const courseListY2S1 = ['Algorithms', 'Linear Algebra', 'Introduction to Artificial Intelligence', 'Database Management', 'Technical Writing'];
  
  const courseListY2S2 = ['Object-Oriented Programming', 'Statistics', 'Human-Computer Interaction', 'Network Fundamentals', 'Ethics in Technology'];
  
  const courseListY3S1 = ['Software Engineering', 'Computer Organization and Architecture', 'Operating Systems', 'Digital Logic Design', 'Project Management'];
  
  const courseListY3S2 = ['Machine Learning', 'Computer Networks', 'Database Systems', 'Cybersecurity Fundamentals', 'Advanced Web Development'];
  
  const courseListY4S1 = ['Software Testing and Quality Assurance', 'Cloud Computing', 'Mobile App Development', 'Capstone Project I', 'Professional Development'];
  
  const courseListY4S2 = ['Artificial Intelligence Applications', 'Big Data Analytics', 'Capstone Project II', 'Industry Internship', 'Graduation Thesis'];
  

  const registerCourse = (course) => {
    if (courses.length < 10) {
      setCourses([...courses, course]);
    } else {
      alert('You have reached the maximum number of courses for this semester.');
    }
  };

  const tabsStyles = (isActive) => ({
    ...styles.header, 
    backgroundColor: isActive ? 'orange' : 'white',
    color: isActive ? 'white' : 'black',
  })

  const handleRegisterCourses = (course) => {
    //logic to post to firebase to be added later
    
    alert(`You have successfully registered for ${courses.length} courses.` );

    router.replace('home');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Course Registration</Text>
      <Text style={styles.text}>Select the courses you wish to register for this academic year.</Text>
      <View style={styles.courseList}>
        <Text style={tabsStyles(showY1)} onPress={() => {
          setShowY1(!showY1);
          setShowY2(false);
          setShowY3(false);
          setShowY4(false);
        }
        }
          >Year 1</Text>
        <Text style={tabsStyles(showY2)}
        onPress={() => {
          setShowY2(!showY2);
          setShowY1(false);
          setShowY3(false);
          setShowY4(false);
        }
        }
        >Year 2</Text>
        <Text style={tabsStyles(showY3)}
        onPress={() => {
          setShowY3(!showY3);
          setShowY1(false);
          setShowY2(false);
          setShowY4(false);
        }
        }
        >Year 3</Text>
        <Text style={tabsStyles(showY4)}
        onPress={() => {
          setShowY4(!showY4);
          setShowY1(false);
          setShowY2(false);
          setShowY3(false);
        }
        }
        >Year 4</Text>

      </View>


      {showY1 && (
        <View style={styles.courseList}>
          <View style={styles.semList}>
            <Text style={styles.header}>Semester 1</Text>
            {courseListY1S1.map((course, index) => (
              <Pressable key={index} style={styles.courseItem} onPress={() => registerCourse(course)}>
                <Text style={styles.text}>{course}</Text>
                {courses.includes(course) && (
              <Icon name="check-circle" size={20} color="green" />
            )}
              </Pressable>
            ))}
          </View>
          <View style={styles.semList}>
            <Text style={styles.header}>Semester 2</Text>
            {courseListY1S2.map((course,index) => (
              <Pressable key={index} style={styles.courseItem} onPress={() => registerCourse(course)}>
                <Text style={styles.text}>{course}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}


      {showY2 && (
        <View style={styles.courseList}>
          <View style={styles.semList}>
            <Text style={styles.header}>Semester 1</Text>
            {courseListY2S1.map((course,index) => (
              <Pressable key={index} style={styles.courseItem} onPress={() => registerCourse(course)}>
                <Text style={styles.text}>{course}</Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.semList}>
            <Text style={styles.header}>Semester 2</Text>
            {courseListY2S2.map((course,index) => (
              <Pressable key={index} style={styles.courseItem} onPress={() => registerCourse(course)}>
                <Text style={styles.text}>{course}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}


      {showY3 && (
        <View style={styles.courseList}>
          <View style={styles.semList}>


            <Text style={styles.header}>Semester 1</Text>
            {courseListY3S1.map((course,index) => (
              <Pressable key={index} style={styles.courseItem} onPress={() => registerCourse(course)}>
                <Text style={styles.text}>{course}</Text>
              </Pressable>
            ))}
          </View>


          <View style={styles.semList}>
            <Text style={styles.header}>Semester 2</Text>
            {courseListY3S2.map((course,index) => (
              <Pressable key={index} style={styles.courseItem} onPress={() => registerCourse(course)}>
                <Text style={styles.text}>{course}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}


      {showY4 && (
        <View style={styles.courseList}>
          <View style={styles.semList}>
            <Text style={styles.header}>Semester 1</Text>
            {courseListY4S1.map((course) => (
              <Pressable key={index} style={styles.courseItem} onPress={() => registerCourse(course)}>
                <Text style={styles.text}>{course}</Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.semList}>
            <Text style={styles.header}>Semester 2</Text>
            {courseListY4S2.map((course) => (
              <Pressable key={index} style={styles.courseItem} onPress={() => registerCourse(course)}>
                <Text style={styles.text}>{course}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      <View style={{ marginTop: 20 }}>
        <Text style={styles.header}>Registered Courses for the selected semester</Text>
        {
          courses.length === 0 && <Text style={styles.text}>No courses registered yet.</Text>
        }
        {courses.map((course,index) => (
          <View key={index} style={styles.courseItem}>
          <Text style={styles.text}
         
          >{course}</Text>

          <Pressable style={styles.deleteButton} onPress={() => setCourses(courses.filter((c) => c !== course))}>
            <Text style={styles.text}>Delete</Text>
          </Pressable>  
          </View>
        ))}

        {
          courses.length > 0 && (
            <View  style={styles.bottomButtons}>
            <Pressable style={styles.register} onPress={handleRegisterCourses}>
              <Text style={styles.text}>Register</Text>
            </Pressable>
  
          <Pressable style={styles.deleteButton} onPress={() => setCourses([])}>
            <Text style={styles.text}>Delete All</Text>
          </Pressable>
          </View>
          )
        }
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '10 20',
  },
  courseList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  semList: {
    width: '50%',
  },
  courseItem: {
    width: '100',
    margin: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  register: {
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 5,
    padding: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 5,
    padding: 5,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  }
});

export default CourseRegistration;
