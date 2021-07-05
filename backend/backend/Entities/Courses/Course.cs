using System.Collections.Generic;

namespace _7e.Domain.Entities.Courses
{
    public class Course : CourseContext
    {        
        public ICollection<Module> Modules { get; set; }
    }
}
