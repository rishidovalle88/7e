using _7e.Domain.Entities.Quizzes;
using System.Collections.Generic;

namespace _7e.Domain.Entities.Courses
{
    public class Module : CourseContext
    {
        public ICollection<Class> Classes { get; set; }
        public ICollection<Quiz> Quizzes { get; set; }
    }
}
