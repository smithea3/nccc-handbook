var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-the-basics-of-fte",
  "level": "1",
  "url": "sec-the-basics-of-fte.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Basics of Full-time Equivalence",
  "body": " The Basics of Full-time Equivalence  The term full-time equivalence is not endemic to colleges and universities. Many human resources departments at other companies and organizations use the term full-time equivalence when determining business aspects. For example, a company may wish to calculate the profits per employee. To do so, they must consider the full-time employees and the part-time employees time into an equivalent measure for comparison and calculation. In mathematics, the process of calculating a singluar standard by which to compare individuals within a group is called normalizing .  As stated in the introduction of this chapter, the term FTE is used in other institutions and organizations other than just colleges and university. Therefore, the following definitions are necessary to establish the calculations that will be discussed later.   Census Date  The [North Carolina] State Voard of Community College Code 1G SBCCC 200.93: Reporting of Student Hours in Membership for Curriculum Classes states that the census date is the date at which 10% of the course's meeting time has occured.    Number of Students  The number of students is the number of students participating in a course at the of the course.    Student Membership Hours  The student membership hours is the total number of hours each student meets in a course.    Course Membership Hours  The course membership hours is the total number of in a course.  To calculate the course members hours, the formula for this calculation is   Notice that course membership hours, regardless of the number of weeks that a course meets, is calculated using a 16-week baseline.   Consider the following example to give context to these definition.    Consider an ENG-111: Writing and Inquiry course that originally had 24 students on the roster at the start date of the course. Now consider, as you may have witnessed, that two students drop the course before the , and another student never participated in any part of the course by the Census Date. This means that 21 students are participating in the course at the Census Date; therefore, the in the course would be 21.  The for ENG-111, the calculati    "
},
{
  "id": "sec-the-basics-of-fte-2",
  "level": "2",
  "url": "sec-the-basics-of-fte.html#sec-the-basics-of-fte-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normalizing "
},
{
  "id": "def-census-date",
  "level": "2",
  "url": "sec-the-basics-of-fte.html#def-census-date",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Census Date.",
  "body": " Census Date  The [North Carolina] State Voard of Community College Code 1G SBCCC 200.93: Reporting of Student Hours in Membership for Curriculum Classes states that the census date is the date at which 10% of the course's meeting time has occured.  "
},
{
  "id": "def-number-of-students",
  "level": "2",
  "url": "sec-the-basics-of-fte.html#def-number-of-students",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Number of Students.",
  "body": " Number of Students  The number of students is the number of students participating in a course at the of the course.  "
},
{
  "id": "def-student-membership-hours",
  "level": "2",
  "url": "sec-the-basics-of-fte.html#def-student-membership-hours",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Student Membership Hours.",
  "body": " Student Membership Hours  The student membership hours is the total number of hours each student meets in a course.  "
},
{
  "id": "def-course-membership-hours",
  "level": "2",
  "url": "sec-the-basics-of-fte.html#def-course-membership-hours",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Course Membership Hours.",
  "body": " Course Membership Hours  The course membership hours is the total number of in a course.  To calculate the course members hours, the formula for this calculation is   Notice that course membership hours, regardless of the number of weeks that a course meets, is calculated using a 16-week baseline.  "
},
{
  "id": "sec-the-basics-of-fte-9",
  "level": "2",
  "url": "sec-the-basics-of-fte.html#sec-the-basics-of-fte-9",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "  Consider an ENG-111: Writing and Inquiry course that originally had 24 students on the roster at the start date of the course. Now consider, as you may have witnessed, that two students drop the course before the , and another student never participated in any part of the course by the Census Date. This means that 21 students are participating in the course at the Census Date; therefore, the in the course would be 21.  The for ENG-111, the calculati   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
