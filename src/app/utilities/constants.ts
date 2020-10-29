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
      new Student('Vivamus', 'Quisque', 'Sed hendrerit enim', 30, 0),
      new Student('Fusce', 'Curabitur', 'Vestibulum molestie lacus ac', 21, 0),
      new Student('Praesent', 'Aenean', 'Ut iaculis ipsum sit amet nisl', 17, 0),
      new Student('Lorem', 'Phasellus', 'Morbi id justo dictum', 25, 1),
      new Student('Lorem', 'Phasellus', 'Morbi id justo dictum', 25, 1),
      new Student('Vivamus', 'Quisque', 'Sed hendrerit enim', 30, 1),
      new Student('Fusce', 'Curabitur', 'Vestibulum molestie lacus ac', 21, 1),
      new Student('Lorem', 'Phasellus', 'Morbi id justo ddictum', 25, 1),
      new Student('Fusce', 'Curabitur', 'Vestibulum molestie lacus ac', 21, 1),
      new Student('Praesent', 'Aenean', 'Ut iaculis ipsum sit amet nisl', 17, 2),
      new Student('Praesent', 'Aenean', 'Ut iaculis ipsum sit amet nisl', 17, 2),
      new Student('Lorem', 'Phasellus', 'Morbi id justo dictum', 25, 2),
      new Student('Vivamus', 'Quisque', 'Sed hendrerit enim', 30, 2),
      new Student('Fusce', 'Curabitur', 'Vestibulum molestie lacus ac', 21, 2),
      new Student('Lorem', 'Phasellus', 'Morbi id justo dictum', 25, 3),
      new Student('Vivamus', 'Quisque', 'Sed hendrerit enim', 30, 4),
      new Student('Praesent', 'Aenean', 'Ut iaculis ipsum sit amet nisl', 17, 4),
  ];
}
