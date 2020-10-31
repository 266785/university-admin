import {Student} from '../common/models/student';
import {UniversityClass} from '../common/models/university-class';

export class AppConstants {
  public static CLASSES_MOCK_DATA = [
    new UniversityClass(0, 'Class 0'),
    new UniversityClass(1, 'Class 1'),
    new UniversityClass(2, 'Class 2'),
    new UniversityClass(3, 'Class 3'),
    new UniversityClass(4, 'Class 4'),
  ];

  public static STUDENTS_MOCK_DATA = [
    new Student( 1, 'Vivamus', 'Quisque', 'Sed hendrerit enim', 30, 0, false),
    new Student( 2, 'Fusce', 'Curabitur', 'Vestibulum molestie lacus ac', 21, 0, false),
    new Student( 3, 'Praesent', 'Aenean', 'Ut iaculis ipsum sit amet nisl', 17, 0, false),
    new Student( 4, 'Lorem', 'Phasellus', 'Morbi id justo dictum', 25, 1, false),
    new Student( 5, 'Lorem', 'Phasellus', 'Morbi id justo dictum', 25, 1, false),
    new Student( 6, 'Vivamus', 'Quisque', 'Sed hendrerit enim', 30, 1, false),
    new Student( 7, 'Fusce', 'Curabitur', 'Vestibulum molestie lacus ac', 21, 1, false),
    new Student( 8, 'Lorem', 'Phasellus', 'Morbi id justo ddictum', 25, 1, false),
    new Student( 9, 'Fusce', 'Curabitur', 'Vestibulum molestie lacus ac', 21, 1, false),
    new Student( 10, 'Praesent', 'Aenean', 'Ut iaculis ipsum sit amet nisl', 17, 2, false),
    new Student( 11, 'Praesent', 'Aenean', 'Ut iaculis ipsum sit amet nisl', 17, 2, false),
    new Student( 12, 'Lorem', 'Phasellus', 'Morbi id justo dictum', 25, 2, false),
    new Student( 13, 'Vivamus', 'Quisque', 'Sed hendrerit enim', 30, 2, false),
    new Student( 14, 'Fusce', 'Curabitur', 'Vestibulum molestie lacus ac', 21, 2, false),
    new Student( 15, 'Lorem', 'Phasellus', 'Morbi id justo dictum', 25, 3, false),
    new Student( 16, 'Vivamus', 'Quisque', 'Sed hendrerit enim', 30, 4, false),
    new Student( 17, 'Praesent', 'Aenean', 'Ut iaculis ipsum sit amet nisl', 17, 4, false),
  ];
}
